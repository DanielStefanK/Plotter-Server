<template>
  <v-card height="100%">
    <v-card-title primary-title>
      <div>
        <div class="headline">Move Printing Head</div>
      </div>
    </v-card-title>
    <v-card-text>
      <v-layout wrap row>
        <v-flex xs12>
          <v-text-field type="number" :label="`X (max is ${maxX})`" v-model="x"/>
        </v-flex>
        <v-flex xs12>
          <v-text-field type="number" :label="`Y (max is ${maxY})`" v-model="y"/>
        </v-flex>
      </v-layout>
    </v-card-text>
    <v-card-actions>
      <v-switch v-model="paintState" label="Paint"></v-switch>
      <v-spacer/>
      <v-btn color="primary" @click="move" :loading="plotter.connection == 'printing'">Send</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import constants from "../util/constants.js";

export default {
  props: {
    plotter: Object
  },
  data() {
    return {
      x: 10,
      y: 10,
      paintState: false
    };
  },
  created() {
    this.paintState = this.plotter.pen;
  },

  watch: {
    "plotter.pen"() {
      this.paintState = this.plotter.pen;
    }
  },

  methods: {
    move() {
      this.$emit("goTo", this.getSendObject);
    }
  },

  computed: {
    maxX() {
      return constants.maxX;
    },
    maxY() {
      return constants.maxY;
    },
    getSendObject() {
      const x =
        Math.min(Number.parseInt(this.x), this.maxX) < 0
          ? 0
          : Math.min(Number.parseInt(this.x), this.maxX);
      const y =
        Math.min(Number.parseInt(this.y), this.maxY) < 0
          ? 0
          : Math.min(Number.parseInt(this.y), this.maxY);
      return {
        x,
        y,
        operation: this.paintState ? "drawTo" : "moveTo"
      };
    }
  }
};
</script>