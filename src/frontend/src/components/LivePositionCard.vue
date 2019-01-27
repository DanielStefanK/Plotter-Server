<template>
  <v-card height="100%">
    <v-card-title primary-title>
      <div>
        <div class="headline">Live Position</div>
      </div>
    </v-card-title>
    <v-card-text>
      <canvas id="c" class="elevation-5" ref="my-canvas" :width="maxX" :height="maxY"></canvas>
    </v-card-text>
  </v-card>
</template>

<script>
import constants from "../util/constants.js";

export default {
  props: {
    plotter: Object
  },

  computed: {
    maxX() {
      return constants.maxX;
    },
    maxY() {
      return constants.maxY;
    }
  },

  watch: {
    plotter: {
      handler() {
        this.draw();
      }
    },
    deep: true
  },

  mounted() {
    this.draw();
  },

  methods: {
    draw() {
      var c = document.getElementById("c");
      var ctx = c.getContext("2d");
      ctx.clearRect(0, 0, c.width, c.height);
      ctx.beginPath();
      [{ operation: "moveTo", x: 0, y: 0 }, ...this.plotter.printed].forEach(
        op => {
          if (op.operation === "moveTo") {
            ctx.moveTo(op.x, op.y);
          } else if (op.operation === "drawTo") {
            ctx.lineTo(op.x, op.y);
          } else if (op.operation === "circle") {
            ctx.moveTo(op.x + op.radius, op.y);
            ctx.arc(op.x, op.y, op.radius, 0, 2 * Math.PI);
            ctx.moveTo(op.x, op.y);
          }
        }
      );
      ctx.strokeStyle = "#F63E02";
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.beginPath();
      ctx.strokeStyle = "#71f442";
      ctx.arc(this.plotter.x, this.plotter.y, 5, 0, 2 * Math.PI);
      if (this.plotter.pen) {
        ctx.fillStyle = "green";
        ctx.fill();
      }
      ctx.stroke();
    }
  }
};
</script>
