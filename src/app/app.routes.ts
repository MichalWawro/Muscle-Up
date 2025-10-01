import { Routes } from '@angular/router';
import { Home } from './components/main/home/home';
import { About } from './components/main/about/about';

export const routes: Routes = [
    {
        path:'home',
        component: Home
    },
    {
        path:'about',
        component: About
    }
];
