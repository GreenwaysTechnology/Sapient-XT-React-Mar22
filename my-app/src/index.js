import React from 'react';
import ReactDOM from 'react-dom'


const Greeter=()=><div>

    {/* This is not safe code */}
   <div>First &middot; Second</div>
   <div>10 &lt; 2</div>
   {/* The below code is safe because , brefore rendering it has been sanzitized */}
   <div dangerouslySetInnerHTML={{__html: '10 &lt; 2'}}/>
   
   <div dangerouslySetInnerHTML={{__html: 'First &middot; Second'}} />

</div>

ReactDOM.render(<Greeter/>,document.getElementById('root'))
