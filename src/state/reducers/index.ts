// // import { combineReducers} from 'redux';
// // import studentsReducer from './studentsReducer';
// // import storage from "redux-persist/lib/storage";



// // const reducers = combineReducers({
// //   students: studentsReducer
// // });



// // export default reducers;

// // // makes react-redux know about our store
// // export type RootState = ReturnType<typeof reducers>


// import { combineReducers} from 'redux';
// import studentsReducer from './studentsReducer';
// import storage from "redux-persist/lib/storage";


// const persistConfig = {
//     key: 'root',
//     storage,
//     whitelist: ['studentsReducer']
// }



// const reducers = combineReducers({
//   students: studentsReducer
// });



// export default reducers;

// // makes react-redux know about our store
// export type RootState = ReturnType<typeof reducers>


// import { combineReducers} from 'redux';
// import studentsReducer from './studentsReducer';
// import storage from "redux-persist/lib/storage";



// const reducers = combineReducers({
//   students: studentsReducer
// });



// export default reducers;

// // makes react-redux know about our store
// export type RootState = ReturnType<typeof reducers>


import { combineReducers} from 'redux';
import studentsReducer from './studentsReducer';
import storage from "redux-persist/lib/storage";
import { persistReducer } from 'redux-persist';


export const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['studentsReducer']
}



const reducers = combineReducers({
  students: studentsReducer
});



export default persistReducer(persistConfig, reducers);

// makes react-redux know about our store
export type RootState = ReturnType<typeof reducers>