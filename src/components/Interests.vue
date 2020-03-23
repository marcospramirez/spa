<template>
    <div>
        <section class="section">
            <div class="container is-center">
                I have lots of interests, i am gamer
            </div>
        </section>

        <section>
            <div class="columns is-multiline">
                <div class="column is-half">
                    <h3>Reading</h3>
                    <ul>
                        <li>
                            <a href="https://www.offscreenmag.com/" target="_blank">Offscreen Magazine</a>
                        </li>
                        <li>
                            <a href="https://www.versobooks.com/books/2757-fully-automated-luxury-communism"
                               target="_blank">Fully Automated Luxury Communism
                            </a>
                            , by Aaron Bastani
                        </li>
                        <li>
                            <a href="https://www.out.com/hola-papi" target="_blank">Hola Papi</a>
                            , by JP Brammer
                        </li>
                    </ul>
                </div>

                <div class="column is-half">
                    <h3>Watching</h3>
                    <ul>
                        <li>Pose</li>
                        <li>The Mandalorian</li>
                        <li>The Simpsons</li>
                    </ul>
                </div>

                <div class="column is-half">
                    <h3>Listening</h3>
                    <ul>
                        <li>
                            <a href="" target="_blank">My Brother, My Brother, and Me</a>
                        </li>
                        <li>
                            <a href="" target="_blank">The Adventure Zone</a>
                        </li>
                        <li>
                            <a href="" target="_blank">Food 4 Thot</a>
                        </li>
                    </ul>
                </div>

                <div class="column is-half">
                    <h3>Playing</h3>
                    <ul>
                        <li>Dungeons and Dragons 5th Edition</li>
                        <li>Pokemon Shield</li>
                        <li>Stardew Valley</li>
                        <li>Super Smash Brothers Ultimate</li>
                        <li>Overwatch</li>
                    </ul>
                </div>
            </div>

        </section>
    </div>
</template>

<script>
    export default {
        name: "Interests"
    }
</script>

<style scoped>
    ul {
        list-style: none;
        padding: 0;
        text-align: left;
        max-width: 400px;
        margin: auto;
    }
    a:visited {
        color: unset;
    }

    h3{
        font-weight: bold;
        font-size: 20px;
    }
</style>