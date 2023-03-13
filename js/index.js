'use strict'

const { createApp } = Vue
    //option api
  const vm = createApp({
    data() {
      return {
        //qui inseriamo i dati che voglio utilizzare
        message: ' VUE.JS ',
      }
    },
  }).mount('#app');