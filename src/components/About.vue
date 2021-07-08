<template>
    <div id="about" class="content">
        <img alt="River vibes" src="@/assets/images/about/marcos_river.png" height="400">
        <div class="has-text-left about-text">
            <p>A Texas-born web developer living and working in San Diego, I have two years professional
                experience working with PHP(Symfony), JavaScript, HTML, CSS, and MySQL databases. </p>

            <p>I graduated in May 2019 from St. Edward’s University in Austin, and I'm excited to gain more experience in web
                development and design. I am adept with both backend and frontend development, but I
                am looking to focus on frontend. I’m a fast learner and would especially love to work with
                technologies such as React and Vue (which I used to build this website with help from this <a href="https://dev.to/markjohnson303/building-a-portfolio-site-with-vue-bulma-and-airtable-5a58" target="_blank">tutorial</a>).</p>

            <p>Download my <a href="/static/marcos_ramirez_resume.pdf" download>Resume</a>.</p>
        </div>
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
        margin: 40px auto;
    }

    .about-text{
        padding: 0 30px;
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
        margin-bottom: 40px;
    }
</style>