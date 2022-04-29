new Vue({
    el:"#app",
    data:{
        maiList: []
    },

    methods:{},

    mounted(){
        for(i=0; i<10; i++){
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then(response=>{
            this.maiList.push(response.data.response)
            
            })
        }
    }
})