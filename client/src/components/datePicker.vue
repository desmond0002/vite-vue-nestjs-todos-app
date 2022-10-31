<template>
  <Datepicker v-model="date">
      <template #day="{ day, date }">
          <template v-if="day === tomorrow">
            <img class="slot-icon" src="/logo.png"/>
          </template>
          <template v-else>
            {{ day }}
          </template>
      </template>
  </Datepicker>
</template>

<script lang="ts">
import { ref } from 'vue';
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
export default {
  setup() {
      const date = ref(new Date());
      const tomorrow = ref(new Date().getDate() + 1);
      
      return {
          date,
          tomorrow,
      }
  },
  components: {
    Datepicker
  },
}
</script>

<style>
    .slot-icon {
        height: 20px;
        width: auto;
    }
</style>
