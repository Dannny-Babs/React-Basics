import PropTypes from 'prop-types'

function Student(props) {
    return(
        <div className="student">
            <p>Student Name: {props.name}</p>
            <p>Student Age: {props.age}</p>      
            <p>Student Status: {props.isStudent ? "Yes" : "No"}</p>      
        </div>            
    );    
}
Student.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    isStudent: PropTypes.bool
}
Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false
}
export default Student