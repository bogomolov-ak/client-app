<template>
    <form id="example-form">
        <MyText></MyText>
        <hr>
        <EmailAddress></EmailAddress>
        <hr>
        <Textarea></Textarea>
        <hr>
        <Select :options="options"></Select>
        <hr>
        <Datepicker @input="date = $event"></Datepicker>
        <hr>
        <Radio></Radio>
        <hr>
        <CheckBoxes></CheckBoxes>
        <hr>
        <SubmitButton></SubmitButton>
    </form>
</template>

<script lang="ts">
    import Vue from 'vue'

    import MyText from './form_components/ExampleText.vue'
    import EmailAddress from './form_components/ExampleEmailAddress.vue'
    import Select from './form_components/ExampleSelect.vue'
    import Textarea from './form_components/ExampleTextarea.vue'
    import Datepicker from './form_components/ExampleDatepicker.vue'
    import Radio from './form_components/ExampleRadio.vue'
    import CheckBoxes from './form_components/ExampleCheckBoxes.vue'
    import SubmitButton from './form_components/ExampleSubmitButton.vue'

    export default Vue.extend({
        name: 'ExampleForm',
        data() {
            return {                
                date: ""
            }
        },
        computed: {
            options: function() {
                return ['1', '2', '3', '4', '5']
            }
        },
        components: {
            MyText,
            EmailAddress,
            Select,
            Textarea,
            Datepicker,
            Radio,
            CheckBoxes,
            SubmitButton,
        },
    })
</script>

<style scoped>
#example-form {
    margin: 60px auto;
    width: 400px;
}    
</style>