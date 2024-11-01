import axios from 'axios'
import { EventBus } from '@lib/util/bus'

const DOMAIN = 'https://tmobi-api.obigo.com'
// const DOMAIN = 'https://tmobigw.obigo.com' // dev

export default class RestApi extends EventBus<string> {
  static _instance: RestApi

  private popupId: string = 'id-rest-api'
  public request: any

  public state: any

  private key: string = 'zv9j3uHXrMZEdaiwNqizLJ7XrPE/JTOwXSnT9gPtY06Y8cHC2G4y6WQCbQx8QpTn'
  private oem: string = 'TMO-01-K'
  private vin: string = '1LjhCq+KufKUSIn1nOCW6g=='

  constructor (config: any, state: any = null) {
    super('rest')
    this.request = axios.create(config)
    this.createRequestInterceptor()
    this.createResponseInterceptor()
    this.state = state
  }

  private getUUID (): string {
    let name = ''
    try {
      const id = window.applicationFramework.applicationManager.getOwnerApplication(document).getDescriptor().id.split('/')
      name = id[id.length - 1]
    } catch (err) {
      name = "template"
    }
    let uuid = window.localStorage.getItem(`${name}-uuid`)
    function s4 () {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1)
    }
    if (!uuid) {
      uuid = s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4()
      window.localStorage.setItem(`${name}-uuid`, uuid)
    }
    return uuid
  }

  private async getToken() {
    try {
      const response = await axios.post(DOMAIN + '/api/v2/requestToken', null, {
        headers: {
          'api-key': this.key,
          oem: this.oem,
          vin: this.vin,
          uuid: this.getUUID()
        }
      })

      if (response) {
        localStorage.setItem('access-token', response.headers['access-token'] || '')
      }
      return response
    } catch (error) {
      throw new Error("Failed to get token")
    }
  }

  private createRequestInterceptor () {
    this.request.interceptors.request.use(async (config: any) => {
      console.log('[Request]')
      let token = localStorage.getItem('access-token')

      if (this.state?.isOnline === false) {
        throw new axios.Cancel('network-disconnect')
      }

      if (!token) {
        await this.getToken().then(response =>{
          token = response.headers['access-token'] || ''
        })
      }

      if (config.headers && config.headers.uuid && config.headers.uuid === 'uuid') {
        config.headers['uuid'] = this.getUUID()
      }

      config.headers['access-token'] = token

      return config
    }, (error: any) => {
      return Promise.reject(error)
    })
  }

  private createResponseInterceptor () {
    this.request.interceptors.response.use((response: any) => {
      console.debug('[Response] : ', JSON.parse(JSON.stringify(response)))
      return new Promise((resolve) => {
        resolve(response)
      })
    }, (error: any) => {
      console.debug('[Response]', JSON.parse(JSON.stringify(error)))
      return new Promise((resolve, reject) => {
        try {
          let errorInfo = JSON.parse(JSON.stringify(error))
          // 네트워크 오류 시 reject
          if (
            errorInfo.message === "network-disconnect" ||
            errorInfo.message === "network-error" ||
            errorInfo.message === "Network Error"
          ) {
            reject(error)
          } else {
            if (!errorInfo) { reject(error) }
            if (
              errorInfo.config.baseURL.indexOf(DOMAIN) > -1 &&
              errorInfo.status === 401
            ) {
              try {
                // 토큰 재발급 요청 후 원래 요청 재시도
                console.log('[update token] errorInfo : ', errorInfo)
                this.getToken().then(() => {
                  const retryResponse = this.request.request(error.config)
                  resolve(retryResponse)
                })
              } catch (tokenError) {
                reject(tokenError)
              }
            } else {
              reject(error)
            }
          }
        } catch (error) {
          reject(error)
        }
      })
    })
  }
}
