<script setup>
import { ref, computed } from 'vue'
import TodoForm from './TodoForm.vue'
import TodoList from './TodoList.vue'

const todos = ref([])
const currentFilter = ref('All')
const filters = ['All', 'Active', 'Completed']

const filteredTodos = computed(() => {
  switch (currentFilter.value) {
    case 'Active':
      return todos.value.filter(todo => !todo.completed)
    case 'Completed':
      return todos.value.filter(todo => todo.completed)
    default:
      return todos.value
  }
})

const completedTodos = computed(() => {
  return todos.value.filter(todo => todo.completed).length
})

const addTodo = (text) => {
  todos.value.push({
    id: Date.now(),
    text,
    completed: false
  })
}

const toggleTodo = (id) => {
  const todo = todos.value.find(todo => todo.id === id)
  if (todo) todo.completed = !todo.completed
}

const deleteTodo = (id) => {
  todos.value = todos.value.filter(todo => todo.id !== id)
}

const editTodo = (id, newText) => {
  const todo = todos.value.find(todo => todo.id === id)
  if (todo) todo.text = newText
}

const clearCompleted = () => {
  todos.value = todos.value.filter(todo => !todo.completed)
}
</script>

<template>
  <div class="todo-container">
    <h1>Todo List</h1>
    
    <TodoForm @add-todo="addTodo" />
    
    <div class="todo-filters">
      <button 
        v-for="filter in filters" 
        :key="filter"
        :class="{ active: currentFilter === filter }"
        @click="currentFilter = filter"
      >
        {{ filter }}
      </button>
    </div>

    <TodoList 
      :todos="filteredTodos"
      @toggle-todo="toggleTodo"
      @delete-todo="deleteTodo"
      @edit-todo="editTodo"
    />

    <div class="todo-stats" v-if="todos.length">
      <p>{{ completedTodos }} / {{ todos.length }} completed</p>
      <button 
        v-if="completedTodos"
        @click="clearCompleted" 
        class="clear-btn"
      >
        Clear completed
      </button>
    </div>
  </div>
</template> 