import { combineReducers } from 'redux';
import { reducer as questions } from './questions';

export const reducer = combineReducers({
	questions
});
