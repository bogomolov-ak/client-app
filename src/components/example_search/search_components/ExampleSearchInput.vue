<template>
  <div>
    <div class="form-group">
      <label for="exampleFormControlInput1">Search</label>
      <input v-model="searchRequest" type="text" class="form-control" id="exampleFormControlInput1"
        placeholder="Something">
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  export default Vue.extend({
    name: 'ExampleSearch',
    data() {
      return {
        searchRequest: ""
      }
    },
    watch: {
      searchRequest() {
        this.$emit("onSearchInput", this.searchRequest)
      }
    }
  })
</script>