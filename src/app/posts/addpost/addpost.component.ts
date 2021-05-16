import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/models/posts.model';
import { AppState } from 'src/app/state/app.state';
import { addPost } from '../posts-list/state/post.actions';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.scss']
})

export class AddpostComponent implements OnInit {
  postForm: FormGroup;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      description: new FormControl(null, [Validators.required, Validators.minLength(10)]),
    })
  }

  onAddPosts() {
    if (!this.postForm.valid) {
      return;
    }
    const post: Post = {
      title: this.postForm.value.title,
      description: this.postForm.value.description,
    }
    this.store.dispatch(addPost({ post }))
  }

  showTitleErrors() {
    const titleForm = this.postForm.get('title');
    if (titleForm.touched && !titleForm.valid) {
      if (titleForm.errors.required) {
        return 'The title is required';
      }
      if (titleForm.errors.minlength) {
        return "You must enter not lesst than 6 characters";
      }
    }
  }

  showDescriptionErrors() {
    const descriptionForm = this.postForm.get('description')
    if (descriptionForm.touched && !descriptionForm.valid) {
      if (descriptionForm.errors.required) {
        return "Descriptin is required";
      }
      if (descriptionForm.errors.minlength) {
        return "Description should have a minimum of 20 charaacters length "
      }
    }
  }

}
