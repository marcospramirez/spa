<template>
    <div class="section">
        <h3>Follow me on social or get in touch!</h3>
        <div class="icons">
            <a href="https://twitter.com/MarcosRamirez65" target="_blank"><font-awesome-icon :icon="['fab', 'twitter']" /></a>
            <a href="https://www.instagram.com/marcoslikesthings/" target="_blank"><font-awesome-icon :icon="['fab', 'instagram']" /></a>
            <a href="https://www.linkedin.com/in/marcos-ramirez-033494130/" target="_blank"><font-awesome-icon :icon="['fab', 'linkedin']" /></a>
            <a href="https://m.twitch.tv/badmartian412/profile" target="_blank"><font-awesome-icon :icon="['fab', 'twitch']" /></a>
        </div>
        <div>
            <a class="email" href="mailto:mrcrmz@gmail.com">mrcrmz@gmail.com</a>
        </div>
        <br/>
        <img alt="River vibes" src="@/assets/images/about/marcos_river.png" height="400">
    </div>
</template>

<script>
    export default {
        name: "ContactMe"
    }
</script>

<style scoped>
    .icons a{
        font-size: 40px;
        color: #0097d1;
        padding: 10px 5px;
        display: inline-block;
        width: 50px;
    }

    .email{
        font-size: 20px;
    }

    img{
        border-radius: 10px;
        -webkit-box-shadow: 0px 6px 7px -1px rgba(189,189,189,1);
        -moz-box-shadow: 0px 6px 7px -1px rgba(189,189,189,1);
        box-shadow: 0px 6px 7px -1px rgba(189,189,189,1);
    }
</style>