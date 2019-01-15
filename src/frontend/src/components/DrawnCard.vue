<template>
  <v-card height="500px">
    <canvas ref="my-canvas"></canvas>
  </v-card>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      provider: {
        context: null
      },
      height: 0,
      width: 0
    };
  },

  computed: {
    ...mapState(["sendPositions"])
  },

  methods: {
    draw() {
      let previous = { x: 0, y: this.height, pen: false };
      this.provider.context.beginPath();
      this.provider.context.moveTo(previous.x, previous.y);
      this.sendPositions.forEach(item => {
        if (item.pen) {
          this.provider.context.lineTo(item.x, this.height - item.y);
        } else {
          this.provider.context.moveTo(item.x, this.height - item.y);
        }
      });
      this.provider.context.stroke();
    }
  },

  watch: {
    sendPositions() {
      this.provider.context.clearRect(0, 0, this.width, this.height);
      this.draw();
    }
  },

  mounted() {
    this.provider.context = this.$refs["my-canvas"].getContext("2d");
    this.$refs["my-canvas"].width = this.$refs[
      "my-canvas"
    ].parentElement.clientWidth;
    this.$refs["my-canvas"].height = this.$refs[
      "my-canvas"
    ].parentElement.clientHeight;
    this.width = this.$refs["my-canvas"].width;
    this.height = this.$refs["my-canvas"].height;
    this.draw();
  }
};
</script>


