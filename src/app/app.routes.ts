import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AfricaComponent } from './pages/africa/africa.component';
import { WorldComponent } from './pages/world/world.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'africa', component: AfricaComponent },
    { path: 'world', component: WorldComponent },
];
