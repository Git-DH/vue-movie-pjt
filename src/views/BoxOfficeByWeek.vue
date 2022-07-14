<template>
<div>
  <h1>{{ title }}</h1>
  <div>
    <input type="date" v-model="selectedDate">
    <button @click="search">검색</button>
  </div>
  <rank-table :list="list" /> 
  <!-- v-bind: list 와 같음 -->
</div>
</template>

<script>
import RankTable from '../components/boxoffice/RankTable.vue';

export default {
  components: {
    RankTable
  },
   data() {
    return{
      title: 'BoxOfficeByWeek',
      selectedDate: '',
      list: []
    }
  },
  methods: {
     search() {
      const targetDt = this.selectedDate.replaceAll('-', '');
      this.getData(targetDt);
    },
    async getData(targetDt) {
      const data = await this.getBoxOfficeByWeek(targetDt)
      console.log(data);
      this.list = data.boxOfficeResult.weeklyBoxOfficeList;
    }
  },
  created() {
    const d = new Date();
    d.setDate(d.getDate() - 1);
    this.selectedDate = this.getOnlyDateStr(d);
  }
}
</script>

<style>

</style>