import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddpostComponent } from './posts/addpost/addpost.component';
import { EditpostComponent } from './posts/editpost/editpost.component';
import { PostsListComponent } from './posts/posts-list/posts-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: "counter", loadChildren: () => import('./counter/counter.module').then(m => m.CounterModule) },
  {
    path: 'posts', component: PostsListComponent, children: [
      { path: 'add', component: AddpostComponent },
      { path: 'edit/:id', component: EditpostComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
