import Application from '@/components/application';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

export type Quote = {
    id: number;
    state: 'open' | 'rated' | 'accepted' | 'rejected' | 'expired';
}

export type Application = {
    id: number;
    name: string;
    quotes: Quote[];
}

interface Props {
    applications: Application[];
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Applications',
        href: '/applications',
    },
];

export default function Applications({ applications }: Props) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Applications" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    {applications.map(application => <Application key={application.id} application={application} />)}
                </div>
            </div>
        </AppLayout>
    );
}
