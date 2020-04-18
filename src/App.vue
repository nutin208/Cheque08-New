<template>
  <v-app>
    <v-content>
      <!-- <navuser class="mt-12" /> -->

      <router-view></router-view>

      <!-- <HelloWorld /> -->
    </v-content>
  </v-app>
</template>
<style></style>
<script>
// import HelloWorld from "./components/HelloWorld";
// import navuser from "@/components/Nav";
export default {
  name: "App",

  components: {
    // navuser,
    // HelloWorld,
  },

  data: () => ({
    //
  })
};
</script>
