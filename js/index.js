'use strict'

const { createApp } = Vue

  //constante url
  let imagine = 'https://picsum.photos/200'

  const vm = createApp({
    data() {
      return {
        //dati libreria
        message: ' VUE.JS ',
        //mettiamo la constante imag nella libreria
        imagine,
        //PROVA INSERIMENTO LINK
        //anchor: 'img',
        //link:'https://picsum.photos/200'
      }
    },
  }).mount('#app');