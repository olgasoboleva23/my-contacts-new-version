<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="glossy">
      <q-toolbar>
        <q-toolbar-title>
          My contacts
        </q-toolbar-title>

      </q-toolbar>
    </q-header>
    <ContactsTable />
  </q-layout>
</template>

<script>
import ContactsTable from './components/ContactsTable.vue'

export default {
  name: 'LayoutDefault',

  components: {
    ContactsTable
  },

}
</script>
