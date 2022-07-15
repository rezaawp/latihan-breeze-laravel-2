<?php

namespace Database\Seeders;

use App\Models\Latihan;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class LatihanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    function __construct()
    {
        $this->run();
    }
    public function run()
    {
        Latihan::factory()->count(15)->create();
    }
}
