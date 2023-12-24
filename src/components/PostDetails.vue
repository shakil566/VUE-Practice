<template>
    <div class="posts-details" >
        <h1>Posts Details id:{{ id }} and userId: {{ post.userId }}</h1>
        <div v-if="loading">
            Loading....
        </div>
        <div v-else>
            
        <div class="" >
            <h3>{{ post.title }}</h3>
            <p>{{ post.body }}</p>
            <br>
        </div> 
        </div>
    </div>
</template>

<script>

import axios from 'axios'

export default {
    name: 'PostDetails',
    props:'',
    data(){
        return{
            post:[],
            loading: true,
            id:this.$route.params.id
        }
    },
    created(){
        axios.get('https://jsonplaceholder.typicode.com/posts/'+this.id)
        .then(response => {
            // console.log(response)
            return this.post = response.data,
            this.loading = false;
        })
        .catch(error => {
            console.log(error.response.data)
        }
        )
    },
    beforeCreate(){
        return this.loading = 'Loading....'
    }


}
</script>

<style>

</style>