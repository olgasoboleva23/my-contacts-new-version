<template>
<div>
<table>
<tr v-for="item in cites" :key="item.id">
<td>{{ item.citeName }}</td>
<td><q-btn :icon="`img:${item.img}`" @click="goTo(item.url)">
</q-btn></td>
</tr></table></div>
</template>

<script>
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
      ]
    }
  },
  methods: {
    goTo(url) {
      window.location.href=url
    }
  }
}
</script>
