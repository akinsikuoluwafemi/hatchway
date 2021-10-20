import React, {useState} from 'react'
import TextField from '@mui/material/TextField';
import { Divider } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';


import {  AccordionSection, AccordionItem, AccordionImageWrapper, AccordionImage, AccordionTextContainer, AccordionTextWrapper, CollapseWrapper, StudentTag, StudentTagRow, ActionIcon } from './CollapseBoxStyles';
import { Grades, Student, Tags } from '../../state'
import {  useActions } from '../../hooks/useActions';

interface CollapseBoxListItemProps {
  student: Student
}

const  CollapseBoxListItem: React.FC<CollapseBoxListItemProps> = ({student}) =>  {
  
  const {createTag} = useActions()

  const [selected, setSelected] = useState(false);
  const [tagValue, setTagValue] = useState('');


  const onHandleTagChange = (e: { target: { value: string }; }) => {
    const { value } = e.target;
    setTagValue(value)
  }

  // mapping out the tags
  const renderTags = (arr: Tags) => {
    return arr.map((tag: string) => (
        <StudentTag key={tag}>{tag}</StudentTag>
    ))
  }

  // pushing new tag value into the tags array
  const CreateTags = (arr: any, tag: string) => {
    // if user wants to add the same tag twice, alert the user.
    if(arr.includes(tag.toLocaleLowerCase())) return alert('tags cannot be the same')
    return arr.unshift(tag)
}



  // changing the value of selected
  const handleClick = () => {
    setSelected(prev => !prev)
  }

  // mapping out the test scores
  const renderGrades = (arr: Grades) => {
    return arr.map((item: string, i: number) => {
      return (
        <p key={i}>Test {i + 1}: {item}%</p>
      )
    })
  }

  // getting the average test score
  const getAverage = (arr: Grades) => {
    return arr.reduce((item: number, acc: any) => {
      return (item + parseInt(acc) / arr.length)
    }, 0);
  }

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    CreateTags(student.tags, tagValue)
    // createTag(tagValue)
    setTagValue('');
  }


  return (
      <AccordionSection>

     <AccordionItem  >

          <AccordionImageWrapper>
            <AccordionImage img={student.pic} />
            
              </AccordionImageWrapper>
          
                <AccordionTextContainer>
                  <AccordionTextWrapper>
                    <h1>{student.firstName} {student.lastName}</h1>
                    <div className="details-wrapper" >
                      <p>Email: { student.email}</p>
                      <p>Company: { student.company}</p>
                      <p>Skill: { student.skill}</p>
                    <p>Average: {getAverage(student.grades).toFixed(2)}%</p>
                  </div>
            

                    {selected ? (
                      <CollapseWrapper active={selected}>
                          {renderGrades(student.grades)}
                      </CollapseWrapper>    
                    ): (
                        <CollapseWrapper >
                        {renderGrades(student.grades)}
                        </CollapseWrapper>
                    )}

                     
                  <StudentTagRow>
                      {renderTags(student.tags)}
                  </StudentTagRow>
            
                    
                  <form onSubmit={onSubmit}>
                    <TextField type="text"  name="name" value={tagValue} onChange={onHandleTagChange} style={{marginLeft: '1rem'}}  id="standard-basic" label="Add a tag" variant="standard" />
                  </form>
                      
                    
                  </AccordionTextWrapper>
            
              </AccordionTextContainer>
          <ActionIcon onClick={handleClick}> {selected ? (<MinusOutlined />) : (<PlusOutlined />)} </ActionIcon>
        
        </AccordionItem>
      <Divider />
      </AccordionSection>
      
  )
}

export default CollapseBoxListItem;