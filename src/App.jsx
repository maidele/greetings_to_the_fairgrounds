import React from "react";
import Greetings from "./components/Greeting";
import Products from "./components/Products"


function App() {
 return(
   <div>
     <h1> Welcome to our shop!</h1>
     <Greetings name="Chloe Washington" />
     <h2>Products</h2>
       <Products name= "iPhone 13" price="$1000" />
       <Products name= "iPhone 13 Pro" price="$1100" />
       <Products name= "iPhone 13 Pro" price="$1200" />
   </div>//Displays name of product and price
 );
}
export default App;//imports greeting, product and react
