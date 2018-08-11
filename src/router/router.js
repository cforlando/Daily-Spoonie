import Init from '../components/Init';
import VueRouter from 'vue-router';

const routes = [
    { path: '/', component: Init }
]

const router = new VueRouter({
    routes
})

export default router;

