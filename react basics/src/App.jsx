import MyComponent from "./MyComponents.jsx";
import UserGreeting from "./basics/UserGreeting.jsx";

function App() {


  return (
    <>
      <UserGreeting isLoggedIn={true} username="mrTalo" />
      <MyComponent/>   
  
    </>
  );
}

export default App
