<template>
    <div class="form-group">
        <label for="exampleFormControlInput1">Email address</label>
        <input v-model="emailValue" @blur="$v.emailValue.$touch()" type="email" class="form-control"
            :class="{'is-invalid': $v.emailValue.$error}" id="exampleFormControlInput1" placeholder="name@example.com">
        <div class="invalid-feedback" v-if="$v.emailValue.$error">This field is required and must be e-mail</div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import {
        required,
        email
    } from 'vuelidate/lib/validators'

    export default Vue.extend({
        name: 'ExampleEmailAddress',
        data() {
            return {
                emailValue: ""
            }
        },
        watch: {
            emailValue() {
                this.$emit("onEmailAddressChanged", this.emailValue);
            }
        },
        validations: {
            emailValue: {
                required,
                email
            }
        },
    })
</script>