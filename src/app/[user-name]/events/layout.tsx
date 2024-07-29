import { getUserDetails, getUserEvents } from '@/helpers/api';
import { SchedulerProvider } from '@/providers/SchedulerProvider';
import type { Metadata } from 'next';

interface Props {
  children: React.ReactNode;
  params: {
    'user-name': string;
    'event-name': string;
  };
}

export const metadata: Metadata = {
  title: 'Calentre: Client scheduler',
  description: 'TBD',
};

export default async function RootLayout({ children, params }: Props) {
  const userName = params?.['user-name'];

  const [userEventsResponse, userDetailsResponse] = await Promise.all([
    getUserEvents(userName),
    getUserDetails(userName),
  ]);

  if (!userDetailsResponse.user) {
    return 'user not found error'; // TODO
  }

  return (
    <SchedulerProvider
      events={userEventsResponse.events}
      eventsOwner={userDetailsResponse.user}
    >
      {children}
    </SchedulerProvider>
  );
}
