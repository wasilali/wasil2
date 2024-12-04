<script setup>
import { ref } from 'vue'

const props = defineProps({
  todos: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['toggle-todo', 'delete-todo', 'edit-todo'])

const editingId = ref(null)
const editText = ref('')

const startEditing = (todo) => {
  editingId.value = todo.id
  editText.value = todo.text
}

const finishEditing = (todo) => {
  if (editText.value.trim() && editText.value !== todo.text) {
    emit('edit-todo', todo.id, editText.value.trim())
  }
  editingId.value = null
}

const cancelEditing = () => {
  editingId.value = null
}

// Custom directive for auto-focus
const vFocus = {
  mounted: (el) => el.focus()
}
</script>

<template>
  <TransitionGroup name="list" tag="ul" class="todo-list">
    <li v-for="todo in todos" :key="todo.id" class="todo-item">
      <div class="todo-content" v-if="!editingId || editingId !== todo.id">
        <input
          type="checkbox"
          :checked="todo.completed"
          @change="$emit('toggle-todo', todo.id)"
        >
        <span 
          :class="{ completed: todo.completed }"
          @dblclick="startEditing(todo)"
        >
          {{ todo.text }}
        </span>
        <button @click="$emit('delete-todo', todo.id)" class="delete-btn">
          ×
        </button>
      </div>
      
      <input
        v-else
        v-focus
        type="text"
        v-model="editText"
        @blur="finishEditing(todo)"
        @keyup.enter="finishEditing(todo)"
        @keyup.esc="cancelEditing"
        class="edit-input"
      >
    </li>
  </TransitionGroup>
</template>

