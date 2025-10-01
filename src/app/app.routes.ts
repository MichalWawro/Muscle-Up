import { Routes } from '@angular/router';
import { Home } from './components/main/home/home';
import { About } from './components/main/about/about';
import { AnimationGuard } from './services/animation-guard/animation-guard';


export const routes: Routes = [
    {
        path:'home',
        component: Home,
        canDeactivate: [AnimationGuard]
    },
    {
        path:'about',
        component: About,
        canDeactivate: [AnimationGuard]
    }
];
