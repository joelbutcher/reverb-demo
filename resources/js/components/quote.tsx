import { type Quote } from '@/pages/applications';
import HeadingSmall from '@/components/heading-small';
import { Badge, badgeVariants } from '@/components/ui/badge';
import { useEffect, useState } from 'react';

export default function Quote({ quote }: { quote: Quote }) {
    const [badgeVariant, setBadgeVariant] = useState('default');
    const [state, setState] = useState(quote.state);

    useEffect(() => {
        const connect = (channel: string) => {
            window.Echo.private(channel)
                .listen('QuoteStateChanged', (e) => {
                    setState(e.state);
                });
        }

        connect(`quotes.${quote.id}`);

        return () => {
            window.Echo.leave(`quotes.${quote.id}`);
        }
    }, [quote]);

    useEffect(() => {
        switch (state) {
            case 'open':
                setBadgeVariant('secondary');
                break;
            case 'rejected':
                setBadgeVariant('destructive');
                break;
        }
    }, [state, setBadgeVariant]);

    return (
        <div className="hover:shadow transition-all duration-300 border-sidebar-border/70 dark:border-sidebar-border relative aspect-video overflow-hidden rounded-xl border p-4">
            <HeadingSmall title={`Quote ${quote.id}`} description={new Date(quote.created_at).toDateString()} />

            <div className="mt-2">
                <Badge variant={badgeVariant}>
                    { quote.state }
                </Badge>
            </div>
        </div>
    )
}
