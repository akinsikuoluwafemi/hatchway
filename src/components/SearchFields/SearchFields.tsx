import React from 'react'
import TextField from '@mui/material/TextField';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';



export default function SearchFields() {
  
  const {setStudentTagName, setStudentsName } = useActions();

  const onHandleStudentsName = (e: { target: { value: string }; }) => {
    const { value } = e.target;

    setStudentsName(value)

  }

  const onHandleTagName = (e: { target: { value: string }; }) => {
    const { value } = e.target;

    setStudentTagName(value)

  }

  const searchFields = useTypedSelector(({students: {studentName, studentTagName}}) => {
    return {
      studentName,
      studentTagName
    };
  })


  const { studentName, studentTagName } = searchFields;
  


  
  return (
    <div style={{paddingTop: '0rem', paddingBottom: '1rem', paddingLeft: '1rem', paddingRight: '1rem'}}>
        <TextField name="name" value={studentName} onChange={onHandleStudentsName} style={{width: '100%'}} id="standard-basic" label="Search by name" variant="standard" />
        <TextField name="tagName" value={studentTagName} onChange={onHandleTagName} style={{width: '100%'}} id="standard-basic" label="Search by Tag" variant="standard" />
    </div>
  )
}
