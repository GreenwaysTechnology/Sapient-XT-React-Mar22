import React,{useState} from 'react'
import ReactDOM from 'react-dom'


import React,{useState} from 'react'
import { Welcome } from './welcome';

const App=()=><div>
  <Welcome/>
</div>

ReactDOM.render(<Welcome firstName="Subramanian" lastName="Murugan"/>,document.getElementById('root'))