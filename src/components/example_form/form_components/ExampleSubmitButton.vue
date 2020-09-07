<template>
    <div>
        <button type="submit" @click.prevent="onSubmit" class="btn btn-primary">Submit</button>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    export default Vue.extend({
        name: "ExampleSubmitButton",
        methods: {
            onSubmit: function () {
                this.$emit("onSubmit")
            }
        }
    })
</script>