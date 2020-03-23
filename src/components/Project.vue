<template>
    <div>
        <section class="hero is-medium is-primary is-bold">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title is-2">
                        {{project.title}}
                    </h1>
                    <h2 class="subtitle is-4">
                        {{project.snippet}}
                    </h2>
                    <a :href="project.link" target="_blank" class="button button-red">See it live!</a>
                </div>
            </div>
        </section>
        <section class="section">
            <div class="container is-fluid">
                <div class="columns">
                    <div class="column is-two-thirds project-body has-text-left">
                        <router-link to="/portfolio/" class="button button-margin-bottom-20">Back to portfolio</router-link>
                        <vue-simple-markdown :source="project.body"></vue-simple-markdown>
                    </div>
                    <div class="column is-one-third">
                        <div class="columns is-multiline">
                            <div class="column is-full" v-for="image in project.images">
                                <img :src="image.url"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import ProjectsService from '@/services/ProjectsService'
    import PostCard from '@/components/PostCard'
    export default {
        name: "project",
        components: {
            PostCard
        },
        data() {
            return{
                airtableResponse: []
            }
        },
        mounted: function () {
            let self = this
            async function getProject() {
                try{
                    const response = await ProjectsService.getProject(self.$route.params.slug)
                    self.airtableResponse = response.data.records

                }catch(err){
                    console.log(err)
                }
            }
            getProject()
        },
        computed: {
            project(){
                let self = this
                if (self.airtableResponse[0]){
                    let thisProject = {
                        title: self.airtableResponse[0].fields.Title,
                        snippet: self.airtableResponse[0].fields.Excerpt,
                        images: self.airtableResponse[0].fields.Image,
                        body: self.airtableResponse[0].fields.Body,
                        link: self.airtableResponse[0].fields["live_link"]
                    }
                    return thisProject
                }
            }
        }
    };
</script>

<style scoped>
    .hero{
        background-color: #0097d1 !important;
        background-image: unset !important;
        box-shadow: 0px 9px 16px 0px rgba(194,194,194,1);
    }

    .button-red{
        background: #f94949;
        color:white;
        border: none;
        box-shadow: 0px 4px 10px 0px rgb(12, 109, 146);
    }

    .button-margin-bottom-20{
        margin-bottom: 20px;
    }


</style>