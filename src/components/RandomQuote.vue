<template>
  <div>
    <span>Random Dune quote: </span>
    <span>{{ random_quote }}</span>
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: 'RandomQuote',
  data() {
    return {
      random_quote: null,
    }
  },
  async created() {
    this.random_quote = await this.getQuote()
  },
  methods: {
    getQuote() {
      return axios.get('https://the-dune-api.herokuapp.com/quotes').then(response => {
         return response.data[0].quote
       }).catch(function (error) {
         console.error("in get_random_quote", error);
       })
    }
  }
}
</script>
