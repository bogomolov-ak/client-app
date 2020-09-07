<template>
    <form id="example-form">
        <MyText></MyText>
        <hr>
        <EmailAddress></EmailAddress>
        <hr>
        <Textarea></Textarea>
        <hr>
        <Select :options="friendNames"></Select>
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

    import MyText from '../components/example_form/form_components/ExampleText.vue'
    import EmailAddress from '../components/example_form/form_components/ExampleEmailAddress.vue'
    import Select from '../components/example_form/form_components/ExampleSelect.vue'
    import Textarea from '../components/example_form/form_components/ExampleTextarea.vue'
    import Datepicker from '../components/example_form/form_components/ExampleDatepicker.vue'
    import Radio from '../components/example_form/form_components/ExampleRadio.vue'
    import CheckBoxes from '../components/example_form/form_components/ExampleCheckBoxes.vue'
    import SubmitButton from '../components/example_form/form_components/ExampleSubmitButton.vue'

    export default Vue.extend({
        name: 'ExampleForm',
        data() {
            return {                
                date: "",
                friendNames: []
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
        async mounted() {            
                const res = await fetch('/api/users');
                const friendNames = await res.json();
                this.friendNames = friendNames;          
        }
    })
</script>

<style scoped>
#example-form {
    margin: 60px auto;
    width: 400px;
}    
</style>