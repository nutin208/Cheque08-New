<template>
  <v-app>
    <v-content>
      <navbar />
      <header>
        <h1>Status</h1>
        
        <div v-if= "Approve">
          <img alt="stamp" src="../assets/stamp.svg" /><br>
          Your cheque is approved.
        </div>
        <div v-else-if= "Disqualify">
          <img alt="warning" src="../assets/warning.svg" /><br>
          Your cheque is disqualified.
        </div>
        <div v-else>
          <img alt="hourglass" src="../assets/hourglass.svg" /><br>
          Pending... please wait. 
        </div>
      </header>
    </v-content>
  </v-app>
</template>
<style>
  header {
    font-size: 2.5em;
    font-family: "Nunito", sans-serif;
    text-align: center;
  }
  img {
    height: 150px;
    width: 150px;
    left: 380px;
    bottom: 300px;
  }
</style>
<script>
import navbar from "@/components/Nav";

export default {
  name: "cheque_status",

  components: {
    navbar,
  },

  data: () => ({
    //
  }),
};
</script>
