<template>
  <div>
    <h1>{{ title }}</h1>
    <div>
      <input type="date" v-model="selectedDate" />
      <button @click="search">검색</button>
    </div>
    <rank-table :list="list" />
  </div>
</template>

<script>
import RankTable from '../components/boxoffice/RankTable';

export default {
    components: {
        RankTable
    },
    data() {
        return {
            title: '',
            selectedDate: '',
            list: [],
            pathName: '',
            changeDate: ''
        }
    },
    methods: {
        search() {
            const targetDt = this.selectedDate.replaceAll('-', '');
            this.getData(targetDt);
        },
        async getData(targetDt) {
            switch(this.pathName) {
                case 'boxOfficeByDay':
                    this.list = (await this.getBoxOfficeByDay(targetDt))
                                .boxOfficeResult.dailyBoxOfficeList;
                    this.search();
                    break;
                case 'boxOfficeByWeek':
                    this.list = (await this.getBoxOfficeByWeek(targetDt))
                                .boxOfficeResult.weeklyBoxOfficeList;
                    this.search();
                    break;
            }
        },

    },
    created() {
        const d = new Date();
        if(this.pathName === 'boxOfficeByDay') {
            d.setDate(d.getDate() - 1);
        } else {
            d.setDate(d.getDate() - 7);
        }
        
        this.selectedDate = this.getOnlyDateStr(d);
        switch(this.pathName) {
            case 'boxOfficeByDay':
                this.changeDate = d.setDate(d.getDate() - 1);
                this.selectedDate = this.getOnlyDateStr(d);
                break;
            case 'boxOfficeByWeek':
                this.changeDate = d.setDate(d.getDate() - 7);
                this.selectedDate = this.getOnlyDateStr(d);
                break;       
        } 
    },
    updated() {
        const d = new Date();
        this.pathName = this.$route.name; // index.js의 route사용

        switch(this.pathName) {
            case 'boxOfficeByDay':
                this.title = '일별 박스오피스';
                break;
            case 'boxOfficeByWeek':
                this.title = '주간 박스오피스';
                break;
        }

        switch(this.pathName) {
            case 'boxOfficeByDay':
                this.changeDate = d.setDate(d.getDate() - 1);
                this.selectedDate = this.getOnlyDateStr(d);
                break;
            case 'boxOfficeByWeek':
                this.changeDate = d.setDate(d.getDate() - 7);
                this.selectedDate = this.getOnlyDateStr(d);
                break;       
        }

    }
}
</script>

<style></style>
