const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const socketHandler = require("./socketHandler");

const plotter = {
  ip: '192.168.1.100',
  x: 0,
  y:0,
  pen: false,
  connection: 'disconnected'
}

app.use('/api', bodyParser.json());

app.use (express.static(__dirname + '/frontend/dist'))

app.post("/api/connect", (req, res) => {
  ip = req.body.ip || plotter.ip

  plotter.ip = ip

  socketHandler.connect (ip, ()=>{
    plotter.connection = 'connected'
    res.json ({
      result: plotter,
      error: null
    })
  })
});

app.post("/api/state", (req, res) => {
  res.json ({
    result: plotter,
    error: null
  })
});

app.post("/api/sendData", (req, res) => {
  data = req.body.data

  if (plotter.connection != 'connected') {
    return res.json ({error: 'plotter not connected', result: null})
  }

  plotter = {...socketHandler.sendData(data, plotter), ...plotter}

  res.json({ error: null, result: plotter});
});

app.post("/api/goHome", async (req, res) => {
  if (plotter.connection != 'connected') {
    return res.json ({error: 'plotter not connected', data: null})
  }

  
});

app.post("/api/setHome", (req, res) => {
  if (plotter.connection != 'connected') {
    return res.json ({error: 'plotter not connected', data: null})
  }
  plotter.x = 0
  plotter.y = 0
  res.json({result: plotter, error : null})
});

app.use(function(req, res) {
  console.log(req.body);
  res.send({
    ok: false
  });
});

app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});
