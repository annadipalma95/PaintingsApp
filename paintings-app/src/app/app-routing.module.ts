import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PaintingsComponent } from './paintings/paintings.component';

const routes: Routes = [
   {
     path: '',
     component: HomeComponent
   },
   {
     path: 'paintings',
     component: PaintingsComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
