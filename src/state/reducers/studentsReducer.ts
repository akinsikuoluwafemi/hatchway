import { database } from 'faker';
import { isTemplateSpan } from 'typescript';
import { ActionType } from '../action-types';
import { Action } from '../actions';
import { Student } from '../student';


export interface StudentsState {
  loading: boolean;
  error: string | null;
  data: Student[] | any;
  dataCopy: Student[] | any;
  studentName: string;
  studentTagName: string;
}


const initialState: StudentsState = {
  loading: false,
  error: null,
  data: [],
  dataCopy: [],
  studentName: '',
  studentTagName: ''
}

const reducer = (state: StudentsState = initialState, action: Action): StudentsState => {
  switch (action.type) {
    case ActionType.FETCH_STUDENTS:
      return { ...state, loading: true }
    
    case ActionType.FETCH_STUDENTS_SUCCESS:
    console.log(action.payload)  
      return {
        ...state,
        loading: false,
        data: action.payload,
        dataCopy: action.payload
        // data: action.payload.map(data => [{ ...data, tags: ['yes'] }])
      }
    case ActionType.CREATE_TAGS:
      return {
        ...state,
        // data: state.data.map((item: any) => [{ ...item, tags: [action.payload, ...item.tags] }] )
        // dataCopy: state.dataCopy.students.map((item: any, i: number) => [{...item, tags: i ?  [action.payload, ...item.tags] : [...item.tags] }])
        // dataCopy: state.dataCopy.students?.forEach((item: any) =>  item.tags = [...item.tags, action.payload])


      }
    
    case ActionType.FETCH_STUDENTS_ERROR:
      return { ...state, loading: false, error: action.payload }
    
    case ActionType.SET_STUDENT_NAME_QUERY:
      return { ...state, studentName: action.payload }
    
    case ActionType.SET_TAG_NAME_QUERY:
      return {...state, studentTagName: action.payload}
    
    default:
      return state;
  }
}

export default reducer;