import React,{memo} from 'react';

const TableBody = ({person}) => {
    return (
        <tr>
            <td>{person.name}</td>
            <td>{person.age}</td>
        </tr>
    );
}

export default memo(TableBody);
