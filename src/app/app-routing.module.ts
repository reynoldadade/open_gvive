import { VotersComponent } from './voters/voters.component';
import { PassportComponent } from './passport/passport.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'passport',
    component: PassportComponent
  },
  {
    path: 'voters',
    component: VotersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
