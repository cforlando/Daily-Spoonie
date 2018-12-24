import Init from '../components/Init';
import Dashboard from '../components/Dashboard';
import AddView from '../components/AddView';
import TaskView from '../components/TaskView';
import User from '../components/User';
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import VueRouter from 'vue-router';

const routes = [
    {
        path: '*',
        redirect: '/login'
    },
    { 
        path: '/', 
        component: Init 
    },
    { 
        path: '/login', 
        component: Login 
    },
    { 
        path: '/signup', 
        component: SignUp 
    },
    {
        path: '/user', 
        component: User,
        children: [
            { path: '/dashboard', component: Dashboard },
            { path: '/addview', component: AddView },
            { path: '/taskview', component: TaskView }
        ],
        meta: {
            requiresAuth: true
        }
    }
]

const router = new VueRouter({
    routes
})

export default router;
