<template>
  <v-app>
    <v-content>
      <navbar />
      <img alt="Vue logo" src="../assets/logo.png" />
      <center>
      <h1>Verify Cheque</h1>
      <br>
      <form action="/action_page.php">
      <table class="w3-table w3-striped w3-border">
      <tr>
      <th></th>
      <th>True</th>
      <th>False</th>
      </tr>
      <tr>
      <td>Type</td>
      <td><input type="radio" id="true" name="type" value="true">
        </td>
      <td> <input type="radio" id="false" name="type" value="false">
        </td>
      </tr>
      <tr>
      <td>Name</td>
      <td><input type="radio" id="true" name="name" value="true"></td>
      <td><input type="radio" id="false" name="name" value="false"></td>
      </tr>
      <tr>
      <td>Date</td>
      <td><input type="radio" id="true" name="date" value="true"></td>
      <td><input type="radio" id="false" name="date" value="false"></td>
      </tr>
       <tr>
      <td>Amount</td>
      <td><input type="radio" id="true" name="amount" value="true"></td>
      <td><input type="radio" id="false" name="amount" value="false"></td>
      </tr> <tr>
      <td>Receiver Name</td>
      <td><input type="radio" id="true" name="Rname" value="true"></td>
      <td><input type="radio" id="false" name="Rname" value="false"></td>
      </tr>
  </table>
        <br>
        <input type="submit" value="Next">
        
        
        </form>
        </center>
    </v-content>
  </v-app>
</template>
<style>
  h1{
    font-size: 3em;
    margin-bottom: 5%;
  }
  table {
  font-family: "Nunito", sans-serif;
  font-size: 1.5em;
  width: 30%;
  border-collapse: collapse;
  border: 3px solid #1976d2;
  margin: 0 0 5% 35%;
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
  input[type=button], input[type=submit], input[type=reset] {
  background-color:#1976d2;
  border: none;
  color: white;
  padding: 16px 32px;
  text-decoration: none;
  margin: 4px 2px;
  cursor: pointer;
}
  img  {
    float: left;
    position: absolute;
    margin-top: 15%;
    margin-left: 20%;
  }
  /* table,tr,td{
    border: 1px solid black;
    width: 200px;
    height: 50px;
  } */
  body {
  font-family: "Nunito", sans-serif;
  }

</style>
<script>
import navbar from "@/components/Nav";

export default {
  name: "cheque_verify",

  components: {
    navbar,
  },

  data: () => ({}),
};
</script>
