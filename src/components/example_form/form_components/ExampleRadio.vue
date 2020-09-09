<template>
    <div>
        <div class="form-check form-check-inline">
            <input v-model="radioValue" class="form-check-input" type="radio" name="inlineRadioOptions"
                id="inlineRadio1" :value="sex[0]">
            <label class="form-check-label" for="inlineRadio1">{{ sex[0] }}</label>
        </div>
        <div class="form-check form-check-inline">
            <input v-model="radioValue" class="form-check-input" type="radio" name="inlineRadioOptions"
                id="inlineRadio2" :value="sex[1]">
            <label class="form-check-label" for="inlineRadio2">{{ sex[1] }}</label>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    export default Vue.extend({
        name: 'ExampleRadio',
        data() {
            return {
                sex: [
                    'Male',
                    'Female'
                ],
            }
        },
        computed: {
            radioValue: {
                get() {
                    return this.$store.state.radio;
                },
                set(value) {
                    this.$store.commit("updateRadio", value)
                }
            }
        },
        watch: {
            radioValue() {
                this.$emit("onRadioChanged", this.radioValue)
            }
        }
    })
</script>