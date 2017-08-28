import Repositories from '../pages/repositories/repositories.vue';
import User from '../pages/user/user.vue';

export default [{
        path: '/repositories',
        name: 'repositories',
        component: Repositories
    },
    {
        path: '/user',
        name: 'user',
        component: User
    },
    {
        path: '/',
        redirect: '/repositories'
    },
    {
        path: '/*',
        redirect: '/repositories'
    }
];