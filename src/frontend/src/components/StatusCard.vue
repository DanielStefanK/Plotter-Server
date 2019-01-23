<template>
  <v-card height="100%">
    <v-card-title primary-title>
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
export default {
  props: {
    plotter: Object
  },
  computed: {
    state() {
      return Object.keys(this.plotter).map(key => {
        return { key: key, value: this.plotter[key] };
      });
    }
  }
};
</script>
