<script lang="ts">
import List from './components/List.vue'
import ToDoFormVue from './components/ToDoForm.vue'
import { IForm } from './types/form';
import apiMethods from './utils/apiMethods';
export default {
  data() {
    return {
      todos: [],
    }
  },
  components: {
      List,
      ToDoFormVue,
    },
    methods: {
      async getList() { const res = await apiMethods.getTodos()
        this.todos = res; }
    },
    }
</script>

<template>
  <div class="container">
    <ToDoFormVue @push="getList()" />
    <List :todos="todos" @vnode-before-mount="getList()" @delete="getList()" />
  </div>
</template>

<style lang="sass">
  @import "./assets/sass/main.sass"
  
</style>
