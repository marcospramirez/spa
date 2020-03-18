<template>
  <div id="app">
    <!-- the router outlet, where all matched components would ber viewed -->
    <h1 class="anton big-header">Marcos Ramirez</h1>
    <Navigation></Navigation>
    <router-view></router-view>
  </div>
</template>

  <script>
    import Navigation from "./components/Navigation";
    export default {
      name: 'app',
      components: {Navigation},
    }
  </script>
  <!-- styling for the component -->
  <style>
    @import url('https://fonts.googleapis.com/css?family=Anton&display=swap');

    #app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2C3E50;
      margin: 0;
      padding: 0;

    }

    .content{
      max-width: 630px;
      margin: auto;
    }

    .anton {
      font-family: 'Anton', sans-serif;
    }


    .big-header {
      font-size: 70px;
      color: #f94949;
      margin-bottom: 10px;
      margin-top: 25px;
    }

    @media screen and (max-width: 400px){
      .big-header{
        margin-top: 50px;
      }
    }

    .white {
      color: white;
    }

    body {
      margin: 0;
    }

    p{
      padding: 0 30px;
      text-align: left;
      line-height: 27px;

    }
  </style>