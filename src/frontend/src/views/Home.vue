<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 lg6>
        <drawn-card/>
      </v-flex>
      <v-flex xs12 lg6>
        <v-card>
          <v-layout column align-center>
            <v-flex xs12>
              <v-layout row>
                <stepper-card flat/>
                <status-card flat/>
              </v-layout>
            </v-flex>
            <v-flex xs3>
              <go-to-card flat/>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import DrawnCard from "@/components/DrawnCard";
import StepperCard from "@/components/StepperCard";
import GoToCard from "@/components/GoToCard";
import StatusCard from "@/components/StatusCard.vue";
export default {
  components: {
    DrawnCard,
    StepperCard,
    GoToCard,
    StatusCard
  }
};
</script>
