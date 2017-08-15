import Permission from './Permission';

export default class WebNotify {
  constructor() {
    this._permission = new Permission();
  }
  create(title, options) {
    this._title = title;
    this._options = options || {};
    this.requestPermission();
    this.showNotification();
  }
  requestPermission(onGranted, onDenied) {
    if (!this._permission.has()) {
      this._permission.request(onGranted, onDenied);
    }
  }
  showNotification() {
    let notification = null;
    if (this._permission.has()) {
      notification = new Notification(this._title, this._options);
    } else if (this._permission.get() !== "denied") {
      this.requestPermission();
    }
    if (notification !== null) {
      if (this.isFunction(this._options.onShow)) {
        notification.addEventListener('show', this._options.onShow);
      }

      if (this.isFunction(this._options.onError)) {
        notification.addEventListener('error', this._options.onError);
      }

      if (this.isFunction(this._options.onClick)) {
        notification.addEventListener('click', this._options.onClick);
      }

      notification.addEventListener('close', () => {
        if (this.isFunction(this._options.onClose)) {
          this._options.onClose.call(this, notification);
        }
      });
    }
  }
  isFunction(obj) {
    return obj && {}.toString.call(obj) === '[object Function]';
  }
}
