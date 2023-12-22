<template>
    <div class="posts" >
        <h1>Posts from API</h1>
        <div v-if="loading">
            Loading....
        </div>
        <div v-else>
            
        <div class="" v-for="post in posts" :key="post.id">
            <h3>{{ post.title }}</h3>
            <p>{{ post.body | stringLimit }}</p>
            <br>
        </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios'

export default {
    name: 'Posts',
    props:'',
    data(){
        return{
            posts:[],
            loading: true,
        }
    },
    created(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            return this.posts = response.data,
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