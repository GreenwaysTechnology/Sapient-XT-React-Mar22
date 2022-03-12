import React from 'react'
import { useState } from 'react';
import ReactDOM from 'react-dom'
import styled from 'styled-components'

//create component 
const Title = styled.h1`
font-size: 1.5em;
text-align: center;
color: palevioletred;
`
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;
const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
// A new component based on Button, but with some override styles
const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;


const Greet = props => {
    const [message, setMessage] = useState('Hello')
    return <Wrapper>
        <Title>{message}</Title>
        <Button primary onClick={() => {
            setMessage('Hello,How are you?')
        }}>Help</Button>
        <TomatoButton>ContactUs</TomatoButton>
    </Wrapper>
}

const App = props => {
    return <div>
        <Greet />
    </div>
}
ReactDOM.render(<App />, document.getElementById('root'))