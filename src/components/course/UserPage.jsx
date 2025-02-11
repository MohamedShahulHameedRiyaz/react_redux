import { connect } from "react-redux"
import * as courseActions from '../../redux/action/courseActions'
import { useEffect } from "react";

const UserPage = (props) =>{
    useEffect(() =>{
        props.dispatch(courseActions.getCourse());
    },[props.dispatch])
    return (
        <>
        {props.courses.map( course => <div key={course}>{course}</div>)}
        </>
    )
}

function mapStateToProps(state){
    return {
        courses: state.courseReducer
    }
}

export default connect(mapStateToProps)(UserPage)