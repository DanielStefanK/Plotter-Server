<template>
  <v-card>
    <v-card-text>
      <canvas
        id="canvas"
        class="elevation-5"
        ref="my-canvas"
        :width="maxX"
        :height="maxY"
        @mousemove="doDrag"
        @mousedown="doMouseDown"
        @mouseup="doMouseUp"
      ></canvas>
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
      provider: {
        context: null
      },
      height: 0,
      width: 0,
      lines: [],
      line: null,
      mouse: {
        current: {
          x: 0,
          y: 0
        },
        previous: {
          x: 0,
          y: 0
        },
        down: false
      },
      canvas: null
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
    undo() {
      this.lines.splice(this.lines.length - 1, 1);
      var c = document.getElementById("canvas");
      var ctx = c.getContext("2d");
      ctx.clearRect(0, 0, c.width, c.height);
      this.drawLines(ctx);
    },
    draw() {
      // requestAnimationFrame(this.draw);
      if (this.mouse.down) {
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        ctx.clearRect(0, 0, c.width, c.height);
        this.drawLines(ctx);
        ctx.beginPath();
        ctx.moveTo(this.mouse.previous.x, this.mouse.previous.y);
        ctx.lineTo(this.mouse.current.x, this.mouse.current.y);
        ctx.strokeStyle = "#F63E02";
        ctx.lineWidth = 2;
        ctx.stroke();
      }
    },

    send() {
      let sendObject = [];
      this.lines.forEach(l => {
        sendObject.push({
          operation: "moveTo",
          x: l.from.x,
          y: l.from.y
        });
        sendObject.push({
          operation: "drawTo",
          x: l.to.x,
          y: l.to.y
        });
      });
      this.$emit("send", sendObject);
    },

    doDrag(event) {
      var c = document.getElementById("canvas");
      this.mouse.current = this.getMousePos(c, event);

      this.draw(event);
    },

    doMouseDown(event) {
      var c = document.getElementById("canvas");
      this.mouse.down = true;
      this.mouse.previous = this.getMousePos(c, event);
    },
    doMouseUp() {
      this.mouse.down = false;
      this.lines.push({
        from: {
          x: this.mouse.previous.x,
          y: this.mouse.previous.y
        },
        to: {
          x: this.mouse.current.x,
          y: this.mouse.current.y
        }
      });
    },

    drawLines(ctx) {
      this.lines.forEach(l => {
        ctx.beginPath();
        ctx.moveTo(l.from.x, l.from.y);
        ctx.lineTo(l.to.x, l.to.y);
        ctx.strokeStyle = "#F63E02";
        ctx.lineWidth = 2;
        ctx.stroke();
      });
    },

    reset() {
      this.lines = [];
      var c = document.getElementById("canvas");
      var ctx = c.getContext("2d");
      ctx.clearRect(0, 0, c.width, c.height);
    },

    getMousePos(canvas, evt) {
      var rect = canvas.getBoundingClientRect();
      return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
      };
    }
  },

  ready: function() {
    var c = document.getElementById("canvas");
    var ctx = c.getContext("2d");
    ctx.translate(0, c.height);
    ctx.scale(1, -1);
    ctx.imageSmoothingEnabled = false;
    // this.draw();
  },

  mounted() {}
};
</script>


