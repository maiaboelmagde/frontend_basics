import React, { useState } from 'react';
import TableBody from './tableBody'


const Table = ({peopleData}) => {

    return (
        <div className="container mt-4 ">
            <table className="table table-bordered table-striped table-hover">
                <thead className="table-dark">
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
                </thead>
                <tbody>
                    {peopleData.map((person)=><TableBody key={person.id} person={person}></TableBody>)}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
