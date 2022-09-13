
new Vue({
  el: '#app',
  //vuetify: new Vuetify(),
  data() {
    return {
      isDark: true,
      show: true,
      todoTitle: '',
      todos: []
    }
  },
  methods: {
    addTodo() {
      const title = this.todoTitle.trim()
      if (!title) {
        return
      }
      fetch('/api/todo', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title })
      }).then(res => res.json())
        .then(({ todo }) => {
          console.log(todo)
          this.todos.push(todo)
          this.todoTitle = ''
        })
        .catch(e => {
          console.log(e)
        })
      // this.todos.push({
      //   title: title,
      //   id: Math.random(),
      //   done: false,
      //   date: new Date()
      // })

    },
    removeTodo(id) {
      this.todos = this.todos.filter(t => t.id !== id)
    }
  },
  filters: {
    capitalize(value) {
      return value.toString().charAt(0).toUpperCase() + value.slice(1)
    },
    date(value, withTime) {
      const options = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
      }
      if (withTime) {
        options.hour = '2-digit'
        options.minute = '2-digit'
        options.second = '2-digit'
      }
      return new Intl.DateTimeFormat('ua-UA', options).format(new Date(value))
    }
  }
})