import Init from '../components/Init';
import Dashboard from '../components/Dashboard';
import AddView from '../components/AddView';
import TaskView from '../components/TaskView';
import User from '../components/User';
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import VueRouter from 'vue-router';
import Firebase from 'firebase';

/* eslint-disable */

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

router.beforeEach((to, from, next) => {
    const currentUser = Firebase.auth().currentUser;
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

    // create a flag that resets to false upon hitting midnight (or, later, whatever
    // time the user designates as a new day.)

    // if(requiresAuth && !currentUser) next('/login');
    // else if(!requiresAuth && currentUser) next('/dashboard');
    // else next();
    next();
});

export default router;
