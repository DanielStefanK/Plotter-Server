const net = require("net");
const socket = new net.Socket();

const socketWrapper = require("./socket");

module.exports = {
  sendData(data, updatePlotter) {
    data.forEach(async item => {
      await socketWrapper.send(JSON.stringify(item) + "\n");
      updatePlotter(item);
    });
  },

  connect(ip) {
    return socketWrapper.connect();
  },

  disconnect() {
    return socketWrapper.destroy();
  }
};
