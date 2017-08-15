export default class Permission {
  constructor() {
    this.DEFAULT = 'default';
    this.GRANTED = 'granted';
    this.DENIED = 'denied';
    this.UNKNOW = 'unknow';
  }
  request(onGranted, onDenied) {
    let existing = this.get();

    let resolve = (result) => {
      if (result === this.GRANTED || result === 0) {
        if (onGranted) onGranted();
      } else {
        if (onDenied) onDenied();
      };
    }

    if (existing !== this.DEFAULT) {
      resolve(existing);
    } else if (window.Notification && window.Notification.requestPermission) {
      window.Notification.requestPermission().then(resolve).catch(() => {
        if (onDenied) onDenied();
      });
    }

  }
  has() {
    return this.get() === this.GRANTED;
  }
  get() {
    let permission = null;

    if (window.Notification && window.Notification.permission) {
      permission = window.Notification.permission;
    } else {
      permission = this.UNKNOW;
    }

    return permission;
  }
}
