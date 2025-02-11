import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as courseActions from '../../redux/action/courseActions'

export default function CoursePage(){
    const dispatch = useDispatch();
    const courses = useSelector(state => state.courseReducer);
    const [course,setCourse] = useState({ title: ''})


    const handleChange =(e)=>{
        setCourse({ ...course,title: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(courseActions.createCourse(course))
    }
        return(
            <form onSubmit={handleSubmit}>
            <h2>Courses</h2>
            <h3>Add Course</h3>
            <input type='text' onChange={handleChange} value={course.title} />
            <input type="submit" value='submit' />
            {courses.map( course => <div key={course.title}>{course.title}</div>)}
            </form>
            ) }
