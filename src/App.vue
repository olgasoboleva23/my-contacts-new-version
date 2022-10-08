<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>My contacts and philosophy</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-footer elevated>
      <q-toolbar>
        <q-toolbar-title>Helga Soboleva</q-toolbar-title>
      </q-toolbar>
    </q-footer>

      <q-page-container>
        <router-view/>
      </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue'
import "./scss/App.scss";

export default defineComponent({
  name: 'App',
})
</script>
