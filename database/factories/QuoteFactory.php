<?php

namespace Database\Factories;

use App\Enums\QuoteState;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Quote>
 */
class QuoteFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            //
        ];
    }

    public function open(): self
    {
        return $this->state(fn (array $attributes) => [
            'state' => QuoteState::Open,
        ]);
    }
}
