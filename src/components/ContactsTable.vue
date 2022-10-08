<template>
  <q-markup-table
    flat
    bordered
    separator="cell"
    class="my-contacts-table"
  >
    <tbody>
      <tr v-for="item in cites" :key="item.id">
        <td>{{ item.citeName }}</td>
        <td>
        <transition name="appearing" appear>
          <q-btn
            unelevated
            glossy
            :icon="`img:${item.img}`"
            @click="goTo(item.url)"
            color="secondary"
            dense
          >
          </q-btn>
          </transition>
        </td>
      </tr>
    </tbody>
  </q-markup-table>
</template>

<script>

import "../scss/components/ContactsTable.scss";

export default {
  name: 'ContactsTable',
  data() {
    return {
      cites: [
              {
                id: '1',
                citeName: 'GitHub',
                url: 'https://github.com/olgasoboleva23',
                img: 'GitHub.svg'
              },
              {
                id: '2',
                citeName: 'VK',
                url: 'https://vk.com/id483703213',
                img: 'vk.svg'
              },
              {
                id: '3',
                citeName: 'telegram',
                url: 'https://t.me/@helga_soboleva',
                img: 'telegram.svg'
              },
      ],
      res: "",
    }
  },
  methods: {
    goTo(url) {
      window.location.href=url
    }
  }
}
</script>
