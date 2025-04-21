
import React from "react";
import './../styles/App.css';
import Display from "./Display";

const App = () => {
  return (
    <div>
     <Display
      header="Welcome to my website."
      children="This is the content of my website."
      footer="© 2023 My Website. All rights reserved."
     />
    </div>
  )
}

export default App
