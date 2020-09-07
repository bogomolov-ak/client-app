<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link class="navbar-brand" to="/">Definitely not a NavBar</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <router-link tag="li" class="nav-item" to="/" exact active-class="active">
                    <a class="nav-link">Home</a>
                </router-link>
                <router-link tag="li" class="nav-item" to="/search" active-class="active">
                    <a class="nav-link">Search</a>
                </router-link>
            </ul>
        </div>
    </nav>
</template>

<script lang="ts">
    import Vue from 'vue'
    export default Vue.extend({
        name: "ExampleNavBar"
    })
</script>