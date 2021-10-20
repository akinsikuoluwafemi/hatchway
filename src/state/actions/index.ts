import { ActionType } from '../action-types';
import { Student } from '../student';

export interface FetchStudentsAction {
  type: ActionType.FETCH_STUDENTS
}

export interface FetchStudentsSuccessAction {
  type: ActionType.FETCH_STUDENTS_SUCCESS,
  payload: Student[];
}

export interface FetchStudentsErrorAction {
  type: ActionType.FETCH_STUDENTS_ERROR,
  payload: string | null;
}

export interface SetStudentsNameQueryAction {
  type: ActionType.SET_STUDENT_NAME_QUERY,
  payload: string;
}

export interface SetTagNameQueryAction {
  type: ActionType.SET_TAG_NAME_QUERY,
  payload: string;
}

export interface CreateTagAction {
  type: ActionType.CREATE_TAGS,
  payload: string;
}

export type Action =
  | FetchStudentsAction
  | FetchStudentsSuccessAction
  | FetchStudentsErrorAction
  | SetStudentsNameQueryAction
  | SetTagNameQueryAction
  | CreateTagAction

