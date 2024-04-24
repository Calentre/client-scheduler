import { TransactionDetailsFormData } from '@/types/meetings';
import { NextRequest, NextResponse } from 'next/server';
import { MOCKED_DEMO_MEETINGS } from '../../user/events/route';
import { DEMO_SCHEDULES } from '../schedules/route';

export async function POST(request: Request | NextRequest) {
  const url = new URL(request.url);

  const bodyData = (await request.json()) as
    | TransactionDetailsFormData
    | undefined;
  const action = url.searchParams.get('action');

  console.log({ bodyData }); // TODO: remove console.log

  //   TODO: revisit this if logic
  try {
    if (
      !bodyData?.amount ||
      !bodyData?.eventId ||
      !bodyData?.paymentProviderId ||
      !bodyData?.eventId
    ) {
      throw 'Invalid transaction info.';
    }
    if (action === 'update') {
      // TODO: do the update transaction action case
      return NextResponse.json(
        {
          transaction: {
            ...bodyData,
            transactionId: 'random-transaction-23234',
            hasAdminConfirmed: false,
            status: 'pending',
          },
          ok: true,
        },
        { status: 200 }
      );
    } else if (action === 'create') {
      // TODO: do the create transaction action case
      return NextResponse.json(
        {
          transaction: {
            ...bodyData,
            transactionId: 'random-transaction-23234',
            hasAdminConfirmed: false,
            status: 'incomplete',
          },
          ok: true,
        },
        { status: 200 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { transaction: null, ok: false, error: `${error}` },
      { status: 500 }
    );
  }
}

export async function GET(request: Request | NextRequest) {
  try {
    // const url = new URL(request.url);
    // const transactionId = url.searchParams.get('id');

    // TODO: logic to retrieve transaction by id, and based on that, retrieve schedule and event items
    return NextResponse.json(
      {
        // event: MOCKED_DEMO_MEETINGS[1], // this field will be retrieved on cliend-side
        transaction: {
          eventId: MOCKED_DEMO_MEETINGS[1].id,
          amount: parseFloat(
            MOCKED_DEMO_MEETINGS[1].price.replace(/[^\d.]/g, '')
          ),
          paymentProviderId: 1,
          date: DEMO_SCHEDULES[1].date,
          transactionId: 'random-transaction-23234',
          hasAdminConfirmed: false,
          status: 'incomplete', // TODO: (remove this comment) status could be: 'incomplete' | 'pending' | 'reveived' | 'denied'
        },
        // schedule: DEMO_SCHEDULES[1], // this field will be retrieved on cliend-side
        ok: true,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { transaction: null, ok: false, error: `${error}` },
      { status: 500 }
    );
  }
}
