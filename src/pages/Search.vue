<template>
    <div id="my-search">
        <MySearchInput @onSearchInput="searchInput = $event"></MySearchInput>
        <hr>
        <MySearchResults :searchInput="searchInput" :searchResult="searchResult"></MySearchResults>
    </div>
</template>

<script>
    import Vue from 'vue'
    import MySearchInput from '../components/example_search/search_components/ExampleSearchInput.vue'
    import MySearchResults from '../components/example_search/search_components/ExampleSearchResults.vue'
    import axios from 'axios'
    export default Vue.extend({
        name: 'Search',
        data() {
            return {
                searchInput: "",
                searchResult: []
            }
        },
        components: {
            MySearchInput,
            MySearchResults,
        },
        watch: {
            searchInput() {
                axios.post('/api/search', {
                    value: this.searchInput
                }).then((response) => {
                    console.log(response);
                    this.searchResult = response.data;
                }).catch(() => {
                    console.log('Error');
                })
            }
        }
    })
</script>

<style>
    #my-search {
        width: 400px;
        margin: 0px auto;
    }
</style>