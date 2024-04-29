import { EventsOwner } from '@/types/eventsOwner';
import {
  EventItem,
  EventReservation,
  EventReservationStatus,
  MappedScheduleItem,
  Transaction,
  TransactionDetailsFormData,
} from '@/types/meetings';
import { clientJsonFetch } from './fetch';

interface BaseApiResponse {
  ok: boolean;
  error?: unknown;
}

interface GetUserDetailsResponse extends BaseApiResponse {
  user: EventsOwner | null;
}

interface GetUserEventsResponse extends BaseApiResponse {
  events: EventItem[];
}

interface GetEventsSchedulesResponse extends BaseApiResponse {
  schedules: MappedScheduleItem[];
}

interface ScheduledItem extends MappedScheduleItem {
  reservationId?: string;
}

interface GetNonPaidSchedulesResponse extends BaseApiResponse {
  schedule: ScheduledItem;
}

interface PostTransactionResponse extends BaseApiResponse {
  transaction: Transaction;
}

interface GetTransactionDetailsResponse extends BaseApiResponse {
  transaction: Omit<Transaction, 'clientEmail' | 'clientName'>;
}

interface GetStatusScheduleResponse extends BaseApiResponse {
  reservation: EventReservation;
}

export const getUserDetails = async (userName: string) => {
  try {
    const response = await clientJsonFetch<GetUserDetailsResponse>(
      `user/details?user=${userName}`
    );

    if (!response.ok) {
      throw new Error('Unexpected error');
    }

    return { user: response.user };
  } catch (error) {
    return { error, user: null };
  }
};

export const getUserEvents = async (userName: string) => {
  try {
    const response = await clientJsonFetch<GetUserEventsResponse>(
      `user/events?user=${userName}`
    );

    if (!response.ok) {
      throw new Error('Unexpected error');
    }

    return { events: response.events };
  } catch (error) {
    return { error, events: [] };
  }
};

export const getEventSchedules = async (eventName: string) => {
  try {
    const response = await clientJsonFetch<GetEventsSchedulesResponse>(
      `events/schedules?event=${eventName}`
    );

    if (!response.ok) {
      throw new Error('Unexpected error');
    }

    return { schedules: response.schedules };
  } catch (error) {
    return { error, schedules: [] };
  }
};

export const postScheduleDetails = async (formData: unknown = {}) => {
  try {
    const response = await clientJsonFetch<GetNonPaidSchedulesResponse>(
      'events/schedules',
      {
        method: 'POST',
        body: JSON.stringify(formData),
      }
    );

    if (!response.ok) {
      throw new Error('Unexpected error');
    }

    return {
      schedule: response.schedule,
      reservationId: response.schedule.reservationId,
    };
  } catch (error) {
    return { schedule: null, error };
  }
};

export const postTransaction = async (
  transactionDetails: TransactionDetailsFormData,
  action: 'update' | 'create'
) => {
  try {
    const params = `?action=${action}`;
    const response = await clientJsonFetch<PostTransactionResponse>(
      `events/transactions${params}`,
      {
        method: 'POST',
        body: JSON.stringify(transactionDetails),
      }
    );

    if (!response.ok) {
      throw new Error('Unexpected error');
    }

    return {
      transaction: response.transaction,
    };
  } catch (error) {
    return {
      transaction: null,
      error: `${error}`,
    };
  }
};

export const getTransactionDetails = async (transactionId: string) => {
  try {
    const response = await clientJsonFetch<GetTransactionDetailsResponse>(
      `events/transactions?id=${transactionId}`
    );

    if (!response.ok) {
      throw new Error('Unexpected error');
    }

    return {
      transaction: response.transaction,
    };
  } catch (error) {
    return {
      transaction: null,
      error: `${error}`,
    };
  }
};

export const getScheduleByStatus = async (
  scheduleId: string,
  status: EventReservationStatus = 'confirmed'
) => {
  try {
    const response = await clientJsonFetch<GetStatusScheduleResponse>(
      `events/schedule?id=${scheduleId}&status=${status}`
    );

    if (!response.ok) {
      throw new Error('Unexpected error');
    }
    return { reservation: response.reservation };
  } catch (error) {
    return { reservation: null, error };
  }
};
