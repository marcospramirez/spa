<template>
    <div id="about" class="content">
        <img alt="River vibes" src="@/assets/images/about/marcos_river.png" height="400">
        <p>A Texas-born web developer living and working in San Diego, I have two years professional
            experience working with PHP(Symfony), JavaScript, HTML, CSS, and MySQL databases. </p>

        <p>I graduated in May 2019 from St. Edward’s University in Austin, and I'm excited to gain more experience in web
        development and design. I am adept with both backend and frontend development, but I
        am looking to focus on frontend. I’m a fast learner and would especially love to work with
        technologies such as React and Vue (which I built this site with).</p>

        <p>Download my <a href="@/assets/marcos_ramirez_resume.pdf" download>Resume</a>.</p>
    </div>
</template>

<script>
    export default {
        name: 'about'
    }
</script>
<!-- styling for the component -->
<style scoped>
    #about {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    @media screen and (max-width: 400px)
    {
        #about{
            margin-top: 30px;
        }
    }

    img{
        border-radius: 10px;
        -webkit-box-shadow: 0px 6px 7px -1px rgba(189,189,189,1);
        -moz-box-shadow: 0px 6px 7px -1px rgba(189,189,189,1);
        box-shadow: 0px 6px 7px -1px rgba(189,189,189,1);
    }
</style>