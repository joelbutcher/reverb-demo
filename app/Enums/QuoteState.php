<?php

declare(strict_types=1);

namespace App\Enums;

enum QuoteState: string
{
    case Open = 'open';
    case Rated = 'rated';
    case Accepted = 'accepted';
    case Rejected = 'rejected';
    case Expired = 'expired';
}
