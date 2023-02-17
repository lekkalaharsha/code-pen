import React from "react";
import Editor from "./editor";
function App() {
  return  (
    <>
    <div className="pane top-pane">
    <Editor />
    <Editor />
    <Editor />
    <div className="pane">

    <iframe

    title="output"
    sandbox="allow-scripts"
    frameBoder="0"
    width="100%"
    height="100%"
    />
      
    </div>

      
    </div>
    </>
   
  )
}

export default App;
