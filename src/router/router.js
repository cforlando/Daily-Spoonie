import Init from '../components/Init';
import Dashboard from '../components/Dashboard';
import AddView from '../components/AddView';
import TaskView from '../components/TaskView';
import User from '../components/User';
import VueRouter from 'vue-router';

const routes = [
    { path: '/', component: Init },
    { path: '/user', component: User,
        children: [
            { path: '/dashboard', component: Dashboard },
            { path: '/addview', component: AddView },
            { path: '/taskview', component: TaskView }
        ]
    }
]

const router = new VueRouter({
    routes
})

export default router;
