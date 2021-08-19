import "react-notifications-component/dist/theme.css";
import { store } from "react-notifications-component";
import "animate.css";
import { useState } from "react";

const Home = () => {
  const NotifyLimit = () => {
    store.addNotification({
      title: "Limit Alert",
      message: "Abdul Wasay Added a card",
      type: "success",
      container: "top-right",
      insert: "top",
      animationIn: ["animate__animated", "animate__fadeIn"],
      // animationOut: ["animate__animated", "animate__fadeOut"],

      dismiss: {
        duration: 3000,
      },
    });
  };

  const [count, setCount] = useState(0);
 
 
 

  {
    if (count > 25000) {
      NotifyLimit();
      console.log("what is hapenning")
    }
  }

return (
    <div>
      <h2>This is Home component</h2>
      <button onClick={() => setCount(count + 5000)}>Add to Cart</button>
      <div>{count}</div>
    </div>
  );
};

export default Home;
