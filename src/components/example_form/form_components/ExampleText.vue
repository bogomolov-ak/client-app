<template>
    <div class="form-group">
        <label for="exampleFormControlInput1">Example text</label>
        <input v-model="myText" @blur="$v.myText.$touch()" type="text" class="form-control"
            :class="{'is-invalid': $v.myText.$error}" id="exampleFormControlInput1" placeholder="Something">
        <div class="invalid-feedback" v-if="$v.myText.$error">This field is required</div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import {
        required
    } from 'vuelidate/lib/validators'


    export default Vue.extend({
        name: 'ExampleText',
        data() {
            return {
                myText: ""
            }
        },
        watch: {
            myText() {
                this.$emit("onMyTextChanged", this.myText)
            }
        },
        validations: {
            myText: {
                required
            }
        },
    })
</script>