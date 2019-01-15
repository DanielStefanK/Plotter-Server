<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 sm6>
        <edit-connection-card title/>
      </v-flex>
      <v-flex xs12 sm6>
        <stepper-card title/>
      </v-flex>
      <v-flex xs12 sm6>
        <status-card title/>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
import EditConnectionCard from "@/components/EditConnectionCard.vue";
import StepperCard from "@/components/StepperCard.vue";
import StatusCard from "@/components/StatusCard.vue";

export default {
  components: { EditConnectionCard, StepperCard, StatusCard }
};
</script>

