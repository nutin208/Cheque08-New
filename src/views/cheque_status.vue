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
          <h6>Staff will check your cheuqe</h6><br>
          <img alt="hourglass" src="../assets/hourglass.svg" height="100px" width="100px"/><br>
          Pending ... please waiting.
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
    margin: 50px auto 25px auto;
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
