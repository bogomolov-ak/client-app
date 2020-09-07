<template>
    <div id="my-search">
        <MySearchInput></MySearchInput>
        <hr>
        <MySearchResults></MySearchResults>
    </div>
</template>

<script>
    import Vue from 'vue'
    import MySearchInput from '../components/example_search/search_components/ExampleSearchInput.vue'
    import MySearchResults from '../components/example_search/search_components/ExampleSearchResults.vue'

    export default Vue.extend({
        name: 'Search',
        components: {
            MySearchInput,
            MySearchResults,
        }
    })
</script>

<style>
    #my-search{
        width: 400px;
        margin: 0px auto;
    }
</style>