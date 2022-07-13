import React from 'react';
import Create from './Create';
import Data from './Data';

const Table = (props) => {
    console.log(props.nama)
    console.log(props.jurusan);
    return ( 
        <div className="overflow-x-auto">
            <Create edit={props.data} nama={props.nama} jurusan={props.jurusan} /> 
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nama Lengkap</th>
                        <th>Jurusan</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <Data mahsiswa={props.mahasiswa} />
            </table>
        </div>
     );
}
 
export default Table;