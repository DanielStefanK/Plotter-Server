<template>
  <v-card>
    <v-card-text>
      <v-layout row wrap>
        <v-flex xs12>
          <v-text-field label="Plotter IP" v-model="plotterIp"/>
        </v-flex>
      </v-layout>
    </v-card-text>
    <v-card-actions>
      <v-spacer/>
      <v-btn @click="save" :loading="connecting">Save</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    connecting: Boolean
  },
  data() {
    return {
      plotterIp: ""
    };
  },
  methods: {
    save() {
      this.$emit("save", this.plotterIp);
    }
  }
};
</script>

