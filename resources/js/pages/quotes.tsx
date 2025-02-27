import Quote from '@/components/quote';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { type Application, type Quote as QuoteType } from '@/pages/applications';

interface Props {
    application: Application
    quotes: QuoteType[];
}

export default function Quotes({ application, quotes }: Props) {
    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'Applications',
            href: '/applications',
        },
        {
            title: 'Quotes',
            href: route('applications.quotes', application),
        },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Applications" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    {quotes.map(quote  => <Quote
                        key={quote.id}
                        quote={quote}
                    />)}
                </div>
            </div>
        </AppLayout>
    );
}
