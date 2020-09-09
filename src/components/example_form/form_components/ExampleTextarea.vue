<template>
    <div class="form-group">
        <label for="exampleFormControlTextarea1">Example textarea</label>
        <textarea v-model="textareaValue" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    export default Vue.extend({
        name: 'ExampleTextarea',
        computed: {
            textareaValue: {
                get () {
                    return this.$store.state.textarea;
                },
                set (value) {
                    this.$store.commit("updateTextarea", value)
                }
            }
        },
        watch: {
            textareaValue() {
                this.$emit("onTextareaChanged", this.textareaValue)
            }
        }
    })
</script>