import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AfricaComponent } from './pages/africa/africa.component';
import { WorldComponent } from './pages/world/world.component';
import { AsiaComponent } from './pages/asia/asia.component';
import { AmericasComponent } from './pages/americas/americas.component';
import { EuropeComponent } from './pages/europe/europe.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AuthGuard } from './service/auth-guard.service';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
    { path: 'africa', component: AfricaComponent },
    { path: 'world', component: WorldComponent },
    { path: 'asia', component: AsiaComponent },
    { path: 'americas', component: AmericasComponent },
    { path: 'europe', component: EuropeComponent }
];
