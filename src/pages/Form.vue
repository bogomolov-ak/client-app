<template>
    <form id="example-form">
        <MyText ref="myText" @onMyTextChanged="formValues.myTextValue = $event"></MyText>
        <hr>
        <EmailAddress ref="email" @onEmailAddressChanged="formValues.emailAddressValue = $event"></EmailAddress>
        <hr>
        <Textarea @onTextareaChanged="formValues.textareaValue = $event"></Textarea>
        <hr>
        <Select :options="friendNames" @onSelectChanged="formValues.selectValue = $event"></Select>
        <hr>
        <Datepicker @input="formValues.datepickerValue = $event"></Datepicker>
        <hr>
        <Radio @onRadioChanged="formValues.radioValue = $event"></Radio>
        <hr>
        <CheckBoxes @onCheckBoxesChange="formValues.checkBoxesValue = $event"></CheckBoxes>
        <hr>
        <SubmitButton @onSubmit="submitForm" :isInvalid="false"></SubmitButton>        
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
    import axios from 'axios'

    export default Vue.extend({
        name: 'ExampleForm',
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
        data() {
            return {
                friendNames: [""],

                formValues: {
                    myTextValue: "",
                    emailAddressValue: "",
                    textareaValue: "",
                    selectValue: "",
                    datepickerValue: "",
                    radioValue: "",
                    checkBoxesValue: [""],
                }
            }
        },
        methods: {
            isInvalid() {
                return this.$refs.myText.$v.$invalid || this.$refs.email.$v.$invalid
            },
            submitForm() {                
                if (this.isInvalid()) { 
                    this.$refs.myText.$v.myText.$touch(); 
                    this.$refs.email.$v.emailValue.$touch(); 
                    return undefined;
                }
                axios
                    .post('/api/submitions', {
                        myTextValue: this.formValues.myTextValue,
                        emailAddressValue: this.formValues.emailAddressValue,
                        textareaValue: this.formValues.textareaValue,
                        selectValue: this.formValues.selectValue,
                        datepickerValue: this.formValues.datepickerValue,
                        radioValue: this.formValues.radioValue,
                        checkBoxesValue: this.formValues.checkBoxesValue.join(' '),
                    })
                    .then(() => console.log('Ok'))
                    .catch(() => console.log('Error'));
            }, 
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