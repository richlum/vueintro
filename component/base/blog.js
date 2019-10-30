
Vue.component('blog-post',{
    props: ['title'],
    template: '<h3>{{ title }}</h3>'
});

const posts = `
<div>
<blog-post title="My journey with Vue"></blog-post>
<blog-post title="Blogging with Vue"></blog-post>
<blog-post title="Vue is fun"></blog-post>
</div>
`;

const blog = new Vue({
    el:'#app',
    template: posts
});

