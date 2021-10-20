
export interface Grades{
  [x: string]: any;
}

export interface Tags{
  [x: string]: any;
}

export interface Student{
      id: string;
      city: string;
      company: string;
      email: string;
      firstName: string;
      grades: Grades;
      lastName: string;
      pic : string;
      skill: string;
      tags: Tags;
}