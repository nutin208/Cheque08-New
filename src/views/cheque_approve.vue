<template>

  <v-app>
    
    <v-content>
      <navbar />
      <header>
      <h1>Submit Cheque</h1>
      </header>
      <div>
        <v-card
          v-for="n in 1"
          :key="n"
          class="pa-2"
          outlined
          tile
          >
        <input type="radio" id="Order Cheque" value="Order Cheque" v-model="picked">
        <label for="Order Cheque">Order Cheque</label>
        <br>
        <input type="radio" id="Bearer Cheque" value="Bearer Cheque" v-model="picked">
        <label for="Bearer Cheque">Bearer Cheque</label>
        <br>
      </v-card>

         <v-text-field
      v-model="name"
      :error-messages="nameErrors"
      :counter="20"
      label="Name"
      required
      @input="$v.name.$touch()"
      @blur="$v.name.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="date"
      :error-messages="dateErrors"
      label="Date"
      required
      @input="$v.date.$touch()"
      @blur="$v.date.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="amount"
      :error-messages="amountErrors"
      label="Amount"
      required
      @input="$v.amount.$touch()"
      @blur="$v.amount.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="payeeid"
      :error-messages="payeeidErrors"
      label="Payee ID"
      required
      @input="$v.payeeid.$touch()"
      @blur="$v.payeeid.$touch()"
    ></v-text-field>
    <v-text-field
      v-model="payerid"
      :error-messages="payeridErrors"
      label="Payer ID"
      required
      @input="$v.payerid.$touch()"
      @blur="$v.payerid.$touch()"
    ></v-text-field>
    <v-select
      v-model="select"
      :items="items"
      :error-messages="selectErrors"
      label="Item"
      required
      @change="$v.select.$touch()"
      @blur="$v.select.$touch()"
    ></v-select>
    <v-checkbox
      v-model="checkbox"
      :error-messages="checkboxErrors"
      label="Do you agree?"
      required
      @change="$v.checkbox.$touch()"
      @blur="$v.checkbox.$touch()"
    ></v-checkbox>

   
    
    <v-btn @click="clear">clear</v-btn>
    

        <input 
        style="display: none"
        type="file" 
        @change="onFileSelected"
        ref="fileInput">
        
        <v-btn @click="$refs.fileInput.click()">Pick File</v-btn> 
        <v-btn @click="onUpload">submit</v-btn>
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



</style>
<script>
import axios from 'axios'
import navbar from "@/components/Nav";
import { validationMixin } from 'vuelidate'                           //need to install vuelidate
import { required, maxLength ,minLength} from 'vuelidate/lib/validators'   //if you run system will show in cmd what command you have to prompt

export default {
  name: "cheque_approve",
   mixins: [validationMixin],
    validations: {
      name: { required, maxLength: maxLength(20) },
     
      date:{required},
      amount:{required},
      payeeid:{required,maxLength:maxLength(10),minLength:minLength(10)},
      payerid:{required,maxLength:maxLength(10),minLength:minLength(10)},
      select: { required },
      checkbox: {
        checked (val) {
          return val
        },
      },
    },
  
  components: {
    navbar,
  },
    
  data: () => ({
    picked: null
    ,
    return: {
      selectedFile: null,
       
    },
      name: '',
      email: '',
      date:'',
      amount:'',
      payeeid:'',
      payerid:'',
      select: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
      ],
      checkbox: false,
  }),

  computed: {            //Eror show
      checkboxErrors () {
        const errors = []
        if (!this.$v.checkbox.$dirty) return errors
        !this.$v.checkbox.checked && errors.push('You must agree to continue!')
        return errors
      },
      selectErrors () {
        const errors = []
        if (!this.$v.select.$dirty) return errors
        !this.$v.select.required && errors.push('Item is required')
        return errors
      },
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
        !this.$v.name.required && errors.push('Name is required.')
        return errors
      },
      dateErrors(){
        const errors=[]
        if(!this.$v.date.$dirty) return errors
        !this.$v.date.required && errors.push('Date is required.')
        return errors
      },
      amountErrors(){
        const errors=[]
        if(!this.$v.amount.$dirty) return errors
        !this.$v.amount.required && errors.push('Amount is required.')
        return errors
      },
      payeeidErrors(){
        const errors=[]
        if(!this.$v.payeeid.$dirty) return errors
        !this.$v.payeeid.maxLength && errors.push('Payee ID is be 10 number')
        !this.$v.payeeid.minLength && errors.push('Payee ID is be 10 number')
        !this.$v.payeeid.required && errors.push('Payee ID is required.')
        return errors
      },
      payeridErrors(){
        const errors=[]
        if(!this.$v.payerid.$dirty) return errors
         !this.$v.payerid.maxLength && errors.push('Payer ID is be 10 number')
        !this.$v.payerid.minLength && errors.push('Payer ID is be 10 number')
        !this.$v.payerid.required && errors.push('Payer ID is required.')
        return errors
      },
    },

  methods:{
    
      clear () {
        this.$v.$reset()
        this.name = ''
        this.date = ''
        this.amount=''
        this.payeeid=''
        this.payerid=''
        this.select = null
        this.checkbox = false
      },
    

    onFileSelected(event){
      this.selectedFile = event.target.files[0]
    },
    onUpload(){
      const fd = new FormData();
      
      fd.append('image',this.selectedFile,this.selectedFile.name)
      fd.append('name',this.name)
      fd.append('date',this.date)
      fd.append('amount',this.amount)
      fd.append('payeeid',this.payeeid)
      fd.append('payerid',this.payerid)
      fd.append('pick',this.picked)
      axios.post('',fd,{             //dont forget to put destination of Data
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

