import Counter from "./Counter.jsx";
import UserGreeting from "./basics/UserGreeting.jsx";

function App() {


  return (
    <>
      <UserGreeting isLoggedIn={true} username="mrTalo" />
      <Counter/>   
  
    </>
  );
}

export default App
