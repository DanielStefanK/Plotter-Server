const net = require("net");
const socket = new net.Socket();

const socketWrapper = require("./socket");

module.exports = {
  async sendData(data, updatePlotter, plotter) {
    let plotterX = plotter.x;
    let plotterY = plotter.y;

    for (const item of data) {
      let x = item.x - plotterX;
      let y = item.y - plotterY;
      let sendObject = { operation: item.operation, x, y };
      await socketWrapper.send(JSON.stringify(sendObject) + "\n");
      plotterX = item.x;
      plotterY = item.y;
      updatePlotter(item);
    }
  },

  async sendCircle (data, updatePlotter, plotter) {
    await socketWrapper.send (JSON.stringify (data) + "\n")

    updatePlotter({...data, operation: 'moveTo'})
  },

  connect(ip, errorCb) {
    return socketWrapper.connect(
      ip,
      errorCb
    );
  },

  disconnect() {
    return socketWrapper.destroy();
  }
};
