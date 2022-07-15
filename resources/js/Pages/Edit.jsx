import { Inertia } from '@inertiajs/inertia';
import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import Table from './Table';


const Edit = ({nama, jurusan, Id}) => {
    
    let valueJurusan = jurusan

    const [values, setValues] = useState({
        nama: "",
        jurusan: "",
        id: Id
    })

    function handleChange(e){
        valueJurusan = null
        const key = e.target.id
        const value = e.target.value
        
        setValues(values => ({
            ...values,
            [key]: value,
        }))
    }

    function handleClick(e)
    {
        e.preventDefault()
        console.log('values', values)
        Inertia.put('/edit-data-mahasiswa', values)
        values.nama = ""
        values.jurusan = ""
    }
    
    return ( 
        <div className="p-5">
            <label htmlFor="">Nama : </label>
            <input id='nama' type="text" placeholder={nama} className="input input-bordered input-error w-full max-w-xs" onChange={handleChange} />  <br />
            <label htmlFor="">Jurusan : </label>
            <input id='jurusan' type="text" placeholder={jurusan} className="input input-bordered input-error w-full max-w-xs" onChange={handleChange} /> <br />
            <button className="btn btn-outline btn-success mt-2" onClick={handleClick}>Tambah</button>
            <button className="mx-3 btn btn-outline btn-warning mt-2" onClick={handleClick}>Update</button>
        </div>

     );
}
 
export default Edit;