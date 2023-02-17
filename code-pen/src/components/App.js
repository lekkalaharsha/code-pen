import React,{useState}from "react";
import Editor from "./Editor";
function App() {
  const [html,setHtml] = useState('')
  const [js,setJs] = useState('')
  const [css,setCss] = useState('')
  return  (
  <>
    <div className="pane top-pane">
    <Editor 
    language='xmal'
    displayName='HTML'
    value={html}
    onchage={setHtml}

    
    />
<Editor 
    language='css'
    displayName='CSS'
    value={css}
    onchage={setCss}
 

    />
<Editor 
    language='javascript'
    displayName='js'
    value={js}
    onchage={setJs}
 

    />

   
    
    <div className="pane">
    <iframe

     title="output"
     sandbox="allow-script"
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
