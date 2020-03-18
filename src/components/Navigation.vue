<template>
    <nav class="main-navigation">
        <ul>
            <li>
                <router-link v-bind:to="'/about'">About</router-link>
            </li>
            <li>
                <router-link v-bind:to="'/portfolio'">Portfolio</router-link>
            </li>
            <li>
                <router-link v-bind:to="'/interests'">Interests</router-link>
            </li>
            <li>
                <router-link v-bind:to="'/contact'">Contact Me</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: "navigation"
    }
</script>

<style scoped>
    nav {
        background: #F1F1F1;
    }

    ul {
        list-style: none;
        text-align: center;
        margin: 0 10px;
        padding: 0;
    }

    li {
        display: inline-block;
        cursor: pointer;
    }

    li:hover {
        opacity: 0.7;
    }

    li a {
        text-decoration: none;
        color: unset;
        padding: 10px;
        display: inline-block;
    }

    li a:visited {
        color: unset;
    }

    @media screen and (max-width: 400px) {

        nav {
            position: fixed;
            top: 0;
            width: 100%;
        }

    }
</style>