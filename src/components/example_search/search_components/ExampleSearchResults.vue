<template>
    <div>
        <ul>
            <li v-for="result in results" :key="result">
                <SearchResult></SearchResult>
                </li>
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
    data() {
        return {
            results: [SearchResult, SearchResult]
        }
    }
})
</script>