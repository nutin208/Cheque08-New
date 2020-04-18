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
              >Cheque Submiting</h1>
            </div>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>

      <v-card class="main_card" hover>
        <v-card-title style="font-size:2.5em; font-weight:bold ;">
          <span class="mx-auto mb-6">Please input your cheque information below</span>
        </v-card-title>
        <v-row class="mb-12" justify="center">
          <v-col cols="12" sm="4">
            <v-card class="pa-2" outlined tile>
              <v-card-title>Cheque Type</v-card-title>
              <v-radio-group class="ml-10 radio_check radio_text" v-model="type" row>
                <v-radio label="Bearer" value="Bearer"></v-radio>
                <v-radio label="Order" value="Ordered"></v-radio>
              </v-radio-group>
            </v-card>
          </v-col>
          <v-col cols="12" sm="4">
            <v-card class="pa-2" outlined tile>
              <v-card-title>Cheque Date</v-card-title>
              <div class="date_card">
                <v-menu
                  ref="menu"
                  v-model="menu"
                  :close-on-content-click="false"
                  :return-value.sync="date"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      style="font-size:1.5em"
                      v-model="date"
                      :error-messages="dateErrors"
                      label="Date"
                      required
                      @input="$v.date.$touch()"
                      @blur="$v.date.$touch()"
                      readonly
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="date" no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                    <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
                  </v-date-picker>
                </v-menu>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <v-row class="mb-12" justify="center">
          <v-col cols="12" sm="4">
            <v-card class="pa-2" outlined tile>
              <v-card-title>Payer Account ID</v-card-title>
              <div class="account_card">
                <v-text-field
                  v-model="payerid"
                  :error-messages="payeridErrors"
                  label="Payer ID"
                  style="font-size:1.5em"
                  required
                  @input="$v.payerid.$touch()"
                  @blur="$v.payerid.$touch()"
                ></v-text-field>
              </div>
            </v-card>
          </v-col>
          <v-col cols="12" sm="4">
            <v-card class="pa-2" outlined tile>
              <v-card-title>Your Account ID</v-card-title>
              <div class="account_card">
                <v-select
                  v-model="select"
                  :items="items"
                  :error-messages="selectErrors"
                  label="Select Your Account ID"
                  style="font-size:1.5em"
                  required
                  @change="$v.select.$touch()"
                  @blur="$v.select.$touch()"
                ></v-select>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <v-row class="mb-12" justify="center">
          <v-col cols="12" sm="4">
            <v-card class="pa-2" outlined tile>
              <v-card-title>Cheque Amount</v-card-title>
              <div class="amount_card">
                <v-text-field
                  v-model="amount"
                  :error-messages="amountErrors"
                  label="Amount (THB)"
                  style="font-size:1.5em"
                  required
                  @input="$v.amount.$touch()"
                  @blur="$v.amount.$touch()"
                ></v-text-field>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <v-row class="mb-12" justify="center">
          <v-col cols="12" sm="8">
            <v-card class="pa-2" outlined tile>
              <div>
                <v-card-title>Cheque Image</v-card-title>
                <input style="display: none" type="file" @change="onFileSelected" ref="fileInput" />
                <v-btn
                  @click="$refs.fileInput.click()"
                  color="primary"
                  style="margin-left:40% ;margin-bottom:2.5%"
                  rounded
                  large
                >Upload</v-btn>
                <v-card v-if="preview_url" class="img_card" hover>
                  <v-card-title style="font-size:1.5em">Preview</v-card-title>
                  <img v-if="preview_url" :src="preview_url" />
                </v-card>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <!-- <v-card class="pa-2" outlined tile>
          <v-card-title>Cheque Type</v-card-title>
          <v-text-field
            v-model="name"
            :error-messages="nameErrors"
            :counter="20"
            label="Name"
            required
            @input="$v.name.$touch()"
            @blur="$v.name.$touch()"
          ></v-text-field>
        </v-card>-->

        <!-- <v-text-field
          v-model="payeeid"
          :error-messages="payeeidErrors"
          label="Payee ID"
          required
          @input="$v.payeeid.$touch()"
          @blur="$v.payeeid.$touch()"
        ></v-text-field>-->

        <v-row class="mb-12" justify="center">
          <v-col cols="12" sm="8">
            <v-card class="pa-2" outlined tile>
              <div>
                <v-checkbox
                  v-model="checkbox"
                  :error-messages="checkboxErrors"
                  label="Click here to indicate that you have read and agree to the terms presented in the Terms and Conditions agreement"
                  required
                  @change="$v.checkbox.$touch()"
                  @blur="$v.checkbox.$touch()"
                ></v-checkbox>
                <v-btn
                  color="success"
                  style="margin-left:35.5% ;font-size:1.5em;margin-bottom:2.5% "
                  rounded
                  width="150"
                  height="50"
                  large
                  @click="onUpload"
                >submit</v-btn>
                <v-btn color="error" rounded small style="margin-left:0.5%" @click="clear">Reset</v-btn>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </v-content>
  </v-app>
</template>
<style scoped>
.date_card {
  width: 28%;
  margin-left: 7.5%;
}
.account_card {
  width: 50%;
  margin-left: 7.5%;
}
.amount_card {
  width: 70%;
  margin-left: 7.5%;
}
.img_card {
  width: 1000px;
  height: 500px;

  margin: 25px auto 100px auto;
}
.img_card img {
  width: 100%;
  height: 100%;
}
.main_card {
  width: 80%;
  margin: 0 auto;
}
body {
  font-family: "nunito", sans-serif;
}
header {
  font-size: 2.5em;
  font-family: "Nunito", sans-serif;
  text-align: center;
  margin: 75px auto 75px auto;
}
</style>
<script>
import axios from "axios";
import navbar from "@/components/Nav";
import { validationMixin } from "vuelidate"; //need to install vuelidate
import { required, maxLength, minLength } from "vuelidate/lib/validators"; //if you run system will show in cmd what command you have to prompt
export default {
  name: "cheque_approve",
  mixins: [validationMixin],
  validations: {
    name: { required, maxLength: maxLength(20) },

    date: { required },
    amount: { required },
    payeeid: { required, maxLength: maxLength(10), minLength: minLength(10) },
    payerid: { required, maxLength: maxLength(10), minLength: minLength(10) },
    select: { required },
    checkbox: {
      checked(val) {
        return val;
      }
    }
  },

  components: {
    navbar
  },

  data: () => ({
    type: null,
    return: {
      selectedFile: null
    },
    name: "",
    email: "",
    cheque_date: "",
    amount: "",
    payeeid: "",
    payerid: "",
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false,
    date: new Date().toISOString().substr(0, 10),
    menu: false,
    preview_url: null
  }),
  computed: {
    //Eror show
    checkboxErrors() {
      const errors = [];
      if (!this.$v.checkbox.$dirty) return errors;
      !this.$v.checkbox.checked && errors.push("You must agree to continue!");
      return errors;
    },
    selectErrors() {
      const errors = [];
      if (!this.$v.select.$dirty) return errors;
      !this.$v.select.required && errors.push("Item is required");
      return errors;
    },
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength &&
        errors.push("Name must be at most 10 characters long");
      !this.$v.name.required && errors.push("Name is required.");
      return errors;
    },
    dateErrors() {
      const errors = [];
      if (!this.$v.date.$dirty) return errors;
      !this.$v.date.required && errors.push("Date is required.");
      return errors;
    },
    amountErrors() {
      const errors = [];
      if (!this.$v.amount.$dirty) return errors;
      !this.$v.amount.required && errors.push("Amount is required.");
      return errors;
    },
    payeeidErrors() {
      const errors = [];
      if (!this.$v.payeeid.$dirty) return errors;
      !this.$v.payeeid.maxLength && errors.push("Payee ID is be 10 number");
      !this.$v.payeeid.minLength && errors.push("Payee ID is be 10 number");
      !this.$v.payeeid.required && errors.push("Payee ID is required.");
      return errors;
    },
    payeridErrors() {
      const errors = [];
      if (!this.$v.payerid.$dirty) return errors;
      !this.$v.payerid.maxLength && errors.push("Payer ID is be 10 number");
      !this.$v.payerid.minLength && errors.push("Payer ID is be 10 number");
      !this.$v.payerid.required && errors.push("Payer ID is required.");
      return errors;
    }
  },
  methods: {
    clear() {
      this.$v.$reset();
      this.name = "";
      this.date = "";
      this.amount = "";
      this.payeeid = "";
      this.payerid = "";
      this.select = null;
      this.checkbox = false;
    },

    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
      this.preview_url = URL.createObjectURL(this.selectedFile);
    },
    onUpload() {
      const fd = new FormData();

      fd.append("image", this.selectedFile, this.selectedFile.name);
      fd.append("name", this.name);
      fd.append("date", this.date);
      fd.append("amount", this.amount);
      fd.append("payeeid", this.payeeid);
      fd.append("payerid", this.payerid);
      fd.append("pick", this.picked);
      axios
        .post("", fd, {
          //dont forget to put destination of Data
          onUploadProgress: uploadEvent => {
            console.log(
              "Upload Progress: " +
                Math.round((uploadEvent.loaded / uploadEvent.total) * 100) +
                "%"
            );
          }
        })
        .then(res => {
          console.log(res);
        });
    }
  }
};
</script>
