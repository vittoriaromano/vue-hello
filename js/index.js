'use strict'

const { createApp } = Vue

  //variabile url
  let imagine = 'https://picsum.photos/200'

  const vm = createApp({
    data() {
      return {
        //dati libreria
        message: ' VUE.JS ',
        //aggiungere la variabile  imag nella libreria
        imagine,
        centerClass: 'center',
        marginClass: 'margin',
        
      }
    },
  }).mount('#app');