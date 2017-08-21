import Permission from './Permission';

const isFunction = Symbol('isFunction');
const showNotification = Symbol('showNotification');

export default class WebNotify {

  constructor() {
    this.Permission = new Permission();
  }

  create(title, options) {
    this._title = title;
    this._options = options || {};
    if (!this.Permission.has()) {
      this.Permission.request();
    }
    this[showNotification](this._title, this._options);
  }

  [isFunction](obj) {
    return obj && {}.toString.call(obj) === '[object Function]';
  }

  [showNotification](title, options) {
    let notification = new Notification(title, options);
    if (notification !== null) {
      if (this[isFunction](options.onShow)) {
        notification.addEventListener('show', options.onShow);
      }
      if (this[isFunction](options.onError)) {
        notification.addEventListener('error', options.onError);
      }
      if (this[isFunction](options.onClick)) {
        notification.addEventListener('click', options.onClick);
      }
      notification.addEventListener('close', () => {
        if (this[isFunction](options.onClose)) {
          options.onClose.call(this, notification);
        }
      });
    }
  }

}
