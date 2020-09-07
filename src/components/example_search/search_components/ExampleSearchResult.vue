<template>
    <div>
        <ul class="list-group">
            <li class="list-group-item" v-for="(element, key) in elements" :key="key">{{ key }} : {{ element }}</li>
        </ul>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    export default Vue.extend({
        name: 'Result',
        props: {
            elements: Array
        }
    })
</script>

<style scoped>
    ul {
        margin-top: 20px;
        border: 2px solid black;
    }
</style>