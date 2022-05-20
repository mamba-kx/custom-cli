const tips = {
  unauthorized:
    '未允许访问动作与方向权限，请通过:\n 设置 - Safari浏览器 - 高级 - 网站数据 - 移除所有网站数据',
  unknown: '非iOS 13+设备'
};

function iosGranted() {
  return new Promise((resolve, reject) => {
    const ua = navigator.userAgent.toLowerCase(); //判断移动端设备，区分android，iphone，ipad和其它
    if (ua.indexOf('like mac os x') > 0) {
      const reg = /os [\d._]*/gi;
      const verinfo = ua.match(reg);
      const version = (verinfo + '')
        .replace(/[^0-9|_.]/gi, '')
        .replace(/_/gi, '.');
      if (parseFloat(version) >= 13) {
        if (typeof window.DeviceMotionEvent.requestPermission === 'function') {
          window.DeviceMotionEvent.requestPermission()
            .then(permissionState => {
              if (permissionState === 'granted') {
                resolve(permissionState);
              } else if (permissionState === 'denied') {
                reject(tips.unauthorized);
              }
            })
            .catch(() => {
              reject(tips.unauthorized);
            });
        } else {
          // 处理常规的非iOS 13+设备
          reject(tips.unknown);
        }
      } else {
        resolve('success: ios13以下');
      }
    } else {
      resolve('success: 非ios设备');
    }
  });
}

class Shake {
  constructor({
    threshold = 15,
    timeout = 1000,
    onShake = null,
    onStop = null
  } = {}) {
    if (typeof threshold !== 'number') {
      throw Error('threshold should be number');
    }
    if (typeof timeout !== 'number') {
      throw Error('timeout should be number');
    }
    if (onShake !== null) {
      if (typeof onShake !== 'function') {
        throw Error('onShake should be function');
      }
    }
    if (onStop !== null) {
      if (typeof onStop !== 'function') {
        throw Error('onStop should be function');
      }
    }
    this.options = {
      threshold: threshold,
      timeout: timeout,
      onShake: onShake,
      onStop: onStop
    };
    this.lastTime = new Date();
    this.lastX = null;
    this.lastY = null;
    this.lastZ = null;
    this.canUse = false;
    this._init();
  }

  _init() {
    iosGranted()
      .then(() => {
        this.canUse = true;
      })
      // eslint-disable-next-line no-console
      .catch(err => console.log(err));
  }

  devicemotion = e => {
    const current = e.accelerationIncludingGravity;
    let currentTime;
    let timeDifference;
    let deltaX = 0;
    let deltaY = 0;
    let deltaZ = 0;

    if (this.lastX === null && this.lastY === null && this.lastZ === null) {
      this.lastX = current.x;
      this.lastY = current.y;
      this.lastZ = current.z;
      return;
    }

    deltaX = Math.abs(this.lastX - current.x);
    deltaY = Math.abs(this.lastY - current.y);
    deltaZ = Math.abs(this.lastZ - current.z);

    if (
      (deltaX > this.options.threshold && deltaY > this.options.threshold) ||
      (deltaX > this.options.threshold && deltaZ > this.options.threshold) ||
      (deltaY > this.options.threshold && deltaZ > this.options.threshold)
    ) {
      //calculate time in milliseconds since last shake registered
      currentTime = new Date();
      timeDifference = currentTime.getTime() - this.lastTime.getTime();

      if (timeDifference > this.options.timeout) {
        this.options.onShake &&
          this.options.onShake({
            options: this.options,
            deltaX,
            deltaY,
            deltaZ
          });
        this.lastTime = new Date();
      }
    }

    this.lastX = current.x;
    this.lastY = current.y;
    this.lastZ = current.z;
  };

  reset() {
    this.lastTime = new Date();
    this.lastX = null;
    this.lastY = null;
    this.lastZ = null;
  }

  start() {
    return new Promise((resolve, reject) => {
      if (!this.canUse) {
        iosGranted()
          .then(() => {
            this.canUse = true;
            this.remove();
            window.addEventListener('devicemotion', this.devicemotion, false);
            resolve();
          })
          .catch(err => {
            reject(err);
          });
      } else {
        this.remove();
        window.addEventListener('devicemotion', this.devicemotion, false);
        resolve();
      }
    });
  }

  stop() {
    if (!this.canUse) {
      return;
    }
    this.remove();
    this.options.onStop && this.options.onStop();
  }

  remove() {
    if (!this.canUse) {
      return;
    }
    window.removeEventListener('devicemotion', this.devicemotion, false);
    this.reset();
  }
}

export default Shake;
