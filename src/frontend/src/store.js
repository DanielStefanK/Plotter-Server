import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    health: "unkown",
    plotterURL: "http://192.168.0.1/",
    status: {
      x: 0,
      y: 0,
      pen: false
    },
    sendPositions: []
  },
  mutations: {
    initialiseStore(state) {
      if (localStorage.getItem("plotterURL")) {
        state.plotterURL = localStorage.getItem("plotterURL");
      }
    },
    setHealth(state, health) {
      state.health = health;
    },
    setURL(state, url) {
      state.plotterURL = url;
      localStorage.setItem("plotterURL", url);
      state.health = "unkown";
    },
    setPlotterState(state, plotterState) {
      state.status = plotterState;
    },
    addPosition(state, position) {
      if (Array.isArray(state.sendPositions)) {
        state.sendPositions.push(position);
      } else {
        state.sendPositions = [position];
      }
    }
  },
  actions: {
    checkHealth(context) {
      return context.dispatch("sendData", {
        url: context.state.plotterURL + "health"
      });
    },

    sendPosition(context, data) {
      return context
        .dispatch("sendData", {
          data,
          url: context.state.plotterURL + "position"
        })
        .then(res => {
          context.commit("addPosition", res.state);
        });
    },

    sendData(context, { data, url, path }) {
      return new Promise((resolve, reject) => {
        fetch(url ? url : context.state.plotterURL + path, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data) // body data type must match "Content-Type" header
        })
          .then(response => {
            if (response.ok) {
              response.json().then(data => {
                resolve(data);
                if (data.state) {
                  context.commit("setPlotterState", data.state);
                }
              });

              context.commit("setHealth", "connected");
            } else {
              reject(data);
              context.commit("setHealth", "error");
            }
          })
          .catch(data => {
            reject(data);
            context.commit("setHealth", "error");
          });
      });
    }
  }
});
