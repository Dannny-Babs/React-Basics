import Student from './student.jsx';

function UserGreeting(props) {
    const welcomeMessage = <>
        <h2 className='welcome-message'>Welcome {props.username}</h2>
        <Student />
    </>


    if (props.isLoggedIn) {
        return welcomeMessage;
    }
    else {
        return <h2>Please log in to continue</h2>
    }
}

export default UserGreeting