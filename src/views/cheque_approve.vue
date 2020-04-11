<template>
  <v-app>
    <v-content>
      <navbar />
      <header>
      <h1>Submit Cheque</h1>
      </header>
      
      <div>
        <input 
        style="display: none"
        type="file" 
        @change="onFileSelected"
        ref="fileInput">
        <v-btn @click="$refs.fileInput.click()">Pick File</v-btn>
        <v-btn @click="onUpload">Upload</v-btn>
      </div>
      
    </v-content>
  </v-app>

</template>
<style>
body{
  font-family: "nunito", sans-serif;
}
header{
    font-size: 2.5em;
    font-family: "Nunito", sans-serif;
    text-align: center;
    margin: 75px auto 75px auto;
}

.v-btn{
  display: flex;
  margin: auto;
}

</style>
<script>
import axios from 'axios'
import navbar from "@/components/Nav";

export default {
  name: "cheque_approve",

  components: {
    navbar,
  },

  data: () => ({
    return: {
      selectedFile: null
    }
  }),
  methods:{
    onFileSelected(event){
      this.selectedFile = event.target.files[0]
    },
    onUpload(){
      const fd = new FormData();
      fd.append('image',this.selectedFile,this.selectedFile.name)
      axios.post('',fd,{
        onUploadProgress: uploadEvent => {
          console.log('Upload Progress: '+ Math.round(uploadEvent.loaded / uploadEvent.total *100)+'%')
        }
      })
      .then(res =>{
        console.log(res)
      })
    }
  }
};
</script>
