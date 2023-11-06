import routesConfig from '~/config/routes'

import { HeaderOnly } from '~/Layout';

import Home from '~/pages/Home'
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';

const publicRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.profile, component: Profile },
    { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
    // { path: routesConfig.search, component: Search, layout: null }
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }