import Permission from './Permission';

function _isFunction(obj) {
  return obj && {}.toString.call(obj) === '[object Function]';
}

function _showNotification(title, options) {
  let notification = new Notification(title, options);
  if (notification !== null) {
    if (_isFunction(options.onShow)) {
      notification.addEventListener('show', options.onShow);
    }
    if (_isFunction(options.onError)) {
      notification.addEventListener('error', options.onError);
    }
    if (_isFunction(options.onClick)) {
      notification.addEventListener('click', options.onClick);
    }
    notification.addEventListener('close', () => {
      if (_isFunction(options.onClose)) {
        options.onClose.call(this, notification);
      }
    });
  }
}

export default class WebNotify {
  constructor() {
    this.Permission = new Permission();
  }
  create(title, options) {
    if (typeof title !== 'String') {
      throw new Error('title must be String');
    }
    this._title = title;
    this._options = options || {};
    if (!this.Permission.has()) {
      this.Permission.request();
    }
    _showNotification(this._title, this._options);
  }
}
