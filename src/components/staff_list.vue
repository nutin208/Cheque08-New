<template>
  <div id="app">
    <v-app>
      <v-carousel style="margin-bottom: 100px;" height="225" hide-delimiters :show-arrows="false">
        <v-carousel-item>
          <v-sheet color="primary" height="100%">
            <div class="title">
              <h1
                style=" padding-top: 100px; font-family: 'Nunito', sans-serif;
               font-size: 4em;
              font-weight: bold;"
              >Cheque Management</h1>
            </div>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
      <v-card class="card_table">
        <v-card-title>
          Wating For Approval
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
            <v-btn rounded color="primary" :to="{ name: 'cheque_verify', params: { id: item.id } }">
              <v-icon dark>mdi-pencil</v-icon>Check
            </v-btn>
          </template>
        </v-data-table>
      </v-card>
    </v-app>
  </div>
</template>
<style >
.title {
  text-align: center;
}
.card_table {
  max-width: 95%;
  margin: 0 2.5%;
  padding-bottom: 5%;
}
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
</style>
<script>
import axios from "axios";
export default {
  data() {
    return {
      info: null,
      search: "",
      headers: [
        {
          text: "Cheque-ID",
          align: "center",
          value: "id",
          width: "170px"
        },
        { text: "User ID", value: "owner_id", align: "center", width: "170px" },
        { text: "Type", align: "center", value: "type_cheque" },
        { text: "Date", align: "center", value: "date_of_cheque" },
        { text: "Amount", align: "end", value: "amount", width: "250px" },
        {
          text: "Submit At",
          align: "center",
          width: "350px",
          value: "submitted_at"
        },
        { text: "Process", width: "220px", align: "center", value: "status" }
      ]
    };
  },
  mounted() {
    axios
      .get("http://localhost:8088/FinalTESTREALLY/cheque_stafflist")
      .then(response => (this.info = response));
  }
};
</script>