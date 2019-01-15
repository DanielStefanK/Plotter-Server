<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-list dense v-if="$vuetify.breakpoint.mdAndDown">
        <v-list-tile>
          <v-spacer/>
          <v-btn icon @click.stop="drawer = !drawer">
            <v-icon>chevron_left</v-icon>
          </v-btn>
        </v-list-tile>
      </v-list>
      <v-list dense>
        <v-list-tile v-for="route in routes" :key="route.path" :to="{name: route.name}" exact>
          <v-list-tile-action>
            <v-icon>{{route.meta.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{route.meta.title}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <template v-if="$vuetify.breakpoint.smAndUp">
        <v-toolbar-title>Plotter UI</v-toolbar-title>
        <v-spacer/>
        URL: {{plotterURL}} &nbsp; &nbsp;
      </template>
      <template v-else>
        <v-spacer/>
      </template>
      <v-tooltip bottom>
        <v-icon slot="activator" :color="icon.color">fa-{{icon.icon}}</v-icon>
        <span>{{icon.tooltip}}</span>
      </v-tooltip>&nbsp;&nbsp;
      <v-tooltip bottom>
        <v-btn slot="activator" icon :loading="loadingCheck" @click="check">
          <v-icon color="accent">fa-wifi</v-icon>
        </v-btn>
        <span>Check connection</span>
      </v-tooltip>
      <v-tooltip bottom>
        <v-menu
          slot="activator"
          v-model="connectionMenu"
          :close-on-content-click="false"
          :nudge-width="200"
          offset-y
        >
          <v-btn icon slot="activator">
            <v-icon color="accent">fa-edit</v-icon>
          </v-btn>
          <edit-connection-card @close="connectionMenu = false"/>
        </v-menu>
        <span>edit connection</span>
      </v-tooltip>
    </v-toolbar>
    <v-content>
      <v-slide-y-transition mode="out-in">
        <router-view></router-view>
      </v-slide-y-transition>
    </v-content>
  </v-app>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";

import EditConnectionCard from "@/components/EditConnectionCard.vue";

export default {
  name: "App",
  components: { EditConnectionCard },
  data() {
    return {
      drawer: null,
      loadingCheck: false,
      connectionMenu: false
    };
  },

  created() {
    this.initialiseStore();
    this.check();
  },

  computed: {
    ...mapState(["health", "plotterURL"]),

    icon() {
      switch (this.health) {
        case "unkown":
          return {
            color: "white",
            icon: "question-circle",
            tooltip: "State Unkown"
          };

        case "connected":
          return {
            color: "success",
            icon: "check-circle",
            tooltip: "Connected"
          };

        case "error":
          return {
            color: "error",
            icon: "exclamation-circle",
            tooltip: "Error"
          };

        default:
          return {
            color: "grey",
            icon: "question-circle",
            tooltip: "State Unkown"
          };
      }
    },
    routes() {
      return this.$router.options.routes;
    }
  },

  methods: {
    ...mapActions(["checkHealth"]),
    ...mapMutations(["initialiseStore"]),

    check() {
      this.loadingCheck = true;
      this.checkHealth()
        .catch(() => {})
        .finally(() => {
          this.loadingCheck = false;
        });
    }
  }
};
</script>
