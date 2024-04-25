import { EventItem } from '@/types/meetings';
import { NextRequest, NextResponse } from 'next/server';

export function GET(request: Request | NextRequest) {
  try {
    const MOCKED_DEMO_MEETINGS: EventItem[] = [
      {
        title: 'Life Coaching Introduction',
        duration: '30 Mins',
        price: '0',
        id: 1,
        appendedUrlName: 'life-coaching-introduction',
        description: 'no existing description',
        isPaidEvent: false,
        status: '',
        timezone: 'Africa/Lagos',
        platform: 'google-meet',
      },
      {
        title: "Calentre's introduction",
        duration: '60 Mins',
        price: '$39.00',
        id: 122418,
        appendedUrlName: 'calentres-introduction',
        description:
          'This is a description of the meeting. All payment will be confirmed within 0 - 5hrs ',
        isPaidEvent: true,
        status: '',
        timezone: 'Africa/Lagos',
        platform: 'google-meet',
      },
      {
        title: 'Real State Industry',
        duration: '15 Mins',
        price: '$99.00',
        id: 3,
        appendedUrlName: 'real-state-industry',
        description: 'no existing description',
        isPaidEvent: true,
        status: '',
        timezone: 'Africa/Lagos',
        platform: 'teams',
      },
    ];
    const url = new URL(request.url);
    const userName = url.searchParams.get('user');
    console.log(userName); // TODO: remove

    // TODO: logic to retrieve user events from supabase (with prisma) using userName constant

    return NextResponse.json(
      { events: MOCKED_DEMO_MEETINGS, ok: true },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { user: null, error: `${error}`, ok: false },
      { status: 400 }
    );
  }
}
