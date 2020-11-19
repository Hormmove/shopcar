<template>
  <div id="app">
  
    <router-view/>
  </div>
</template>
<script>
import axios from 'axios'
import jsonp from 'jsonp'
export default {
  data() {
    return {
      info:''
    }
  },
  // created() {
  //   axios.get('/api/activity/servicetime').then(res=>{
  //     this.info=res;
  //     console.log(res);
  //   })
  // },
  mounted() {
    let url ='https://www.imooc.com/activity/servicetime';
    jsonp(url,(err,res)=>{
        this.info=res;
          console.log(res);
    })
  },
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
