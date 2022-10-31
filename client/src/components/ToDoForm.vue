<template>
    <div class="row mt-5">
        <input v-model="text" class="col-sm form-control" type="text" placeholder="Type here...">
        <DatePicker class="col-sm-2" v-model="date" />
        <button class="btn btn-dark col-sm-2" @click="push()">Add</button>
    </div>
</template>

<script lang="ts">
import { IForm } from "../types/form";
import apiMethods from "../utils/apiMethods";
import DatePicker from "./datePicker.vue"

    export default {
        name: "to-do-form",
        emits: ["push"],
        methods: {
            async push() {
                if ((new Date(this.date).getFullYear() >= new Date().getFullYear()) && (new Date(this.date).getMonth() >= new Date().getMonth()) && (new Date(this.date).getDate() >= new Date().getDate()))
                await apiMethods.pushTodo({text: this.text, date: this.date, done: this.done}).then(() => this.$emit('push'))
                else
                alert("You can't planning past!")
            }
        },
        components: {
            DatePicker,
        },
        data() {
            return {
                text: '',
                done: false,
                date: new Date(),
            } as IForm
        }
    }
</script>
