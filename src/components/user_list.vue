<template>
  <div id="app">
    <v-app>
      <v-carousel style="margin-bottom: 100px;" height="515" hide-delimiters :show-arrows="false">
        <v-carousel-item>
          <v-sheet color="primary" height="100%">
            <div class="title">
              <h1
                style=" padding-top: 160px; font-family: 'Nunito', sans-serif;
               font-size: 6em;
              font-weight: bold;"
              >Cash a Cheque</h1>
              <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                  <v-btn
                    style=" margin-top: 100px;"
                    x-large
                    width="100px"
                    height="100px"
                    fab
                    dark
                    color="white"
                    v-on="on"
                  >
                    <v-icon x-large color="primary" dark>mdi-plus</v-icon>
                  </v-btn>
                </template>
                <span>Add Cheque Now</span>
              </v-tooltip>
            </div>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>

      <v-btn
        v-if="this.info.data.length!=0"
        color="green"
        style="margin:0 auto;font-family: 'Nunito', sans-serif;font-size:1.5em;"
        width="1000px"
        height="75px"
        dark
        @click="dialog = true"
      >Click here to check your cheques status</v-btn>
      <v-dialog v-model="dialog" max-width="90%">
        <v-card>
          <v-card class="card_table">
            <v-card-title>
              Your Current Cheque Status
              <v-spacer></v-spacer>
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
              ></v-text-field>
            </v-card-title>
            <v-data-table :headers="headers" :items="info.data" :search="search">
              <template v-slot:item.status="{ item }">
                <v-chip
                  style="font-size:0.75em"
                  :color="getColor(item.status)"
                  dark
                >{{ item.status}}</v-chip>
              </template>
            </v-data-table>
            <div style="margin-left:47%;margin-top:1.4%;">
              <v-btn rounded color="error" x-large @click="dialog = false">Close</v-btn>
            </div>
          </v-card>
        </v-card>
      </v-dialog>
    </v-app>
  </div>
</template>
<style>
.title {
  text-align: center;
}
.card_table {
  max-width: 95%;
  margin: 0 2.5%;
}
</style>
<script>
import axios from "axios";
export default {
  data() {
    return {
      dialog: false,
      dialog2: false,
      info: null,
      search: "",
      headers: [
        {
          text: "Cheque-ID",
          align: "center",
          value: "id",
          width: "170px"
        },
        {
          text: "Account",
          value: "payee_account_id",
          align: "center",
          width: "120x"
        },
        { text: "Type", align: "center", value: "type_cheque" },
        { text: "Date", align: "center", value: "date_of_cheque" },
        {
          text: " Amount",
          align: "end",
          value: "amount",
          width: "250px"
        },
        {
          text: "Submit At",
          align: "center",
          width: "350px",
          value: "submitted_at"
        },
        { text: "Status", width: "220px", align: "center", value: "status" }
      ]
    };
  },
  mounted() {
    axios
      .get("http://localhost:8088/FinalTESTREALLY/cheque_list")
      .then(response => (this.info = response));
  },
  methods: {
    getColor(x) {
      if (x === "Failed") return "red";
      else if (x === "Accepted") return "green";
      else return "primary";
    }
  }
};
</script>