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
        @touchmove.native="doDrag"
        @touchstart.native="doMouseDown"
        @mousedown="doMouseDown"
        @mouseup="doMouseUp"
        @touchend.native="doMouseUp"
      ></canvas>
      <v-radio-group v-model="mode">
        <v-radio label="One Liner" value="oLine"></v-radio>
        <v-radio label="Continues Line" value="cLine"></v-radio>
        <v-radio label="Circle" value="circle"></v-radio>
      </v-radio-group>
    </v-card-text>
    <v-card-actions>
      <v-spacer/>
      <v-switch v-model="oneline"/>
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
      oneline: false,
      provider: {
        context: null
      },
      mode: "oLine",
      height: 0,
      width: 0,
      dawingObjects: [],
      currenctObject: {
        type: null
      },
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
    drawAllObjects() {},

    drawOLine() {
      var c = document.getElementById("canvas");
      var ctx = c.getContext("2d");
      ctx.clearRect(0, 0, c.width, c.height);
      this.drawAllObjects();
      if (this.currenctObject.mouse.previous) {
        ctx.beginPath();
        ctx.moveTo(
          this.currenctObject.mouse.previous.x,
          this.currenctObject.mouse.previous.y
        );
        ctx.lineTo(
          this.currenctObject.mouse.current.x,
          this.currenctObject.mouse.current.y
        );
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
      switch (this.mode) {
        case "oLine":
          this.doDragOLine(event);
          break;
        case "cLine":
          this.doDragCLine(event);
          break;
        case "circle":
          this.doDragCircle(event);
      }
    },

    doDragOLine(event) {
      var c = document.getElementById("canvas");
      this.currentObject.mouse.current = this.getMousePos(c, event);

      this.drawOLine(event);
    },

    doMouseDown(event) {
      switch (this.mode) {
        case "oLine":
          this.doMouseDownOLine(event);
          break;
        case "cLine":
          this.doMouseDownCLine(event);
          break;
        case "circle":
          this.doMouseDownCircle(event);
      }
    },

    doMouseDownOLine(event) {
      var c = document.getElementById("canvas");
      this.currentObject.type = "oLine";
      this.currentObject.mouse.previous = this.getMousePos(c, event);
    },

    doMouseUp(event) {
      switch (this.mode) {
        case "oLine":
          this.doMouseUpOLine(event);
          break;
        case "cLine":
          this.doMouseUpCLine(event);
          break;
        case "circle":
          this.doMouseUpCircle(event);
      }
    },

    doMouseUpOLine() {
      this.mouse.down = false;
      this.lines.push({
        type: "oLine",
        from: {
          x: this.currentObject.mouse.previous.x,
          y: this.currentObject.mouse.previous.y
        },
        to: {
          x: this.currentObject.mouse.current.x,
          y: this.currentObject.mouse.current.y
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


