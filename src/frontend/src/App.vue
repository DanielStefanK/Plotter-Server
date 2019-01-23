<template>
  <v-app>
    <v-toolbar color="indigo" dark fixed app>
      <v-spacer/>
      <v-tooltip bottom>
        <v-icon slot="activator" :color="icon.color">fa-{{icon.icon}}</v-icon>
        <span>{{icon.tooltip}}</span>
      </v-tooltip>
    </v-toolbar>
    <v-content>
      <v-container grid-list-md>
        <v-layout row wrap v-if="connection === 'connected'">
          <v-flex
            xs12
            sm6
            lg4
            v-if="plotter ? plotter.connection === 'disconnected' || plotter.connection === 'error' || plotter.connection === 'connecting': true"
          >
            <connect-card
              @save="tryConnect"
              :connecting="plotter ? plotter.connection == 'connecting' : false"
            />
          </v-flex>
          <template v-else>
            <v-flex xs12 md6 lg4>
              <status-card :plotter="plotter" @setHome="setHome"/>
            </v-flex>
            <v-flex xs12 md6 lg4>
              <go-to-card :plotter="plotter" @goTo="goTo"/>
            </v-flex>
            <v-flex xs12 md12 lg4>
              <live-position-card :plotter="plotter"/>
            </v-flex>
            <v-flex xs12 md6>
              <drawing-card @send="sendArray" :loading="plotter.connection === 'printing'"/>
            </v-flex>
          </template>
          <v-flex xs12></v-flex>
        </v-layout>
        <v-layout v-else-if="connection === 'loading'">
          <v-progress-linear indeterminate/>
        </v-layout>
        <v-layout v-else>
          <v-alert :value="true" type="error">Could not reach backend server</v-alert>
        </v-layout>
      </v-container>
    </v-content>
    <v-snackbar v-model="error" :timeout="5000">{{ errorMsg }}</v-snackbar>
  </v-app>
</template>

<script>
import io from "socket.io-client";

import ConnectCard from "./components/ConnectCard";
import StatusCard from "./components/StatusCard";
import GoToCard from "./components/GoToCard";
import DrawingCard from "./components/DrawnCard";
import LivePositionCard from "./components/LivePositionCard";

export default {
  name: "App",

  components: {
    ConnectCard,
    StatusCard,
    GoToCard,
    DrawingCard,
    LivePositionCard
  },
  data() {
    return {
      plotter: null,
      socket: null,
      errorMsg: "",
      error: false,
      connection: "loading"
    };
  },

  created() {
    this.socket = io(process.env.VUE_APP_BACKEND);

    this.socket.on("plotterStatus", status => {
      this.plotter = status;
    });

    this.socket.on("errorNetwork", msg => {
      this.errorMsg = msg;
      this.error = true;
    });

    this.socket.on("connect", () => {
      this.connection = "connected";
    });

    this.socket.on("disconnect", () => {
      this.connection = "error";
    });
  },

  computed: {
    icon() {
      switch (this.connection) {
        case "loading":
          return {
            color: "white",
            icon: "question-circle",
            tooltip: "Backend Connection"
          };
        case "connected":
          return {
            color: "success",
            icon: "check-circle",
            tooltip: "Backend Connection"
          };
        case "error":
          return {
            color: "error",
            icon: "exclamation-circle",
            tooltip: "Backend Connection"
          };
        default:
          return {
            color: "grey",
            icon: "question-circle",
            tooltip: "Backend Connection"
          };
      }
    }
  },

  methods: {
    tryConnect(ip) {
      this.plotter = {
        connection: "connecting"
      };

      this.socket.emit("connectPlotter", ip);
    },

    goTo(sendObject) {
      this.socket.emit("sendPrint", [sendObject]);
    },

    sendArray(arr) {
      this.socket.emit("sendPrint", arr);
    },

    setHome() {
      this.socket.emit("setHome");
    }
  }
};
</script>
