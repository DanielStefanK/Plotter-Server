<template>
  <v-card>
    <v-card-text>
      <v-layout row wrap>
        <v-flex xs12 md6>
          <canvas
            id="canvas"
            class="elevation-5"
            ref="my-canvas"
            :width="maxX"
            :height="maxY"
            @mousemove="doDrag"
            @mousedown="doMouseDown"
            @mouseup="doMouseUp"
            @contextmenu.prevent="cancel"
            @mouseout="resetCurrent"
          ></canvas>
        </v-flex>
        <v-flex xs12 md6>
          <v-radio-group v-model="mode">
            <v-radio label="One Liner" value="oLine"></v-radio>
            <v-radio label="Continues Line" value="cLine"></v-radio>
            <v-radio label="Circle" value="circle"></v-radio>
          </v-radio-group>
        </v-flex>
      </v-layout>
    </v-card-text>
    <v-card-actions>
      <v-spacer/>
      <v-btn flat @click="reset">Reset</v-btn>
      <v-btn flat @click="undo">Undo</v-btn>
      <v-btn color="primary" :loading="loading" @click="send">send</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import constants from "../util/constants.js";

export default {
  props: {
    loading: Boolean
  },
  data() {
    return {
      canvas: null,
      context: null,
      mode: "oLine",
      drawnObjects: [],
      currentObject: null
    };
  },

  computed: {
    maxX() {
      return constants.maxX;
    },
    maxY() {
      return constants.maxY;
    }
  },

  methods: {
    doMouseDown(event) {
      switch (this.mode) {
        case "oLine":
          this.oLineMouseDown(event);
          break;
        case "cLine":
          this.cLineMouseDown(event);
          break;
        case "circle":
          this.circleMouseDown(event);
          break;
      }
    },
    doDrag(event) {
      switch (this.mode) {
        case "oLine":
          this.oLineDrag(event);
          break;
        case "cLine":
          this.cLineDrag(event);
          break;
        case "circle":
          this.circleDrag(event);
          break;
      }
    },
    doMouseUp(event) {
      switch (this.mode) {
        case "oLine":
          this.oLineUp(event);
          break;
        case "cLine":
          break;
        case "circle":
          break;
      }
    },
    oLineUp() {
      this.drawnObjects.push({
        type: "oLine",
        startPos: {
          x: this.currentObject.previousPos.x,
          y: this.currentObject.previousPos.y
        },
        endPos: {
          x: this.currentObject.currentPos.x,
          y: this.currentObject.currentPos.y
        }
      });
      this.currentObject = null;
    },
    oLineMouseDown(event) {
      this.currentObject = {
        type: "oLine",
        previousPos: this.getMousePos(this.canvas, event),
        currentPos: this.getMousePos(this.canvas, event)
      };
    },
    cLineMouseDown(event) {
      if (!this.currentObject && event.which === 1) {
        this.currentObject = {
          type: "cLine",
          currentPos: this.getMousePos(this.canvas, event),
          startPos: this.getMousePos(this.canvas, event),
          points: [this.getMousePos(this.canvas, event)]
        };
      } else if (
        this.currentObject &&
        this.currentObject.type === "cLine" &&
        event.which === 1
      ) {
        this.currentObject.currentPos = this.getMousePos(this.canvas, event);
        this.currentObject.points.push(this.getMousePos(this.canvas, event));
      }
    },
    circleMouseDown(event) {
      if (!this.currentObject && event.which === 1) {
        this.currentObject = {
          type: "circle",
          currentPos: this.getMousePos(this.canvas, event),
          startPos: this.getMousePos(this.canvas, event)
        };
      } else if (
        this.currentObject &&
        this.currentObject.type === "circle" &&
        event.which === 1
      ) {
        this.drawnObjects.push({
          type: "circle",
          startPos: this.currentObject.startPos,
          radius: Math.sqrt(
            Math.pow(
              this.currentObject.startPos.x - this.currentObject.currentPos.x,
              2
            ) +
              Math.pow(
                this.currentObject.startPos.y - this.currentObject.currentPos.y,
                2
              )
          )
        });
        this.currentObject = null;
      }
    },
    cancel(event) {
      if (this.currentObject && this.currentObject.type == "cLine") {
        this.currentObject.points.push(this.getMousePos(this.canvas, event));
        this.drawnObjects.push({
          type: "cLine",
          startPos: this.currentObject.startPos,
          points: this.currentObject.points
        });
        this.currentObject = null;
      }
    },
    oLineDrag(event) {
      if (this.currentObject && this.currentObject.type === "oLine") {
        this.currentObject.currentPos = this.getMousePos(this.canvas, event);
        this.draw();
      }
    },
    cLineDrag(event) {
      if (this.currentObject && this.currentObject.type === "cLine") {
        this.currentObject.currentPos = this.getMousePos(this.canvas, event);
        this.draw();
      }
    },
    circleDrag(event) {
      if (this.currentObject && this.currentObject.type === "circle") {
        this.currentObject.currentPos = this.getMousePos(this.canvas, event);
        this.draw();
      }
    },
    reset() {
      this.drawnObjects = [];
      this.currentObject = null;
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },

    resetCurrent() {
      this.currentObject = null;
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.drawDrawnObjects();
    },

    undo() {
      this.drawnObjects.pop();
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.drawDrawnObjects();
    },
    send() {
      let sendObject = [];
      this.drawnObjects.forEach(el => {
        switch (el.type) {
          case "circle":
            sendObject.push({
              operation: "circle",
              x: Math.round(el.startPos.x),
              y: Math.round(el.startPos.y),
              radius: Math.round(el.radius)
            });

            break;
          case "cLine":
            sendObject.push({
              operation: "moveTo",
              x: Math.round(el.startPos.x),
              y: Math.round(el.startPos.y)
            }),
              el.points.forEach(pt => {
                sendObject.push({
                  operation: "drawTo",
                  x: Math.round(pt.x),
                  y: Math.round(pt.y)
                });
              });
            break;
          case "oLine":
            sendObject.push({
              operation: "moveTo",
              x: Math.round(el.startPos.x),
              y: Math.round(el.startPos.y)
            });
            sendObject.push({
              operation: "drawTo",
              x: Math.round(el.endPos.x),
              y: Math.round(el.endPos.y)
            });
        }
      });

      sendObject.push({
        operation: "moveTo",
        x: 0,
        y: 0
      });
      this.$emit("send", sendObject);
    },
    drawDrawnObjects() {
      this.drawnObjects.forEach(element => {
        switch (element.type) {
          case "oLine":
            this.oLineDraw(element);
            break;
          case "cLine":
            this.cLineDraw(element);
            break;
          case "circle":
            this.circleDraw(element);
            break;
        }
      });
    },
    draw() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.drawDrawnObjects();
      switch (this.currentObject.type) {
        case "oLine":
          this.oLineDrawCurrent();
          break;
        case "cLine":
          this.cLineDrawCurrent();
          break;
        case "circle":
          this.circleDrawCurrent();
          break;
      }
    },
    oLineDraw(element) {
      this.ctx.beginPath();
      this.ctx.moveTo(element.startPos.x, element.startPos.y);
      this.ctx.lineTo(element.endPos.x, element.endPos.y);
      this.ctx.strokeStyle = "#F63E02";
      this.ctx.lineWidth = 2;
      this.ctx.stroke();
    },
    cLineDraw(element) {
      this.ctx.beginPath();
      this.ctx.moveTo(element.points[0].x, element.points[0].y);
      element.points.forEach(el => {
        this.ctx.lineTo(el.x, el.y);
      });

      this.ctx.strokeStyle = "#F63E02";
      this.ctx.lineWidth = 2;
      this.ctx.stroke();
    },

    circleDraw(element) {
      this.ctx.beginPath();
      this.ctx.moveTo(element.startPos.x + element.radius, element.startPos.y);

      this.ctx.arc(
        element.startPos.x,
        element.startPos.y,
        element.radius,
        0,
        2 * Math.PI
      );

      this.ctx.strokeStyle = "#F63E02";
      this.ctx.lineWidth = 2;
      this.ctx.stroke();
    },

    oLineDrawCurrent() {
      this.ctx.beginPath();
      this.ctx.moveTo(
        this.currentObject.previousPos.x,
        this.currentObject.previousPos.y
      );
      this.ctx.lineTo(
        this.currentObject.currentPos.x,
        this.currentObject.currentPos.y
      );
      this.ctx.strokeStyle = "#F63E02";
      this.ctx.lineWidth = 2;
      this.ctx.stroke();
    },

    cLineDrawCurrent() {
      this.ctx.beginPath();
      this.ctx.moveTo(
        this.currentObject.points[0].x,
        this.currentObject.points[0].y
      );
      this.currentObject.points.forEach(el => {
        this.ctx.lineTo(el.x, el.y);
      });
      this.ctx.lineTo(
        this.currentObject.currentPos.x,
        this.currentObject.currentPos.y
      );
      this.ctx.strokeStyle = "#F63E02";
      this.ctx.lineWidth = 2;
      this.ctx.stroke();
    },

    circleDrawCurrent() {
      this.ctx.beginPath();
      this.ctx.moveTo(
        this.currentObject.startPos.x +
          Math.sqrt(
            Math.pow(
              this.currentObject.startPos.x - this.currentObject.currentPos.x,
              2
            ) +
              Math.pow(
                this.currentObject.startPos.y - this.currentObject.currentPos.y,
                2
              )
          ),
        this.currentObject.startPos.y
      );

      this.ctx.arc(
        this.currentObject.startPos.x,
        this.currentObject.startPos.y,
        Math.sqrt(
          Math.pow(
            this.currentObject.startPos.x - this.currentObject.currentPos.x,
            2
          ) +
            Math.pow(
              this.currentObject.startPos.y - this.currentObject.currentPos.y,
              2
            )
        ),
        0,
        2 * Math.PI
      );

      this.ctx.strokeStyle = "#F63E02";
      this.ctx.lineWidth = 2;
      this.ctx.stroke();
    },

    getMousePos(canvas, evt) {
      var rect = canvas.getBoundingClientRect();
      return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
      };
    }
  },

  ready() {
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    ctx.translate(0, c.height);
    ctx.scale(1, -1);
    ctx.imageSmoothingEnabled = false;
  },

  mounted() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
  }
};
</script>


