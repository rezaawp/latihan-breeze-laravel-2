<?php
namespace App\Models\JSON;


use Illuminate\Support\Facades\File;

class JSON
{
    public function create($locationFolder, $name, $data)
    {
        $jurusan = $data;
        $parse = json_encode($jurusan);
        $fileName = $name . '.json';
        File::put($locationFolder . '/' .$fileName, $parse);
        return $parse;
    }

    public function toAssoc($locationFile)
    {
        $data = file_get_contents($locationFile . '.json');
        $assocArray = json_decode($data, true);
        return $assocArray;
    }
}
?>