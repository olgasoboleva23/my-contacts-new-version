<template>
	<q-tabs
		v-model="tab"
		inline-label
		outside-arrows
		class="bg-purple text-white shadow-2"
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
	>
		<q-tab-panel name="contacts">
			<ContactsTable />
		</q-tab-panel>

		<q-tab-panel name="duneQuote">
			<RandomQuote />
		</q-tab-panel>
	</q-tab-panels>
</template>

<script>
import { ref } from 'vue'

import ContactsTable from '../components/ContactsTable.vue'
import RandomQuote from '../components/RandomQuote.vue'

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

