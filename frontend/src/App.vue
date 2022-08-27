<template>
  <div>
    <todo-list></todo-list>
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue'

export default {
  components: {
    'todo-list': TodoList,
  },
  data () {
    return {

    }
  }
}
</script>

<style>

</style>
