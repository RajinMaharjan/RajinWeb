import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './layouts/full/header/header.component';

const routes: Routes = [
  {
    path: '',
    component: HeaderComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      onSameUrlNavigation: 'reload',
      scrollOffset: [0, 20],
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
