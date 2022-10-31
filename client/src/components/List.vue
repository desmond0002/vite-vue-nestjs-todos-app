<template>
  <div class="row mt-5" v-for="todo in todos">
    <p class="lead col-sm-5">{{ todo.text }}</p>
    <div class="form-text col-sm-1">{{ new Date(todo.date).getDate() + "-" + (new Date(todo.date).getMonth() + 1) + "-" + new Date(todo.date).getFullYear()}}</div>
    <div class="form-text col-sm-1">{{ todo.done ? "Done" : "In progress" }}</div>
    <div class="form-check form-switch col-sm-1">
      <input v-if="!todo.done" @change="updateTodo(String(todo.id)!, !todo.done)" class="form-check-input" type="checkbox" id="flexSwitchCheckChecked">
      <input v-if="todo.done" @change="updateTodo(String(todo.id)!, !todo.done)" class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked>
    </div>
    <button class="btn btn-secondary col-sm-1" @click="deleteTodo(String(todo.id)!)">Delete</button>
  </div>
</template>

  <script lang="ts">
    import apiMethods from "../utils/apiMethods";
    import {IForm} from "../types/form"
    export default {
      emits: ["delete", "update"],
      props: {
        todos: {
          type: Array<IForm>,
          required: true,
        },
      },
      methods: {
            async deleteTodo(id: string) {
                await apiMethods.removeTodo(id).then(() => this.$emit('delete'))
            },
            async updateTodo(id: string, done: boolean) {
                await apiMethods.updateTodo({id, done}).then(() => this.$emit('update'))
            }
        },
    }
  </script>