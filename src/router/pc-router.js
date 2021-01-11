import Login from "@/components/common/login_Register_Reset/login/Login";
import AdminMeau from "@/components/computerUI/userConsole/layout/AdminMeau";
import Music from "@/components/computerUI/userConsole/components/music/Music";
import UserCenter from "@/components/computerUI/userConsole/components/userCenter/UserCenter";
import Video from "@/components/computerUI/userConsole/components/video/Video";
import Images from "@/components/computerUI/userConsole/components/images/Images";
import MyFile from "@/components/computerUI/userConsole/components/file/MyFile";
import WriteArticle from "@/components/computerUI/userConsole/components/article/draft/WriteArticle";
import Theme from "@/components/computerUI/userConsole/components/settings/theme/Theme";
import Category from "@/components/computerUI/userConsole/components/article/category/Category";
import ArticleTag from "@/components/computerUI/userConsole/components/article/tag/ArticleTag";
import AccountManage from "@/components/computerUI/userConsole/components/user/account/AccountManage";
import PowerControll from "@/components/computerUI/userConsole/components/user/power/PowerControll";
import UserStatistical from "@/components/computerUI/userConsole/components/statistical/user/UserStatistical";
import ArticleStatistical from "@/components/computerUI/userConsole/components/statistical/article/ArticleStatistical";
import UserComment from "@/components/computerUI/userConsole/components/settings/user/UserComment";
import ShowArticle from "@/components/computerUI/userConsole/components/article/all/show/ShowArticle";
import Index from "@/components/computerUI/visitor/index/Index";


/**
 * pc端的路由信息
 */
export default [
    {
        // 默认pc端登录
        path: '/login',
        redirect: '/pc/login'
    },
    {
        path: '/pc/login',
        name: '登录页面',
        component: Login
    },
    {
        path: '/logout',
        redirect: '/pc/logout'
    },
    {
        path: '/pc/logout',
        component: Index
    },
    {
        path: '/pc/admin',
        name: 'pc端的管理界面',
        component: AdminMeau,
        children: [
            {
                path: 'allDataView',
                component: UserCenter
            }, {
                path: 'media/music',
                component: Music
            }, {
                path: 'media/video',
                component: Video
            }, {
                path: 'media/images',
                component: Images
            }, {
                path: 'media/file',
                component: MyFile
            }, {
                path: 'article/manage/all',
                // component: AllArticle
                component: ShowArticle
            }, {
                path: 'article/manage',
                component: AdminMeau,
            }, {
                path: 'article/manage/add',
                component: WriteArticle
            }, {
                path: 'article/manage/category',
                component: Category
            }, {
                path: 'article/manage/tags',
                component: ArticleTag
            }, {
                path: 'user/manage/account',
                component: AccountManage
            }, {
                path: 'user/manage/power',
                component: PowerControll
            }, {
                path: 'statistical/user',
                component: UserStatistical
            }, {
                path: 'statistical/article',
                component: ArticleStatistical
            }, {
                path: 'settings/theme',
                component: Theme
            }, {
                path: 'settings/user/comment',
                component: UserComment
            }
        ]
    },
]

