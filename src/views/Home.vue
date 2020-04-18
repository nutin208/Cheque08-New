<template>
  <div class="home">
    <center>
      <div style="font-size:1.2em;">
        Cheque 08 : TO DO LIST
        <router-link style=" margin-right: 25px;" to="/">Home</router-link>

        <router-link style=" margin-right: 25px;" to="/cheque_staffmenu">Nut1</router-link>
        <router-link style=" margin-right: 25px;" to="/cheque_usermenu">Nut2</router-link>

        <router-link style=" margin-right: 25px;" to="/cheque_approve">Mek</router-link>
        <router-link style=" margin-right: 25px;" to="/cheque_verify">Bun</router-link>
      </div>
    </center>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    // HelloWorld,
  }
};
</script>
