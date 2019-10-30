Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.id }} {{ todo.text }}</li>'
})

var app = new Vue({
  el: '#app',
  data: {
    message: 'component app',
    groceryList: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Other junk' }
    ]
  }
})

export default app

