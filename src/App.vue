<template>
  <div id="app">
    <form>
      <div class="form-group">
        <label for="exampleFormControlInput1">Example text</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Something">
      </div>
      <div class="form-group">
        <label for="exampleFormControlInput1">Email address</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
      </div>
      <div class="form-group">
        <label for="exampleFormControlTextarea1">Example textarea</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <div class="form-group">
        <label for="exampleFormControlSelect1">Example select</label>
        <select class="form-control" id="exampleFormControlSelect1">
          <option v-for="option in options" :key="option">{{ option }}</option>
        </select>
      </div>
      <div class="form-group">
        <label for="inputDate">Example date</label>
        <date-picker v-model="date" :placeholder="datetimeNow"></date-picker>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
        <label class="form-check-label" for="inlineRadio1">1</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
        <label class="form-check-label" for="inlineRadio2">2</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3">
        <label class="form-check-label" for="inlineRadio3">3</label>
      </div>

      <hr>

      <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
        <label class="form-check-label" for="inlineCheckbox1">1</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
        <label class="form-check-label" for="inlineCheckbox2">2</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3">
        <label class="form-check-label" for="inlineCheckbox3">3</label>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import DatePicker from 'vue2-datepicker';
  import 'vue2-datepicker/index.css';

  export default Vue.extend({
    name: 'App',
    data() {
      return {
        options: ['1', '2', '3', '4', '5'],
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
    components: {
      DatePicker
    }
  });
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: 60px auto;
    width: 400px;
  }
</style>