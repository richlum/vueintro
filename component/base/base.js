
//this is a global registration of component
Vue.component('button-counter',{
    // must be function for private copy of counter in each instance
    data: function(){
        return {
            count: 0
        };
    },
    template: '<button @click="count++">You clicked me {{ count }} time.</button>'
});

const base = new Vue({
    el: '#app',
    template: '<div><button-counter></button-counter><button-counter></button-counter></div>'
});

export default base;