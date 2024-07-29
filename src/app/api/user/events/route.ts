import prisma from '@/helpers/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: Request | NextRequest) {
  try {
    const url = new URL(request.url);
    const username = url.searchParams.get('user');

    await prisma.$connect();

    if (!username) {
      throw new Error('Invalid user');
    }

    const userEventsResponse = await prisma.event.findMany({
      where: { username },
    });

    const userEvents = userEventsResponse.map((event) => ({
      id: event.id,
      title: event.event_name,
      duration: event.duration,
      price: event.amount,
      appendedUrlName: event.event_name?.replaceAll(' ', '-'),
      description: event.event_description,
      isPaidEvent: event.event_type !== 'free',
      status: '',
      timezone: 'Africa/Lagos',
      platform: event.platform_type,
    }));

    return NextResponse.json({ events: userEvents, ok: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { user: null, error: `${error}`, ok: false },
      { status: 400 }
    );
  }
}
