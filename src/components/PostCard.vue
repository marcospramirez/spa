<template>
    <div class="post-card">
        <div class="card">
            <div class="card-image">

                <div class="image-holder" :style="{backgroundImage: 'url(\'' + image + '\')' }"></div>

            </div>
            <div class="card-content">
                <div class="media">
                    <div class="media-content">
                        <p class="title is-4">{{title}}</p>
                        <p class="subtitle is-6">{{date}}</p>
                    </div>
                </div>
                <div class="content">
                    <p>{{snippet}}</p>
                    <div class="links">
                        <router-link :to="'/portfolio/'+slug" class="button is-fullwidth">View Project</router-link>
                        <a :href="link" target="_blank" class="button is-fullwidth">See it live!</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "PostCard",
        props: {
            title: String,
            date: String,
            snippet: String,
            image: String,
            slug: String,
            link: String
        }
    };
</script>

<style scoped>

    .links a:first-child{
        background-color: #0097d1;
        color: white;
        margin-bottom: 10px;
    }
    .title{
        margin-bottom: 0.5rem !important;
    }
    .post-card{
        height: 100%;
    }

    .card{
        height: 100%;
    }
    .image-holder{
        height: 300px;
        width: auto;
        background-size: cover;
        background-position: center;
    }

    .media-content{
        overflow: unset;
    }
</style>
