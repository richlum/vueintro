Vue.component('todo-item', {
  template: '<li>This is a todo</li>'
})

var app = new Vue({
  el: '#app',
  data: {
    message: 'component app'
  }
})

export default app

