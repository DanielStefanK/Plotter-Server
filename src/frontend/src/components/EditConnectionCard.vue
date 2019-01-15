<template>
  <v-card height="100%">
    <v-card-title v-if="title" primary-title>
      <div>
        <div class="headline">Change connection</div>
      </div>
    </v-card-title>
    <v-card-text>
      <v-layout row wrap>
        <v-flex>
          <v-text-field v-model="internalUrl" label="URL"/>
        </v-flex>
      </v-layout>
    </v-card-text>
    <v-card-actions>
      <v-spacer/>
      <v-btn @click="change" color="primary">Change</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  props: {
    title: Boolean
  },
  data() {
    return {
      internalUrl: ""
    };
  },

  created() {
    this.internalUrl = this.plotterURL;
  },

  watch: {
    plotterURL() {
      this.internalUrl = this.plotterURL;
    }
  },

  computed: {
    ...mapState(["plotterURL"])
  },

  methods: {
    ...mapMutations(["setURL"]),

    change() {
      if (this.validate()) {
        this.setURL(this.internalUrl);
        this.$emit("close");
      }
    },

    validate() {
      return true;
    }
  }
};
</script>
