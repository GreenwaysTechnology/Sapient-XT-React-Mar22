import React from 'react';
import { Name } from './'
import { Address } from '../address'


export const Profile = props => <div>
    <h1>Profile Details</h1>
    <h4>id {props.id}</h4>
    <Name firstName={props.firstName} middleName={props.middleName} lastName={props.lastName} />
    <Address />
</div>