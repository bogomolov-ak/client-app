<template>
    <div class="form-group">
        <label for="exampleFormControlSelect1">Example select</label>
        <select class="form-control" id="exampleFormControlSelect1">
          <option v-for="option in options" :key="option">{{ option }}</option>
        </select>
      </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: 'ExampleSelect',
    props: {
        options: Array
    }
})
</script>