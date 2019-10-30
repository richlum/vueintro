Vue.component('tab-home',{
  template:'<div>Home Component</div>'
})
Vue.component('tab-posts',{
  template:'<div>Posts Component</div>'
})
Vue.component('tab-archive',{
  template:'<div>Archive Comonent</div>'
})
Vue.component('tab-red',{
  template:'<div>Red Component</div>'
})
Vue.component('tab-green',{
  template:'<div>Green Component</div>'
})
Vue.component('tab-blue',{
  template:'<div>Blue Component</div>'
})

new Vue({
  el: '#dynamic-component-demo',
  data:{
    currentTab:'Home',
    tabs:['Home','Posts','Archive','RED','GREEN','BLUE']
  },
  computed:{
    currentTabComponent: function(){
      return 'tab-' + this.currentTab.toLowerCase()
    }
  }

})

