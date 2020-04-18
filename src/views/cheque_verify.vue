<template>
  <v-app>
    <v-content>
      <navbar />
      <v-carousel style="margin-bottom: 100px;" height="225" hide-delimiters :show-arrows="false">
        <v-carousel-item>
          <v-sheet color="primary" height="100%">
            <div class="title">
              <h1
                style=" padding-top: 100px; font-family: 'Nunito', sans-serif;
               font-size: 4em;
              font-weight: bold;"
              >Now Approving : Cheque ID {{this.id}}</h1>
            </div>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>

      <v-alert
        v-if="warn"
        max-width="860"
        max-height="100"
        style=" 
              margin:2.5% auto;
              font-size: 1.25em;
              font-weight: bold;"
        type="error"
      >Plese review and make sure to complete all of the approval section before proceeding :)</v-alert>
      <v-row>
        <v-col cols="6">
          <v-card class="pa-2 ml-10" hover tile>
            <img class="mainimg" alt="Vue logo" :src="cheque_img" />
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card class="pa-2 ml-7 card_for_table" hover tile>
            <table>
              <tr>
                <th>Section</th>
                <th>User Input</th>
                <th>Approval</th>
              </tr>
              <tr>
                <td>Cheque Type</td>
                <td>{{info.data.type_cheque}}</td>
                <td>
                  <v-radio-group class="radio_check radio_text" v-model="check[0]">
                    <v-radio color="success" label="Approve" value="True"></v-radio>
                    <v-radio color="error" label="Not Approve" value="False"></v-radio>
                  </v-radio-group>
                </td>
              </tr>
              <tr>
                <td>Cheque Date</td>
                <td>{{info.data.date_of_cheque}}</td>
                <td>
                  <v-radio-group class="radio_check radio_text" v-model="check[1]">
                    <v-radio color="success" label="Approve" value="True"></v-radio>
                    <v-radio color="error" label="Not Approve" value="False"></v-radio>
                  </v-radio-group>
                </td>
              </tr>
              <tr>
                <td>Amount</td>
                <td>{{info.data.amount}} THB</td>
                <td>
                  <v-radio-group class="radio_check radio_text" v-model="check[2]">
                    <v-radio color="success" label="Approve" value="True"></v-radio>
                    <v-radio color="error" label="Not Approve" value="False"></v-radio>
                  </v-radio-group>
                </td>
              </tr>
              <tr>
                <td>Payer Name</td>
                <td>{{info.data.payer_name}}</td>
                <td>
                  <v-radio-group class="radio_check radio_text" v-model="check[3]">
                    <v-radio color="success" label="Approve" value="True"></v-radio>
                    <v-radio color="error" label="Not Approve" value="False"></v-radio>
                  </v-radio-group>
                </td>
              </tr>
              <tr v-if="info.data.payee_name.length!=0">
                <td>Payee Name</td>
                <td>{{info.data.payee_name}}</td>
                <td>
                  <v-radio-group class="radio_check radio_text" v-model="check[4]">
                    <v-radio color="success" label="Approve" value="True"></v-radio>
                    <v-radio color="error" label="Not Approve" value="False"></v-radio>
                  </v-radio-group>
                </td>
              </tr>
            </table>
          </v-card>
        </v-col>
      </v-row>
      <v-carousel
        style=" margin-top:100px ;margin-bottom: 100px;"
        height="150"
        hide-delimiters
        :show-arrows="false"
      >
        <v-carousel-item>
          <v-sheet color="primary" height="100%">
            <div class="title">
              <h1
                style=" padding-top: 60px; font-family: 'Nunito', sans-serif;
               font-size: 3em;
              font-weight: bold;"
              >Verifying Siganature</h1>
            </div>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
      <v-row>
        <v-col cols="6">
          <div
            style=" font-size: 3em;
              margin-left:43%;font-weight: bold;;margin-bottom:5%;"
          >Cheque Signature</div>
          <v-card class="card_for_sig crop" hover shaped>
            <img alt="Vue logo" :src="cheque_img" />
          </v-card>
        </v-col>
        <v-col cols="6">
          <div
            style=" font-size: 3em;
              margin-left:15%;font-weight: bold;margin-bottom:5%;"
          >Database Signature</div>
          <v-card class="ml-10 card_for_sig" hover shaped>
            <img alt="Vue logo" class="datasigimg" :src="data_img" />
          </v-card>
        </v-col>
      </v-row>
      <div class="my-12">
        <v-card class="mx-auto" color="white" width="400px" hover>
          <v-card-text>
            <v-radio-group class="ml-10 radio_check radio_text" v-model="check[5]" row>
              <v-radio color="success" label="Approve" value="True"></v-radio>
              <v-radio color="error" label="Not Approve" value="False"></v-radio>
            </v-radio-group>
          </v-card-text>
        </v-card>
      </div>
      <v-carousel
        style=" margin-top:100px ;margin-bottom: 100px;"
        height="150"
        hide-delimiters
        :show-arrows="false"
      >
        <v-carousel-item>
          <v-sheet color="green" height="100%">
            <div class="title" style="padding-top:29px">
              <v-btn
                style=" 
              font-family: 'Nunito', sans-serif;
              font-size: 2em;
              font-weight: bold;"
                class="ma-2"
                height="75"
                rounded
                color="white"
                @click.stop="dialog = true"
              >
                <span style="color:#4caf50">Proceed</span>
              </v-btn>
            </div>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
      <v-dialog v-model="dialog" max-width="350">
        <v-card>
          <v-card-title class="headline">Procceed the Cheque?</v-card-title>

          <v-card-text
            style="font-size:1em"
          >Make sure that all of the sections are being checked correctly , wrong approval will lead you to pay the penalty cost, and in the worst case, you will get fired.</v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn color="red darken-1" text @click="dialog = false">Cancle</v-btn>

            <v-btn color="green darken-1" text @click="sendStatus">Confirm</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog v-model="dialog2" persistent max-width="300">
        <v-card>
          <v-card-title class="headline">Finished!</v-card-title>

          <v-card-text
            style="font-size:1em"
          >Your approval have been sent to the server, thanks for the work!</v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn color="primary darken-1" text to="/cheque_staffmenu">Back to Menu</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-content>
  </v-app>
</template>
<style scoped>
.datasigimg {
  width: 100%;
  height: 100%;
}
.crop {
  width: 200px;
  height: 150px;
  overflow: hidden;
}

.crop img {
  width: 1600px;
  height: 800px;
  margin: -400px 0 0 -950px;
}
.card_for_sig {
  width: 65%;
  height: 400px;
  margin-left: 30%;
  border: 2px solid #232323;
}

.card_for_table {
  width: 96%;
}
.radio_check {
  margin-left: 50px;
}
.radio_text >>> label {
  color: #232323;
  font-size: 1.5em;
}
h1 {
  font-size: 3em;
  margin-bottom: 5%;
}
table {
  font-family: "Nunito", sans-serif;
  font-size: 1.5em;
  width: 100%;
  border-collapse: collapse;
  border: 3px solid #1976d2;
}

table th {
  text-transform: uppercase;
  text-align: center;
  background: #1976d2;
  color: #fff;
  padding: 8px;
  min-width: 20px;
}

table td {
  text-align: center;
  padding: 8px;
  border-right: 2px solid #90caf9;
}
table td:last-child {
  border-right: none;
}
table tbody tr:nth-child(2n) td {
  background: #e3f2fd;
}

.mainimg {
  width: 888px;
  height: 505px;
}
body {
  font-family: "Nunito", sans-serif;
}
</style>
<script>
import navbar from "@/components/Nav";
import axios from "axios";
export default {
  name: "cheque_verify",

  components: {
    navbar
  },

  data() {
    return {
      id: 0,
      check: [0, 0, 0, 0, 0, 0],
      info: null,
      cheque_img: null,
      data_img: null,
      dialog: false,
      dialog2: false,
      warn: false
    };
  },
  created() {
    this.id = this.$route.params.id;
  },
  mounted() {
    axios
      .get("http://localhost:8088/FinalTESTREALLY/cheque_data", {
        params: {
          cheque_id: this.id
        }
      })
      .then(response => {
        this.info = response;
        this.getCheque_sig();
        this.getData_sig();
      });
  },
  methods: {
    getCheque_sig() {
      let config = {
        // example url
        url: "http://localhost:8088/FinalTESTREALLY/cheque_img",
        method: "GET",
        responseType: "arraybuffer",
        params: {
          cheque_img: this.info.data.cheque_image
        }
      };
      axios(config).then(response => {
        var bytes = new Uint8Array(response.data);
        var binary = bytes.reduce(
          (data, b) => (data += String.fromCharCode(b)),
          ""
        );
        this.cheque_img = "data:image/jpeg;base64," + btoa(binary);
      });
    },
    getData_sig() {
      let config = {
        // example url
        url: "http://localhost:8088/FinalTESTREALLY/cheque_img",
        method: "GET",
        responseType: "arraybuffer",
        params: {
          cheque_img: this.info.data.database_sig
        }
      };
      axios(config).then(response => {
        var bytes = new Uint8Array(response.data);
        var binary = bytes.reduce(
          (data, b) => (data += String.fromCharCode(b)),
          ""
        );
        this.data_img = "data:image/jpeg;base64," + btoa(binary);
      });
    },
    sendStatus() {
      if (this.info.data.payee_name.length == 0) {
        this.check[4] = "-";
      }
      if (this.check.includes(0)) {
        this.dialog = false;
        this.warn = true;
        window.scroll(0, 350);
      } else {
        const fd = new FormData();

        fd.append("cheque_id", this.id);
        fd.append("check", this.check);
        fd.append("payer_customer_id", this.info.data.payer_customer_id);
        fd.append("payer_account_id", this.info.data.payer_account_id);
        fd.append("payee_account_id", this.info.data.payee_account_id);
        fd.append("amount", this.info.data.amount);
        axios
          .post("http://localhost:8088/FinalTESTREALLY/cheque_approval", fd)
          .then(response => {
            console.log(response);
            this.dialog = false;
            this.dialog2 = true;
          });
      }
    }
  }
};
</script>
