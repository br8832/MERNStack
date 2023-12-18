function Student(name, studentid){
    marks=[13,24,124,1]
    let closure = function(student, id){
        if(name==student && id==studentid){
            return {
                marks: marks
            }
        }
        return {
            alert:"Wrong credentials"
        }

    }
    return closure
}

export default Student;