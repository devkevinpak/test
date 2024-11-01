import Vue from 'vue'

export interface IEvents extends Record<string, (...args:any[]) => void> {
  // [ event: string] : (...args: any[]) => void
}

export class EventBus<E> {
  // NOTE: 이벤트 버스 구현체는 Vue 가 아닌 다른 형태일 수 있음. 외부로 표시되는 인터페이스만 고정적으로 유지
  static readonly _bus = new Vue()
  static readonly services: string[] = []
  private name: string = ''

  constructor (name: string) {
    if (EventBus.services.find((n) => n === name)) {
      throw new Error('can not create duplicated event name')
    }
    this.name = name
  }

  public $on<K extends keyof E> (event: K, callback: E[K]): void {
    EventBus._bus.$on(`${this.name}.${event as string}`, callback as any)
  }

  public $off<K extends keyof E> (event: K, callback: E[K]): void {
    EventBus._bus.$off(`${this.name}.${event as string}`, callback as any)
  }

  protected $emit<EV extends IEvents & E, K extends keyof EV, P extends Parameters<EV[K]>> (event: K, ...args: P): void {
  // protected $emit<K extends keyof E, P extends Parameters<E[K]>> (event: K, ...args: P): void {
    EventBus._bus.$emit(`${this.name}.${event as string}`, ...args)
  }
}
