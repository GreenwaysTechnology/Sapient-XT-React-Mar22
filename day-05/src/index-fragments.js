import React, { Fragment } from 'react';
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'

//Framents- Syntax-1
// const Company = props => <React.Fragment>
//     <h1>Google</h1>
//     <h1>IBM</h1>
//     <h1>FaceBook</h1>
// </React.Fragment>
//Fragement -Syntax -2
// const Company = props => <Fragment>
//     <h1>Google</h1>
//     <h1>IBM</h1>
//     <h1>FaceBook</h1>
// </Fragment>
//Fragment -Syntax 3
const Company = props => <>
    <h1>Google</h1>
    <h1>IBM</h1>
    <h1>FaceBook</h1>
</>
//table Design / Grid Design using Framegments

const Grid = props => {
    return <table className="table">
        <thead className="thead-dark">
            <Columns  />
        </thead>
        <GridBody users={[{ id: 1, name: 'subramanian', email: 'subu@gmail.com' }]} />
    </table>
}
const Columns = props => {
    return <>
        <th>id</th>
        <th>name</th>
        <th>email</th>
    </>
}
const GridBody = props => {
    return <>
        <tbody>
            {
                props.users.map((user, index) => {
                    return <tr key={index}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                    </tr>
                })
            }

        </tbody>
    </>
}
const App = () => <div>
    <Company />
    <Grid/>
</div>
ReactDOM.render(<App />, document.getElementById('root'))