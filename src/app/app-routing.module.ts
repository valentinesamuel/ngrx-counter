import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/counter/counter.component';
import { HomeComponent } from './home/home.component';
import { AddpostComponent } from './posts/addpost/addpost.component';
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { HeaderComponent } from './shared/components/header/header.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'counter', component: CounterComponent },
  {
    path: 'posts', component: PostsListComponent, children: [
      { path: 'add', component: AddpostComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
