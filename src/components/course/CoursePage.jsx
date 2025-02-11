import { Component } from "react";
import { connect } from "react-redux";
import * as courseActions from '../../redux/action/courseActions'
import { createAction } from "@reduxjs/toolkit";

class CoursePage extends Component{
        state={
            course: {
                title: ""
            }
           // this.handleChange = this.handleChange.bind(this); or change handlechange to arrow func handlechange = e =>
        }

    handleChange =(e)=>{
        const course = { ...this.state.course,title:e.target.value };
        this.setState({ course: course},() =>{
            console.log(this.state.course.title)
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createCourse(this.state.course);
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
            <h2>Courses</h2>
            <h3>Add Course</h3>
            <input type='text' onChange={this.handleChange} value={this.state.course.title} />
            <input type="submit" value='submit' />
            {this.props.courses.map( course => <div key={course.title}>{course.title}</div>)}
            </form>
            ) } }

    function mapStateToProps(state){
        return {
            courses: state.courseReducer
        }
    }

    function mapDispatchToProps(dispatch){
        return {
            createCourse : course => dispatch(createActions.createCourse(course))
        }
    }

export default connect(mapStateToProps,mapDispatchToProps)(CoursePage)