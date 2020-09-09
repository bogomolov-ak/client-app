<template>
  <div>
    <div class="form-check form-check-inline">
      <input v-model="value" class="form-check-input" type="checkbox" id="inlineCheckbox1" :value="interests[0]">
      <label class="form-check-label" for="inlineCheckbox1">{{ interests[0] }}</label>
    </div>
    <div class="form-check form-check-inline">
      <input v-model="valueC" class="form-check-input" type="checkbox" id="inlineCheckbox2" :value="interests[1]">
      <label class="form-check-label" for="inlineCheckbox2">{{ interests[1] }}</label>
    </div>
    <div class="form-check form-check-inline">
      <input v-model="valueC" class="form-check-input" type="checkbox" id="inlineCheckbox3" :value="interests[2]">
      <label class="form-check-label" for="inlineCheckbox3">{{ interests[2] }}</label>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ExampleCheckBoxes',
    data() {
      return {
        interests: [
          'Music',
          'Movies',
          'Doka2'
        ],
      }
    },
    computed: {
      valueC: {
        get() {
          return this.$store.state.valueC;
        },
        set(value) {
          this.$store.commit('updateCheckboxes', value);
        }
      }
    },
    watch: {
      value() {
        this.$emit('onCheckBoxesChange', this.value);
      },
    }
  }
</script>