import Button from './Button/button';
import profilePic from './assets/Android App Icon - Squircle.png'

function Card() {
    return (
        <div className="card">
            <img src={profilePic} alt="app logo" className= "card-image"/>
            <h2 className ="card-title"> Sortee</h2>
            <p className= "card-text"> This app is currently in research stage coming soon.  </p>
            <Button/>
           
        </div>
    );
    
}

export default Card