<?php

namespace Database\Seeders;

use App\Models\Application;
use App\Models\Quote;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        Application::factory()->count(10)
            ->has(Quote::factory()->open()->count(3))
            ->create();
    }
}
