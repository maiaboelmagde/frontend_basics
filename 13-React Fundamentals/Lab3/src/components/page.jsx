import React, { useState } from 'react';
import Table from './table';
import Form from './form';
import {v4 as uuid} from 'uuid';



const Page = () => {
    let [people, setPeople]= useState([
        {id:uuid(),name:'Ali',age:20},
        {id:uuid(),name:'Amr',age:24},
        {id:uuid(),name:'Omar',age:19},
        {id:uuid(),name:'Sara',age:20},
        {id:uuid(),name:'Mai',age:21},
    ]);

    const getInput = (person) => {
        const newPerson = { id: uuid(), ...person };
        setPeople([...people, newPerson]);
    };

    return (
        <div style={{width:'70vw'}}>
            <Form getInput={getInput}></Form>
            <Table peopleData={people}></Table>
        </div>
    );
}

export default Page;
