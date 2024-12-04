<script setup>
import { ref } from 'vue'

const emit = defineEmits(['add-todo'])
const todoText = ref('')
const showError = ref(false)

const handleSubmit = () => {
  if (todoText.value.trim()) {
    emit('add-todo', todoText.value.trim())
    todoText.value = ''
    showError.value = false
  } else {
    showError.value = true
  }
}
</script>

<template>
  <form @submit.prevent="handleSubmit" class="todo-form">
    <input
      v-model="todoText"
      type="text"
      placeholder="What needs to be done?"
      :class="{ 'has-error': showError }"
    >
    <button type="submit">Add</button>
  </form>
</template>
