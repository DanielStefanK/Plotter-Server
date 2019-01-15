const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const Plotter = require("./plotter");

const plotter = [];

app.use('/api', bodyParser.json());

app.use (express.static(__dirname + '/frontend/dist'))

app.post("/pen", (req, res) => {
  state.pen = req.body.pen;
  res.send({ ok: true, state });
});

app.post("/api/addPlotter", (req, res) => {
  const newPlotter = new Plotter(req.body.ip, req.body.port);
  plotter.push(newPlotter);

  res.send({ ok: true, result: { plotter: newPlotter } });
});

app.post("/api/moveTo", async (req, res) => {
  const pltr = plotter.find(pltr => {
    return pltr.id === req.body.id;
  });

  pltr.moveTo(req.body.x, req.body.y, () => {
    res.send({ ok: true, state: pltr.state });
  });
  pltr.flush().catch(() => res.send({ ok: false }));
});

app.post("/api/drawTo", async (req, res) => {
  const pltr = plotter.find(pltr => {
    return pltr.id === req.body.id;
  });

  pltr.drawTo(req.body.x, req.body.y, () => {
    res.send({ ok: true, state: pltr.state });
  });
  pltr.flush().catch(() => res.send({ ok: false }));
});

app.post("/api/goHome", async (req, res) => {
  const pltr = plotter.find(pltr => {
    return pltr.id === req.body.id;
  });

  pltr.moveTo(0, 0, () => {
    res.send({ ok: true, state: pltr.state });
  });
  pltr.flush().catch(() => res.send({ ok: false }));
});

app.post("/api/setHome", (req, res) => {
  const pltr = plotter.find(pltr => {
    return pltr.id === req.body.id;
  });

  pltr.state.x = 0;
  pltr.state.y = 0;
  pltr.flush();

  res.send({ ok: true, state: pltr.state });
});

app.post("/api/status", (req, res) => {
  const pltr = plotter.find(pltr => {
    return pltr.id === req.body.id;
  });

  res.send({ ok: true, state: pltr.state });
});

app.post("/api/plotter", (req, res) => {
  res.send({ ok: true, plotter: plotter });
});

app.post("/api/connect", (req, res) => {
  plotter.forEach(pltr => {
    pltr.connect();
  });

  res.send({ ok: true, plotter: plotter });
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
