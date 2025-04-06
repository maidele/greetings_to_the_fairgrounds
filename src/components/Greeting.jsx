import React from "react";


function Greetings({name}) {
   return (
       <div>
           <h3> Hello,{name}!</h3>
           <p> We welcome you to discover our products that are below!This is your first custom component in React.</p>
       </div>
   );
}
export default Greetings;