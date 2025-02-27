<?php

namespace App\Console\Commands;

use App\Enums\QuoteState;
use App\Events\QuoteStateChanged;
use App\Models\Quote;
use Illuminate\Console\Command;

class RejectQuoteCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'quote:reject {quote}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle(): int
    {
        $quote = Quote::query()->findOrFail($this->argument('quote'));

        $quote->state = QuoteState::Rejected;
        $quote->save();

        broadcast(new QuoteStateChanged($quote->id, $quote->state));

        return self::SUCCESS;
    }
}
