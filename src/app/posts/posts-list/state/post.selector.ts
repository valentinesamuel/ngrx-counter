import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PostsState } from "./post.state";

export const postStateName = 'posts'
const getPostsState = createFeatureSelector<PostsState>(postStateName);

export const getPosts = createSelector(getPostsState, (state) => { return state.posts })

export const getPostById = createSelector(getPostsState, (state, props) => {
      return state.posts.find(post => post.id === props.id)
})