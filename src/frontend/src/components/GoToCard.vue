<template>
  <v-card :flat="flat" height="100%">
    <v-card-title v-if="title" primary-title>
      <div>
        <div class="headline">Move Printing Head</div>
      </div>
    </v-card-title>
    <v-card-text>
      <v-layout wrap row>
        <v-flex xs12>
          <v-text-field type="number" label="X" v-model="x"/>
        </v-flex>
        <v-flex xs12>
          <v-text-field type="number" label="Y" v-model="y"/>
        </v-flex>
      </v-layout>
    </v-card-text>
    <v-card-actions>
      <v-spacer/>
      <v-btn color="primary" @click="move">Send</v-btn>
    </v-card-actions>
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
      x: 10,
      y: 10,
      isLoading: false
    };
  },
  created() {
    this.paintState = this.status.pen;
  },

  watch: {
    "state.pen"() {
      this.paintState = this.status.pen;
    }
  },

  computed: {
    ...mapState(["status"])
  },

  methods: {
    ...mapActions(["sendPosition", "sendData"]),

    move() {
      this.isLoading = true;
      this.sendPosition({ x: this.x, y: this.y, pen: this.status.pen })
        .catch(() => {})
        .finally(() => {
          this.isLoading = false;
        });
    },
    getSendObject() {
      return {
        x: Number.parseInt(this.x),
        y: Number.parseInt(this.y),
        pen: this.status.pen
      };
    }
  }
};
</script>