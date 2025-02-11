export function createCourse(course){
    return { type: "CREATE_COURSE", course }
}

export function getCourse(){
    return { type: "GET_COURSE" }
}