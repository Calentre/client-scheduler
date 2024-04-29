import { EventReservation } from '@/types/meetings';
import { NextRequest, NextResponse } from 'next/server';

export function GET(request: Request | NextRequest) {
  try {
    const url = new URL(request.url);
    const scheduleId = url.searchParams.get('id');
    const scheduleStatus = url.searchParams.get('status');

    if (!scheduleId) {
      throw new Error('Invalid Schedule');
    }

    // TODO: logic to retrieve event reservation or transaction from supabase (with prisma) using schedule id
    if (scheduleStatus === 'confirmed') {
      // TODO: get from reservations table
    } else {
      // TODO: get from transactions table
    }

    const mockedScheduledConfirmedReservation: EventReservation = {
      client: {
        email: 'example@mail.com',
        name: 'Luis Flores',
      },
      event: {
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
      schedule: {
        eventLink: 'https://meet.google.com/',
        date: new Date().toISOString(),
        eventId: 23423234,
        id: 1231231,
        startHour: new Date().toISOString(),
        endHour: new Date().toISOString(),
        isActive: true,
        isExpired: false,
      },
      status: 'confirmed',
    };

    const mockedScheduledPendingReservation = {
      ...mockedScheduledConfirmedReservation,
      status: 'pending',
    };

    return NextResponse.json(
      {
        reservation:
          scheduleStatus === 'confirmed'
            ? mockedScheduledConfirmedReservation
            : mockedScheduledPendingReservation,
        ok: true,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { reservation: null, error: `${error}`, ok: false },
      { status: 500 }
    );
  }
}
