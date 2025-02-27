<?php

use Illuminate\Support\Facades\Broadcast;

Broadcast::channel('quotes.{id}', fn() => true);
