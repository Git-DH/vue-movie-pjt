import axios from "axios";

export default {
    data() {
        return {
            key: '42d098e43e02802fa54c1d21c82376ba',
            baseUrl:'http://www.kobis.or.kr/kobisopenapi/webservice/rest/',
            boxOfficeByDay: 'boxoffice/searchDailyBoxOfficeList.json',
            boxOfficeByWeek: 'boxoffice/searchWeeklyBoxOfficeList.json'
        }
    },
    methods: {
        async $api(url, parameter) {
            return (await axios.get(url, {
                params: parameter
            })
            .catch(e => {
                console.log(e);
            })).data;
        },
        async getBoxOfficeByDay(targetDt) {
            const parameter = {
                key: this.key,
                targetDt 
                // 'target' = target 키 값과 변수명이 같다면 그냥 적어도 된다.
            }
            const url = this.baseUrl + this.boxOfficeByDay;
            return await this.$api(url, parameter); // methods에 있는 $api를 호출
        },
        async getBoxOfficeByWeek(targetDt, weekGb) {
            const parameter = {
                key: this.key,
                targetDt,
                weekGb
                // 'target' = target 키 값과 변수명이 같다면 그냥 적어도 된다.
            }
            const url = this.baseUrl + this.boxOfficeByWeek;
            return await this.$api(url, parameter); // methods에 있는 $api를 호출
        },
        getOnlyDateStr(date) {
            // console.log(date.toISOString().split('T')[0]);
            return date.toISOString().split('T')[0];
        },
        getNumberWithComma(num) {
            return num.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
        }        
    }
}