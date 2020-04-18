<template>
<v-app>
  <head></head>
  <v-content>
    <testbar />

    <test />

    <!-- <btab /> -->
  </v-content>
</v-app>
</template>
<style>
.v-data-table {
  font-family: "Nunito", sans-serif;
  border-collapse: collapse;
  border: 5px solid #1976d2;
}
/* .v-text-field input {
  
} */
.v-card__title {
  font-size: 2rem;
}

.v-data-table th {
  font-size: 1.5rem;
  text-transform: uppercase;
  text-align: left;
  background: #1976d2;
  color: #fff;
  padding: 8px;
  min-width: 30px;
}
.v-data-table td {
  font-size: 1.25rem;
  text-align: left;
  padding: 8px;
  border-right: 2px solid #90caf9;
}
.v-data-table td:last-child {
  border-right: none;
}
.v-data-table tbody tr:nth-child(2n) td {
  background: #e3f2fd;
}

.theme--light.v-data-table thead tr th {
  color: #fff;
}
body {
  font-family: "Nunito", sans-serif;
}

header {
  /* border: 5px solid black; */
  font-size: 2.5em;
  font-family: "Nunito", sans-serif;
  text-align: center;
  margin: 75px auto 75px auto;
}
</style>
<script>
import test from "@/components/staff_list";
import testbar from "@/components/Nav";

import axios from "axios";

export default {
  name: "Staff",

  components: {
    test,
    testbar
  },

  data: () => ({
    info: null
    //
  }),
  mounted() {
    axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then(response => (this.info = response));
  }
};
</script>
