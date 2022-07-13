import { Inertia } from '@inertiajs/inertia';
import { data } from 'autoprefixer';
import React, { useState } from 'react';
import Table from './Table';


const Create = ({edit}, {nama}) => {
    console.log(nama)
    let put = false;
    if (edit)
    {
        Inertia.get('/data-mahasiswa', {nama: edit.nama, jurusan: edit.jurusan})
        put = true;
    }

    const [values, setValues] = useState({
        nama: "",
        jurusan: "",
    })

    function handleChange(e){
        const key = e.target.id;
        const value = e.target.value
        setValues(values => ({
            ...values,
            [key]: value,
        }))
    }

    function handleClick(e)
    {
        e.preventDefault()
        Inertia.post('/add-data-mahasiswa', values)
        values.nama = ""
        values.jurusan = ""
    }

    return ( 
        <div className="p-5">
            <label htmlFor="">Nama : </label>
            <input id='nama' type="text" placeholder="Type here" className="input input-bordered input-error w-full max-w-xs" onChange={handleChange} value={put == true ? nama : values.nama} />  <br />
            <label htmlFor="">Jurusan : </label>
            <input id='jurusan' type="text" placeholder="Type here" className="input input-bordered input-error w-full max-w-xs" onChange={handleChange} value={put == true ? edit.jurusan : values.jurusan}/> <br />
            <button className="btn btn-outline btn-success mt-2" onClick={handleClick}>Tambah</button>
            <button className="mx-3 btn btn-outline btn-warning mt-2" onClick={handleClick}>Update</button>
        </div>

     );
}
 
export default Create;