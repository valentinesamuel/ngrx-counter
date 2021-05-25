import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AddpostComponent } from './addpost/addpost.component';
import { EditpostComponent } from './editpost/editpost.component';
import { PostsListComponent } from './posts-list/posts-list.component';

const route: Routes = [
      {
            path: '', component: PostsListComponent, children: [
                  { path: 'add', component: AddpostComponent },
                  { path: 'edit/:id', component: EditpostComponent }
            ]
      }
]

@NgModule({
      imports: [RouterModule.forChild(route), ReactiveFormsModule, CommonModule],
      exports: [],
      declarations: [PostsListComponent,
            AddpostComponent,
            EditpostComponent,],
      providers: [],
})
export class PostModule { }
