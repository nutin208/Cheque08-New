<!-- Checking Signature -->
<template>
  <v-app>
    <v-content>
      <navbar />
      <h1>
        <center>Checking Signature</center>
    </h1>
    <div class="centered">
        <div class="left">
            <h2>Pending Signature</h2>
        </div>
        <div class="right">
            <h2>Original Signature</h2>
        </div>
    </div>
    <div class="checksig">

        <div class="checkleft">
        </div>
        <div class="checkright">
        </div>
        <div class="but">
            <button type="button" onclick="alert('Approve')">Approve</button>
            <button type="button" onclick="alert('Not Approve')">Not Approve</button>
        </div>
    </div>
    </v-content>
  </v-app>
</template>

<style>
        body {
            font-family: "Nunito", sans-serif;
        }

        header {
            font-size: 2.5em;
            font-family: "Nunito", sans-serif;
            text-align: center;
            margin: 50px auto 25px auto;
        }

        .text {
            width: 50%;
            z-index: 1;
            top: 0;
            display: inline-block;
        }

        .left {
            display: inline-block;
            text-align: center;
        }

        .right {
            display: inline-block;
            text-align: center;
            margin-left: 25%;
        }

        .centered {
            margin: 50px auto;
            text-align: center;
        }

        .centered img {
            width: 150px;
            border-radius: 50%;
        }

        .checksig {
            width: 80%;
            height: 500px;
            border: 1px solid black;
            border-radius: 5px;
            margin: 0 auto;
            padding: 10px;
        }

        .checkleft {
            width: 40%;
            height: 300px;
            padding: 4px;
            position: relative;
            border: 1px solid black;
            border-radius: 5px;
            left: 10%;
            display: inline-block;
            background-color: gray;
        }

        .checkright {
            width: 40%; 
            height: 300px;
            padding: 4px;
            position: relative;
            border: 1px solid black;
            border-radius: 5px;
            left: 10%;
            display: inline-block;
            background-color: gray;

        }

        .but {
            margin-top: 5rem;
            text-align: center;
            position: relative;
        }
    </style>
<script>
import navbar from "@/components/Nav";

export default {
  name: "cheque_submit",

  components: {
    navbar,
  },

  data: () => ({}),
};
</script>
