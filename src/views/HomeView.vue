<template>
  <q-page class="home-view">
    <q-tabs
      v-model="tab"
      inline-label
      outside-arrows
      class="bg-pink-9 text-white shadow-2"
    >
      <q-tab name="contacts" icon="" label="My Contacts" />
      <q-tab name="duneQuote" icon="" label="Random Dune quote" />
    </q-tabs>

    <q-tab-panels
      v-model="tab"
      animated
      swipeable
      transition-prev="jump-up"
      transition-next="jump-up"
      transition-duration="800"
      class="absolute-center"
      keep-alive
    >
      <q-tab-panel name="contacts">
        <ContactsTable />
      </q-tab-panel>

      <q-tab-panel name="duneQuote">
        <RandomQuote />
      </q-tab-panel>
    </q-tab-panels>
  </q-page>
</template>

<script>
import { ref } from 'vue'

import ContactsTable from '../components/ContactsTable.vue'
import RandomQuote from '../components/RandomQuote.vue'

import "../scss/HomeView.scss";

export default {
  name: 'HomeView',
  components: {
    ContactsTable,
    RandomQuote
  },
	data() {
    return {
      tab: ref('contacts')
      }
	}
} 
</script>

