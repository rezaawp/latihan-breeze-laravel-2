import React from 'react';
import Create from './Create';
import Data from './Data';
import Edit from './Edit';

const Table = (props) => {
    return ( 
        <div className="overflow-x-auto">
            {props.id ? 
                (
                    <Edit nama={props.nama} jurusan={props.jurusan} Id={props.id}/>
                ) 
                : 
                (
                    <Create />
                )
            }
            
            {props.flash.message && (
                <div className=" m-2 alert alert-success shadow-lg">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>{props.flash.message}</span>
                    </div> 
                </div>
            )}
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nama Lengkap</th>
                        <th>Jurusan</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <Data mahasiswa={props.mahasiswa} />
            </table>
        </div>
     );
     
}
 
export default Table;