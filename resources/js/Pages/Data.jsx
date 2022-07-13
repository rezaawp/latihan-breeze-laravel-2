import { Inertia } from '@inertiajs/inertia';
import { Link } from '@inertiajs/inertia-react';
import React from 'react';


const Data = ({mahsiswa}) => {

    
    return mahsiswa.map((data, i) => 
        <tbody key={i}>
            <tr>
                <th>{++i}</th>
                <td>{data.nama}</td>
                <td>{data.jurusan}</td>
                <td>
                    <button type='button' onClick={() => Inertia.delete('/delete/' + data.id)} className="btn btn-error">Delete</button>
                    <button type='button' onClick={() => Inertia.get('edit/' + data.id)} className="mx-2 btn btn-warning">Edit</button>
                </td>
            </tr>
        </tbody>
    )
    
}
 
export default Data;