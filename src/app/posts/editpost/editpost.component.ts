import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/models/posts.model';
import { AppState } from 'src/app/state/app.state';
import { updatePost } from '../posts-list/state/post.actions';
import { getPostById } from '../posts-list/state/post.selector';

@Component({
  selector: 'app-editpost',
  templateUrl: './editpost.component.html',
  styleUrls: ['./editpost.component.scss']
})
export class EditpostComponent implements OnInit, OnDestroy {
  post: Post
  postForm: FormGroup
  postSub: Subscription
  constructor(private route: ActivatedRoute, private store: Store<AppState>, private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id')
      this.postSub = this.store.select(getPostById, { id }).subscribe(
        data => {
          this.post = data;
          this.createForm()
        }
      )
    })
  }

  onSubmit() {
    if (!this.postForm.valid) {
      return
    }
    const title = this.postForm.value.title;
    const description = this.postForm.value.description;
    const post: Post = {
      id: this.post.id,
      title,
      description,
    }
    //dispatch the action
    this.store.dispatch(updatePost({ post }));
    this.router.navigate(['posts'])
  }

  createForm() {
    this.postForm = new FormGroup({
      title: new FormControl(this.post.title, [Validators.required, Validators.minLength(6)]),
      description: new FormControl(this.post.description, [Validators.required, Validators.minLength(10)])
    })
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

  ngOnDestroy() {
    if (this.postSub) {
      this.postSub.unsubscribe();
    }
  }
}
