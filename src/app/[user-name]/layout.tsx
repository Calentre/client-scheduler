import { getUserDetails, getUserEvents } from '@/helpers/api';
import { SchedulerProvider } from '@/providers/SchedulerProvider';
import type { Metadata } from 'next';

interface Props extends PageProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: 'Calentre: Client scheduler',
  description: 'TBD',
};

export default async function RootLayout({ children, params }: Props) {
  const userName = params?.['user-name'];

  if (!userName) {
    return 'user not found error 1'; // TODO
  }

  const [userEventsResponse, userDetailsResponse] = await Promise.all([
    getUserEvents(userName),
    getUserDetails(userName),
  ]);

  if (!userDetailsResponse.user) {
    return 'user not found error 2'; // TODO
  }

  return (
    <main>
      <SchedulerProvider
        events={userEventsResponse.events}
        eventsOwner={userDetailsResponse.user}
      >
        {children}
      </SchedulerProvider>
    </main>
  );
}
