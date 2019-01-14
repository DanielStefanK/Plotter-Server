const net = require("net");

module.exports = class Plotter {
  constructor(ip, port) {
    this.id = Math.random()
      .toString(36)
      .substring(2, 15);
    this.ip = ip;
    this.port = port;
    this.status = "disconnected";
    this.instructionsToSend = [];
    this.sendInstructions = [];
    this.state = {
      x: 0,
      y: 0,
      pen: false
    };
    var _socket = null;
    this.getSocket = ()=> {
        return _socket
    }
    this.setSocket = (socket)=>{
        _socket = socket
    }
  }

  connect() {
    return new Promise((resolve, reject) => {
        this.setSocket( new net.Socket())

      const onClose = () => {
        this.setSocket( null)
        this.status = "disconnected";
        reject();
      };

      this.getSocket().on("data", data => {
        console.log("socket " + this.id + "recieved data: " + data);
        const json = JSON.parse(data);

        if (json.success) {
          this.getSocket().emit(json.id, true);
        } else if (!json.success) {
          this.getSocket().emit(json.id, false);
        }
      });

      this.getSocket().on("connected", data => {
        this.status = "connected";
        this.getSocket().removeListener("error", onClose);
        this.getSocket().on("close", () => {
          this.getSocket() = null;
          this.status = "disconnected";
        });
        this.getSocket().on("error", () => {
            this.getSocket() = null;
            this.status = "disconnected";
          });
        resolve();
      });
      

      this.getSocket().on("error", onClose);

      this.getSocket().connect(this.port, this.ip)
    });
  }

  moveTo(x, y) {
    this.instructionsToSend.push({
      id: Math.random()
        .toString(36)
        .substring(2, 15),
      operation: "moveTo",
      options: {
        x,
        y
      }
    });
  }

  drawTo(x, y, cb = () => null) {
    this.instructionsToSend.push({
      id: Math.random()
        .toString(36)
        .substring(2, 15),
      operation: "drawTo",
      options: {
        x,
        y
      },
      cb
    });
  }

  async flush() {
    if (!this._socket) {
        await this.connect();
    }

    for (const instruction in this.instructionsToSend) {
      this.getSocket().once(instruction.id, data => {
        if (data) {
          this.state = {
            x: this.state.x + instruction.x,
            y: this.state.y + instruction.y,
            pen: instruction === "drawTo"
          };
          this.sendInstructions.push(instruction);
          instruction.cb(true);
        } else {
          instruction.cb(false);
        }
      });
      let req = instruction;
      delete req.cb;
      this.getSocket().write(JSON.stringify(req));

    }
  }
};
