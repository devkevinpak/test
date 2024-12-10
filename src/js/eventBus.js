// 이벤트 버스 클래스 정의
class EventBus {
  constructor() {
    this.events = {};
  }

  // 이벤트 구독
  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback);
  }

  // 이벤트 발행
  emit(eventName, data) {
    if (this.events[eventName]) {
      this.events[eventName].forEach(callback => callback(data));
    }
  }

  // 이벤트 구독 취소
  off(eventName, callback) {
    if (this.events[eventName]) {
      if (callback) {
        this.events[eventName] = this.events[eventName].filter(cb => cb !== callback);
      } else {
        delete this.events[eventName];
      }
    }
  }
}

// 스크롤 이벤트 상수 정의
const SCROLL_EVENTS = {
  PREVENT_SCROLL: 'preventScroll',
  SCROLL_ACTIVE: 'scrollActive',
  SCROLL_START: 'scrollStart',
  SCROLL_END: 'scrollEnd'
};

// 싱글톤 인스턴스 생성 및 내보내기
const eventBus = new EventBus();

export { eventBus as default, SCROLL_EVENTS };
