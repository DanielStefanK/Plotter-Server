const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const bodyParser = require("body-parser");

const socketHandler = require("./socketHandler");

const plotter = {
  ip: "192.168.1.100",
  x: 0,
  y: 0,
  pen: false,
  connection: "disconnected",
  printed: []
};

app.use(express.static(__dirname + "/frontend/dist"));

io.on("connection", socket => {
  const updatePlotter = item => {
    plotter.x = item.x;
    plotter.y = item.y;
    plotter.pen = item.operation === "drawTo";
    plotter.connection = "printing";
    plotter.printed.push(item);
    socket.emit("plotterStatus", plotter);
  };

  console.log("a client connected");
  socket.emit("plotterStatus", plotter);

  socket.on("disconnect", () => {
    console.log("a client disconnected");
  });

  socket.on("connectPlotter", ip => {
    if (
      plotter.connection !== "disconnected" &&
      plotter.connection !== "error"
    ) {
      socket.emit("errorNetwork", "plotter already connected");
      return socket.emit("plotterStatus", plotter);
    }

    console.log("connection to ip: " + ip);
    plotter.ip = ip;

    socketHandler
      .connect(
        ip,
        () => {
          console.log("error in connection plotter: " + ip);
          plotter.connection = "error";
          socket.emit("plotterStatus", plotter);
        }
      )
      .then(() => {
        console.log("connected to plotter: " + ip);
        plotter.connection = "connected";
        return socket.emit("plotterStatus", plotter);
      })
      .catch(() => {
        console.log("connection failed: " + ip);
        plotter.connection = "disconnected";
        socket.emit("errorNetwork", "connection failed");
        return socket.emit("plotterStatus", plotter);
      });
  });

  socket.on("disconnectPlotter", ip => {
    if (plotter.connection !== "connected") {
      socket.emit("errorNetwork", "plotter cannot be disconnected");
      return socket.emit("plotterStatus", plotter);
    }

    console.log("disconnecting from: " + plotter.ip);

    socketHandler.disconnect().then(() => {
      console.log("disconnected from: " + ip);
      plotter.connection = "disconnected";
      return socket.emit("plotterStatus", plotter);
    });
  });

  socket.on("sendPrint", async printArray => {
    plotter.connection = "printing";
    socket.emit("plotterStatus", plotter);
    await socketHandler.sendData(printArray, updatePlotter, plotter);
    plotter.connection = "connected";
    socket.emit("plotterStatus", plotter);
  });

  socket.on("goHome", () => {
    plotter.connection = "printing";
    socket.emit("plotterStatus", plotter);
    socketHandler.sendData(
      [
        {
          operation: "moveTo",
          x: -plotter.x,
          y: -plotter.y
        }
      ],
      updatePlotter,
      plotter
    );
    plotter.connection = "connected";
    socket.emit("plotterStatus", plotter);
  });

  socket.on("setHome", () => {
    plotter.x = 0;
    plotter.y = 0;
    socket.emit("plotterStatus", plotter);
  });
});

app.use(function(req, res) {
  console.log(req.body);
  res.send({
    ok: false
  });
});

http.listen(3000, function() {
  console.log("Plotter-Server listening on 3000!");
});
