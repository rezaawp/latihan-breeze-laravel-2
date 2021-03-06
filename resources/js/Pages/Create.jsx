import { Inertia } from '@inertiajs/inertia';
import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import Table from './Table';


const Create = () => {
    
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

    function handleClickUpdate()
    {
        e.preventDefault()
        Inertia.put('edit-data-mahasiswa', values)
        values.nama = ""
        values.jurusan = ""
    }
    

    return ( 
        <div className="p-5">
            <label htmlFor="">Nama : </label>
            <input id='nama' type="text" placeholder="Type here" className="input input-bordered input-error w-full max-w-xs" onChange={handleChange} value={values.nama} />  <br />
            <label htmlFor="">Jurusan : </label>
            <input id='jurusan' type="text" placeholder="Type here" className="input input-bordered input-error w-full max-w-xs" onChange={handleChange} value={values.jurusan}/> <br />
            <button className="btn btn-outline btn-success mt-2" onClick={handleClick}>Tambah</button>
            <button className="mx-3 btn btn-outline btn-warning mt-2" onClick={handleClickUpdate}>Update</button>
        </div>

     );
}
 
export default Create;