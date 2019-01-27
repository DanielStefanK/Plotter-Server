const net = require("net");
const socket = new net.Socket();

process.on("exit", () => socket.destroy());

module.exports = {
  connect(ip, onError) {
    return new Promise((resolve, reject) => {
      socket.once("error", () => {
        reject();
      });

      socket.connect(
        1337,
        ip,
        () => {
          socket.removeAllListeners("error");
          socket.on("error", onError);
          resolve();
        }
      );
    });
  },

  send(data) {
    return new Promise((resolve, reject) => {
      console.log ('sending data: ' + data)
      socket.write(data);
      socket.once("data", res => {
        console.log(res.toString("utf-8"));
        resolve(res);
      });
    });
  },

  destroy() {
    return new Promise((resolve, reject) => {
      socket.destroy();
      resolve();
    });
  }
};
