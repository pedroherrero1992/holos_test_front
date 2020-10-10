import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MutantComponent } from './components/mutant/mutant.component';
import { UserComponent } from "./components/user/user.component";


const routes: Routes = [
  { path: 'user', component: UserComponent},
  { path: 'mutant', component: MutantComponent},
 // { path: 'admin', component: AdminComponent},

  { path: '', redirectTo: '/user', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
