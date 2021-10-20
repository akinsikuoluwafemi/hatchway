import React, {useEffect, Suspense, lazy} from 'react';
import SearchFields from '../components/SearchFields/SearchFields';
import { Card } from "antd";
import CollapseBox from '../components/CollapseBox/CollapseBox';
import { useActions } from '../hooks/useActions';
import {useTypedSelector } from '../hooks/useTypedSelector';


import './Home.css';

export default function Home() {
  
  const { fetchStudentsAsync } = useActions();

  



  // const students = useTypedSelector(({ students: {data: {students}} }) => {
  //   return students;
  // })

  const students = useTypedSelector(({ students: {data: {students}} }) => {
    return students;
  })

  const loading = useTypedSelector(({students: {loading}}) => {
    return  loading
  })
  

  useEffect(() => {
    fetchStudentsAsync();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <Card style={{ margin: "2rem", padding: "0", borderRadius: ".3rem" }}>
      <SearchFields />

      {loading ? <p>Loading...</p> : <CollapseBox students={students} />}


    </Card>
  );
}
