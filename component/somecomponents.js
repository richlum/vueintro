const componentA = {
  props: ['todo'],
  template: '<li>{{todo.text}}</li>'
}

const componentB = {
  props: ['todo'],
  template: '<li>{{todo.text}}</li>'
}

const componentC = {
  props: ['todo'],
  template: '<li>{{todo.text}}</li>'
}



var app = new Vue({
  el: '#app',
  data: {
    mylist: [
      {id:0,text:'learn javascript'},
      {id:1,text:'learn vue'},
      {id:2,text:'makesomething'}
    ]
  },
  components:{
    'component-a':ComponentA,
    'component-b':ComponentB,
    'component-c':ComponentC
  }
});

export {app,componentA,componentB,componentC}

