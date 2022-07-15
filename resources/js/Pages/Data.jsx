import { Inertia } from '@inertiajs/inertia';
import { Link } from '@inertiajs/inertia-react';
import React from 'react';


const Data = ({mahasiswa}) => {
    return mahasiswa.map((data, i) => 
        <tbody key={i}>
            <tr>
                <th>{++i}</th>
                <td>{data.nama}</td>
                <td>{data.jurusan}</td>
                <td>
                    <button type='button' onClick={() => Inertia.delete('/delete/' + data.id)} className="btn btn-error">Delete</button>
                    <Link href={route('edit', {id: data.id})} className="mx-2 btn btn-warning">Edit</Link>
                </td>
            </tr>
        </tbody>
    )
    
}
 
export default Data;