<template>
    <section class="section">
        <div class="container">
            <div class="columns is-multiline">
                <div class="column is-one-third" v-for="project in projects">
                    <post-card v-bind="project"></post-card>
                </div>
            </div>

        </div>
    </section>
</template>

<script>
    import ProjectsService from '@/services/ProjectsService';
    import PostCard from '@/components/PostCard';

    export default {
        name: "Portfolio",
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
            async function getProjects() {
                try{
                    const response = await ProjectsService.getProjects()
                    console.log(response)
                    self.airtableResponse = response.data.records

                }catch(err){
                    console.log(err)
                }
            }
            getProjects()
        },
        computed: {
            projects(){
                let self = this
                let projectList = []
                for (var i = 0; i < self.airtableResponse.length; i++) {
                    if (self.airtableResponse[i].fields.Published){
                        let project = {
                            title: self.airtableResponse[i].fields.Title,
                            snippet: self.airtableResponse[i].fields.Excerpt,
                            image: self.airtableResponse[i].fields.Image[0].url,
                            slug: self.airtableResponse[i].fields.Slug,
                            link: self.airtableResponse[i].fields["live_link"]
                        }
                        projectList.push(project)
                    }
                }
                return projectList
            }
        }
    };
</script>

<style scoped>

</style>