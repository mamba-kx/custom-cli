const svgStr = `
  <svg xmlns="http://www.w3.org/2000/svg" width="140px" height="150px">
    <text
      x="-50px"
      y="122px"
      style="
        fill: rgba(0,0,0,0.1);
        transform: rotate(-30deg);
        font-size: 12;
      "
    >
      测试环境,均为虚拟数据
    </text>
  </svg>
  `;

const url = `data:image/svg+xml;base64,${window.btoa(
  unescape(encodeURIComponent(svgStr))
)}`;

function addWatermark() {
  const watermakr = document.createElement('div');
  watermakr.className = 'tz-watermark';
  watermakr.style.cssText = `
    background-image: url(${url});
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: 999;
    pointer-events: none;
  `;
  document.body.appendChild(watermakr);
}

function createWatermark() {
  if (/(-test|-temp)/.test(window.location.href)) {
    addWatermark();
  }
}

export default createWatermark;
