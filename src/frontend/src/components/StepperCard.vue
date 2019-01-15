<template>
  <v-card :flat="flat" height="100%">
    <v-card-title v-if="title" primary-title>
      <div>
        <div class="headline">Move Printing Head</div>
      </div>
    </v-card-title>
    <v-card-text>
      <v-layout column align-center>
        <v-layout row>
          <v-flex>
            <v-btn icon color="primary" @click="move('up')">
              <v-icon>fa-arrow-up</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
        <v-layout row justify-space-between>
          <v-flex>
            <v-btn icon color="primary" @click="move('left')">
              <v-icon>fa-arrow-left</v-icon>
            </v-btn>
          </v-flex>
          <v-flex>
            <v-btn
              :flat="!paintState"
              :loading="isLoading"
              icon
              :color="paintState ? 'primary' :'grey darken-2'"
              @click="togglePaint"
            >
              <v-icon>fa-paint-brush</v-icon>
            </v-btn>
          </v-flex>
          <v-flex>
            <v-btn icon color="primary" @click="move('right')">
              <v-icon>fa-arrow-right</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex>
            <v-btn icon color="primary" @click="setHome">
              <v-icon>fa-bullseye</v-icon>
            </v-btn>
          </v-flex>
          <v-flex>
            <v-btn icon color="primary" @click="move('down')">
              <v-icon>fa-arrow-down</v-icon>
            </v-btn>
          </v-flex>
          <v-flex>
            <v-btn icon color="primary" @click="move('home')">
              <v-icon>fa-home</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex>
            <v-text-field type="number" label="Step Size" v-model="stepSize"/>
          </v-flex>
        </v-layout>
      </v-layout>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  props: {
    title: Boolean,
    flat: Boolean
  },
  data() {
    return {
      stepSize: 10,
      paintState: false,
      isLoading: false
    };
  },
  created() {
    this.paintState = this.status.pen;
  },

  watch: {
    "status.pen"() {
      this.paintState = this.status.pen;
    }
  },

  computed: {
    ...mapState(["status"])
  },

  methods: {
    ...mapActions(["sendPosition", "sendData"]),

    move(direction) {
      this.isLoading = true;
      if (!this.stepSize || this.stepSize === "" || isNaN(this.stepSize))
        return;

      const steps = Number.parseInt(this.stepSize);
      let moveObject;
      switch (direction) {
        case "up":
          moveObject = this.addMoveToState({ y: steps, x: 0 });
          break;
        case "down":
          moveObject = this.addMoveToState({ y: -steps, x: 0 });
          break;
        case "left":
          moveObject = this.addMoveToState({ y: 0, x: -steps });
          break;
        case "right":
          moveObject = this.addMoveToState({ y: 0, x: steps });
          break;
        case "home":
          moveObject = { x: 0, y: 0 };
          break;
      }

      this.sendPosition(moveObject)
        .catch(() => {})
        .finally(() => {
          this.isLoading = false;
        });
    },
    togglePaint() {
      this.isLoading = true;
      this.sendData({ data: { pen: !this.paintState }, path: "pen" })
        .then(() => {
          this.paintState = !this.paintState;
        })
        .catch()
        .finally(() => {
          this.isLoading = false;
        });
    },

    addMoveToState(moveObject) {
      return {
        x: moveObject.x + this.status.x,
        y: moveObject.y + this.status.y
      };
    },

    setHome() {
      this.sendData({ data: {}, path: "sethome" })
        .catch()
        .finally(() => {
          this.isLoading = false;
        });
    }
  }
};
</script>
