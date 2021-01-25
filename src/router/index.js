//配置路由相关的信息
import VueRouter from 'vue-router'
import Vue from 'vue'

const Home = () =>
    import ('../components/Home.vue')
const About = () =>
    import ('../components/About.vue')
const User = () =>
    import ('../components/User.vue')
const HomeNews = () =>
    import ('../components/HomeNews.vue')
const HomeMessage = () =>
    import ('../components/HomeMessage.vue')
const Profile = () =>
    import ('../components/Profile.vue')

Vue.use(VueRouter)

//创建VueRouter对象
const routes = [{
        path: '',
        redirect: '/home',
        //meta元数据，描述数据的数据
        meta: {
            title: '首页'
        }
        //路由懒加载，需要用到的时候再进行加载，避免文件过大而加载时间过长
    },
    {
        path: '/home',
        component: Home,
        meta: {
            title: '首页'
        },
        //子路由
        children: [
            // {
            //     path: '',
            //     redirect: 'news',
            // },
            {
                path: 'news',
                component: HomeNews
            }, {
                path: 'message',
                component: HomeMessage
            }
        ]
    },
    {
        path: '/about',
        component: About,
        meta: {
            title: '关于'
        },

    }, {
        path: '/profile',
        component: Profile,
        meta: {
            title: '档案'
        },
    },
    {
        path: '/user/:userId',
        component: User,
        meta: {
            title: '用户'
        },
    }
]
const router = new VueRouter({
    //配置路由和组件之间的应用关系
    routes,
    mode: 'history'
})

// 前置钩子(回调)
router.beforeEach((to, from, next) => {
    //从from跳到to
    document.title = to.matched[0].meta.title
    next()
})

//将router对象传入Vue实例中
export default router