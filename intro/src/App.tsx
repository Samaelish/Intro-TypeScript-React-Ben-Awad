import React from 'react'
import { TextField } from "./components/TextField";

const App: React.FC = () => {
  return (
    <div>
      <TextField text='hello' person={{firstName: '', lastName: ''}} ok={true} i={1} fn={()=> {return '1'}}/>
    </div>
  )
}

export default App