import axios from "axios";
import {Dispatch } from 'redux';
import { ActionType } from '../action-types';
import {  FetchStudentsAction, FetchStudentsErrorAction, FetchStudentsSuccessAction, SetStudentsNameQueryAction, SetTagNameQueryAction, CreateTagAction } from '../actions';
import { Student } from '../student';


/**
 *  Setting the searchqueryField
 */
export const setStudentsName = (value: string): SetStudentsNameQueryAction => {
  return {
    type: ActionType.SET_STUDENT_NAME_QUERY,
    payload: value
  }
}



export const setStudentTagName = (value: string): SetTagNameQueryAction => {
  return {
    type: ActionType.SET_TAG_NAME_QUERY,
    payload: value
  }
}


/**
 *  Fetching students from API
 */
 const fetchStudents = ():FetchStudentsAction => {
  return {
    type: ActionType.FETCH_STUDENTS
  }
}

const fetchStudentsError = (error: string | null): FetchStudentsErrorAction => {
  return {
    type: ActionType.FETCH_STUDENTS_ERROR,
    payload: error
  }
}

const fetchStudentSuccess = (data: Student[]):FetchStudentsSuccessAction => {
  return {
     type: ActionType.FETCH_STUDENTS_SUCCESS,
      payload: data
  }
}

export const fetchStudentsAsync = () => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchStudents());
    try {
      const { data } = await axios.get("https://api.hatchways.io/assessment/students");
      
      dispatch(fetchStudentSuccess(data));

    } catch (err: any) {
      dispatch(fetchStudentsError(err.message));
    }
  }
}

export const createTag = (value: string): CreateTagAction => {
  return {
    type: ActionType.CREATE_TAGS,
    payload: value
  }
}










