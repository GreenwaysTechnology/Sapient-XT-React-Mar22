import React,{useState} from 'react'

export const Welcome = props => {
    const [values, setValues] = useState({
      firstName: props.firstName,
      lastName: props.lastName,
    })
  
    const handleChange = event => {
      setValues({...values, [event.target.name]: event.target.value})
    }
  
    return (
      <div>
        <h1>
          Welcome, {values.firstName} {values.lastName}
        </h1>
  
        <form name="userName">
          <label>
            First Name
            <input
              value={values.firstName}
              name="firstName"
              onChange={handleChange}
            />
          </label>
  
          <label>
            Last Name
            <input
              value={values.lastName}
              name="lastName"
              onChange={handleChange}
            />
          </label>
        </form>
      </div>
    )
  }