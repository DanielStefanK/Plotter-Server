<template>
  <v-card :flat="flat" height="100%">
    <v-card-title v-if="title" primary-title>
      <div>
        <div class="headline">Status of the Plotter</div>
      </div>
    </v-card-title>
    <v-card-text>
      <v-list>
        <v-list-tile v-for="item in state" :key="item.key">
          <v-list-tile-content>{{item.key}}:</v-list-tile-content>
          <v-list-tile-content class="align-end">{{ item.value }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: {
    title: Boolean,
    flat: Boolean
  },
  computed: {
    ...mapState(["status"]),

    state() {
      return Object.keys(this.status).map(key => {
        return { key: key, value: this.status[key] };
      });
    }
  }
};
</script>
