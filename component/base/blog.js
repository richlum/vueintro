
Vue.component('blog-post',{
    props: ['title'],
    template: '<h3>{{ title }}</h3>'
});

const posts = `
<div>
<blog-post 
    v-for="post in posts"
    :key="post.id"
    :title="post.title"
></blog-post>
</div>
`;

const blog = new Vue({
    el:'#app',
    data:{
        posts: [
            {id:1,title:"My journey with Vue"},
            {id:2,title:"Blogging with Vue"},
            {id:3,title:"Vue is fun"}
        ]
    },
    template: posts
});

