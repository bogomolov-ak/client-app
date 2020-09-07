<template>
    <div>
        <ul>
            <SearchResult v-for="result in searchResult" :key="result" :elements="result"></SearchResult>
        </ul>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import SearchResult from './ExampleSearchResult.vue'

    export default Vue.extend({
        name: 'SearchResults',
        components: {
            SearchResult,
        },
        props: {
            searchInput: String,
            searchResult: Array,
        },
        data() {
            return {}
        }
    })
</script>