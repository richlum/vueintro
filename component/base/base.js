

Vue.component('button-counter',{
    data: function(){
        return {
            count: 0
        };
    },
    template: '<button @click="count++">You clicked me {{ count }} time.</button>'
});

const base = new Vue({
    el: '#app',
    template: '<button-counter></button-counter>'
});

export default base;