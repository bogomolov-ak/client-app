<template>
  <div class="form-group">
    <label for="inputDate">Example date</label>
    <date-picker @input="onChange" :placeholder="datetimeNow" v-model="date"></date-picker>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import DatePicker from 'vue2-datepicker';
  import 'vue2-datepicker/index.css';

  export default Vue.extend({
    name: 'Datepicker',
    data() {
      return {
        date: ""
      }
    },
    computed: {
      datetimeNow(): string {
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const yyyy = today.getFullYear();

        return `${yyyy}-${mm}-${dd}`;
      }
    },
    methods: {
      onChange: function () {
        console.log(this.$emit)
        this.$emit('input', this.date);
      }
    },
    components: {
      DatePicker
    }
  })
</script>