import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterState } from "./counter.state";

export const counterStateName = 'counter'
const getCounterState = createFeatureSelector<CounterState>(counterStateName);

export const getCounter = createSelector(getCounterState, state => {
      return state.counter;
})

export const getChannelName = createSelector(getCounterState, state => {
      return state.channelName;
})