import { Routes } from '@angular/router';
import { ElectionListComponent } from './UI/election-list/election-list.component';
import { ElectionComponent } from './components/election/election.component';
import { ElectionCreatorComponent } from './components/election-creator/election-creator.component';
import { ProfileComponent } from './components/profile/profile.component';
import { authGuard } from './guards/auth.guard';
import { keepAwayGuard } from './guards/keep-away.guard';

export const routes: Routes = [
    { path: 'list', component: ElectionListComponent,  canActivate: [authGuard] },
    { path: 'create', component: ElectionCreatorComponent, canActivate: [authGuard]},
    { path: 'election/:id', component:  ElectionComponent, canActivate: [authGuard]},
    { path: '**', redirectTo: 'list', pathMatch:'full'}
];
