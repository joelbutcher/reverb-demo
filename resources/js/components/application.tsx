import { type Application } from '@/pages/applications';
import { Link } from '@inertiajs/react';

export default function Application({ application }: { application: Application }) {
    return (
        <Link href={route('applications.quotes', application)}>
            <div className="hover:shadow transition-all duration-300 border-sidebar-border/70 dark:border-sidebar-border relative aspect-video overflow-hidden rounded-xl border p-4">
                { application.name}
            </div>
        </Link>
    )
}
