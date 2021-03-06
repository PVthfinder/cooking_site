<?php

namespace Database\Seeders;

use Faker\Factory;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            UserSeeder::class,
            CatalogSeeder::class,
            UnitsSeeder::class,
            IngredientsSeeder::class,
            RecipeSeeder::class,
            ReviewsSeeder::class,
            IngredientsInRecipesSeeder::class,
            StepSeeder::class,
        ]);
    }

}
