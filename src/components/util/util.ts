let prevUniqNumber = 0
export function getUniqString (id: string = ''): string {
  let uniqNum:number = Date.now() * 100
  if (prevUniqNumber >= uniqNum) {
    uniqNum = prevUniqNumber + 1
  }
  prevUniqNumber = uniqNum
  return uniqNum.toString() + id
}

// interface IObserverInfo {
//   id: string
//   callback: Function
// }
// interface IState<T> {
//   _value: T
//   _subscribers: {id: string, callback: (value: T) => void }[]
//   getValue(): T
//   setValue(value: T): void
//   subscribe(callback:(value: T) => void): string
//   unsubscribe(callback: (value: T) => void) :void
//   unsubscribeById(subscriberId: string) :void
// }

// export function makeState<T>(value: T): IState<T> {
//   return {
//     _value: value,
//     _subscribers: [],
//     getValue():T {
//       return this._value
//     },
//     setValue(value: T) {
//       this._value = value
//       this._subscribers.forEach((subscriber) => {
//         subscriber.callback(value)
//       })
//     },
//     subscribe(callback) {
//       const id = getUniqString()
//       this._subscribers.push({id, callback})
//       return id
//     },
//     unsubscribe(callback) {
//       const idx = this._subscribers.findIndex((subscriber) => callback === subscriber.callback)
//       if(idx > -1) {
//         this._subscribers.splice(idx, 1)
//       }
//     },
//     unsubscribeById(id) {
//       const idx = this._subscribers.findIndex((subscriber) => id === subscriber.id)
//       if(idx > -1) {
//         this._subscribers.splice(idx, 1)
//       }
//     }
//   }
// }

export class OState<T> {
  _value: T
  // _subscribers: {id: string, callback: (value: T) => void, debounceMs: number, debouncedTimerId: number}[] = []
  _subscribers: {id: string, callback: (value: T) => void }[] = []

  static _prevUniqNumber = 10000

  constructor (value: T) {
    this._value = value
  }

  static makeUniqId (): string {
    OState._prevUniqNumber += 1
    return OState._prevUniqNumber.toString()
  }

  static subscribeAll<U> (states: OState<U>[], callback: (states: U[]) => void, withDefault: boolean = false): string {
    // 동일 ID로 등록
    const id = OState.makeUniqId()
    states.forEach((state) => {
      // 구독 중인 상태 정보 중 한가지라도 변하면 states 모두 callback 으로 전달 함
      state._subscribers.push({
        id,
        callback: () => {
          callback(states.map(s => s.getValue()))
        }
      })
    })
    if (withDefault) {
      // 초기화 완료 이후 값 전달
      setImmediate(() => {
        callback(states.map(s => s.getValue()))
      })
    }

    return id
  }

  static unsubscribeAll (states: OState<any>[], id: string) {
    states.forEach((state) => {
      state.unsubscribe(id)
    })
  }

  getValue ():T {
    return this._value
  }

  setValue (value: T) {
    this._value = value
    this.notify()
  }

  notify () {
    this._subscribers.forEach((subscriber) => {
      subscriber.callback(this._value)
    })
  }

  subscribe (callback: (value: T) => void, withDefault: boolean = false): string {
    const id = OState.makeUniqId()
    this._subscribers.push({ id, callback })
    if (withDefault) {
      // 초기화 완료 이후 값 전달
      setImmediate(() => {
        callback(this.getValue())
      })
    }
    return id
  }

  // unsubscribe(callback: (value: T) => void) {
  //   const idx = this._subscribers.findIndex((subscriber) => callback === subscriber.callback)
  //   if(idx > -1) {
  //     this._subscribers.splice(idx, 1)
  //   }
  // }
  unsubscribe (id: string) {
    const idx = this._subscribers.findIndex((subscriber) => id === subscriber.id)
    if (idx > -1) {
      this._subscribers.splice(idx, 1)
    }
  }
}

type ODateFormat = 'YYYY.MM.DD P hh:mm' | 'YYYY-MM-DD' | 'YYYYMMDD'
export function convDateFormat (format: ODateFormat, date?: Date | number): string {
  const d: Date = (typeof date === 'number') ? new Date(date) : (date || new Date())
  const year = d.getFullYear()
  const month = d.getMonth() + 1
  const day = d.getDate()
  const hour = d.getHours()
  const min = d.getMinutes()
  const p = (hour >= 12) ? 'PM' : 'AM'

  let strDate = ''
  switch (format) {
    case 'YYYY.MM.DD P hh:mm':
      strDate = `${year}.${month}.${day} ${p} ${hour % 12 === 0 ? 12 : hour % 12}:${min < 10 ? '0' + min : min}`
      break
    case 'YYYY-MM-DD':
      strDate = `${year}-${month}-${day}`
      break
    case 'YYYYMMDD':
      strDate = `${year}${('0' + month).slice(-2)}${('0' + day).slice(-2)}`
      break
    default:
      strDate = 'invalid date format'
      break
  }
  return strDate
}

export function beep () {
  if (window.applicationFramework) {
    console.log('%cbeep!!!', 'color: #ff9900')
    window.applicationFramework.applicationManager.getOwnerApplication(window.document).beep()
  } else {
    console.log('%c[DEV] beep!!!', 'color: #ff9900')
  }
}
