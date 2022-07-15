<?php

namespace App\Http\Controllers;

use App\Models\JSON\JSON;
use App\Models\Latihan;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LatihanController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function dataMahasiswa(Request $request)
    {
        $nama = $request->nama;
        $jurusan = $request->jurusan;
        return Inertia::render('Table', ['mahasiswa' => $this->getAllData(), 'nama' => $nama, 'jurusan' => $jurusan]);
    }
    public function index()
    {
        $nama = request()->nama;
        $jurusan = request()->jurusan;
        return Inertia::render('Table' , ['mahasiswa' => $this->getAllData(), 'nama' => $nama, 'jurusan' => $jurusan]);
    }

    public function getAllData()
    {
        $data = Latihan::all();
        return $data;
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        return Inertia::render('Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        Latihan::create([
            'nama' => $request->nama,
            'jurusan' => $request->jurusan
        ]);

        return redirect()->back()->with('message', 'Data anda berhasil di input');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Latihan  $latihan
     * @return \Illuminate\Http\Response
     */
    public function show(Latihan $latihan)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Latihan  $latihan
     * @return \Illuminate\Http\Response
     */

    public function edit($id,Latihan $latihan)
    {
        $data = Latihan::find($id);
        $json = new JSON();
        $json->create(public_path(''), 'edit', $data);
        return Inertia::render('Table', ['mahasiswa' => $this->getAllData(), 'nama' => $data->nama, 'jurusan' => $data->jurusan, 'id' => $data->id]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Latihan  $latihan
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Latihan $latihan)
    {
        //
        $data = $latihan::find($request->id);
        $data->update([
            'nama' => $request->nama,
            'jurusan' => $request->jurusan
        ]);

        return redirect()->route('index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Latihan  $latihan
     * @return \Illuminate\Http\Response
     */
    public function destroy($id ,Latihan $latihan, Request $request)
    {
        $data = Latihan::find($id);
        $data->delete();

        return redirect()->back()->with('message', 'Data anda sudah berhasil di hapus');
    }
}
