import React from 'react';
import { CollapsibleContainer } from './CollapseBoxStyles';
import { useTypedSelector } from '../../hooks/useTypedSelector';

import CollapseBoxListItem from './CollapseBoxListItem';
import { Student } from '../../state';




interface CollapseBoxProps {
  students: Student[]
}


const CollapseBox: React.FC<CollapseBoxProps> = ({students}) => {
  
    // change students array and add a tags array to hold tags
    students?.forEach(function (element) {
    return element.tags = ["yes", "no"];
  });



  const studentNameQuery = useTypedSelector(({students: {studentName}}) => {
    return  studentName
  })

  const tagNameQuery = useTypedSelector(({students: {studentTagName}}) => {
    return  studentTagName
  })


  // const renderedStudents = students?.map(student => <CollapseBoxListItem key={student.id} student={student}/>)


  const renderedStudents = students?.filter((val) => {

    if (studentNameQuery === "") {
      return val
      // eslint-disable-next-line no-mixed-operators
    } else if (val.firstName && val.firstName.toLowerCase().includes(studentNameQuery.toLowerCase()) || val.lastName && val.lastName.toLowerCase().includes(studentNameQuery.toLowerCase())) {
      console.log(val)
      return val;
    }
  })
    .map((studentVal, key) => {
      return (
            <CollapseBoxListItem key={studentVal.id} student={studentVal}/>
          )
    })
  

  return (
    <CollapsibleContainer>
        
        {renderedStudents}

    </CollapsibleContainer>
  )
}


export default CollapseBox;