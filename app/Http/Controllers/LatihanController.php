<?php

namespace App\Http\Controllers;

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
    public function index()
    {
        //
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

        return redirect()->back();
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
        //
        $data = Latihan::find($id);
        return Inertia::render('Table', ['mahasiswa' => $this->getAllData(), 'data' => $data]);
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
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Latihan  $latihan
     * @return \Illuminate\Http\Response
     */
    public function destroy($id ,Latihan $latihan, Request $request)
    {
        //
        $data = Latihan::find($id);
        $data->delete();

        return redirect()->back();
    }
}
