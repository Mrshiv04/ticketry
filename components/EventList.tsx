'use client';

import { api } from '@/convex/_generated/api';
import { useQuery } from 'convex/react';
import Spinner from './Spinner';

function EventList() {
	const events = useQuery(api.events.get);

	console.log('events', events);
	if (!events)
		return (
			<div className='min-h-[400px] flex items-center justify-center'>
				<Spinner />
			</div>
		);
	return <div>EventList</div>;
}

export default EventList;
