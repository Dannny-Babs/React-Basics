import CarsComponent from "./MyComponents 2.jsx";
import MySecondComponent from "./MyComponents 2.jsx";
import UserGreeting from "./basics/UserGreeting.jsx";

function App() {


  return (
    <>
      <UserGreeting isLoggedIn={true} username="James" />
      
      <CarsComponent/> 
  
    </>
  );
}

export default App
