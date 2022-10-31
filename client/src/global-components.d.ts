import DatePicker from './components/datePicker.vue'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    DatePicker: typeof DatePicker,
  }
}