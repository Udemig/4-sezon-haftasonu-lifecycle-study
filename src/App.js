import React,{useState} from "react";
import MyComponent from "./components/MyComponent";

function App() {
  const [showComponent,setShowComponent]=useState(true)
  return (
    <div className="App">
      <p>App Component</p>
      {
        showComponent === true && (
          <MyComponent/>
        )
      }
      <button onClick={()=>setShowComponent(!showComponent)}>Toggle</button>
    </div>
  );
}

export default App;
