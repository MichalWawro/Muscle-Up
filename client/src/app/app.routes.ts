import { Routes } from '@angular/router';
import { Profile } from './components/main/profile/profile';
import { Home } from './components/main/home/home';
import { About } from './components/main/about/about';
import { AnimationGuard } from './services/animation-guard/animation-guard';


export const routes: Routes = [
    {
        path: 'profile',
        component: Profile,
        canDeactivate: [AnimationGuard]
    },
    {
        path: 'home',
        component: Home,
        canDeactivate: [AnimationGuard]
    },
    {
        path: 'about',
        component: About,
        canDeactivate: [AnimationGuard]
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
