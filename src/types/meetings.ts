export type AvailablePlatforms = 'google_meet' | 'teams'; // revisit this

export type EventReservationStatus =
  | 'confirmed'
  | 'pending'
  | 'received'
  | 'denied'
  | 'incomplete';

export interface ScheduleItem {
  id: number;
  eventId: number;
  date: string;
  isExpired: boolean;
  isActive: boolean;
}

export interface MappedScheduleItem {
  day: string;
  eventId: number;
  schedules: ScheduleItem[];
}

export interface EventItem {
  title: string;
  duration: string;
  price: string;
  id: number;
  appendedUrlName: string;
  description: string;
  timezone: string;
  isPaidEvent: boolean;
  status: string;
  platform: AvailablePlatforms;
}

export interface ConfrimedSchedule extends ScheduleItem {
  eventLink: string;
  startHour: string;
  endHour: string;
}

export interface EventReservation {
  client: {
    email: string;
    name: string;
  };
  event: EventItem;
  schedule: ConfrimedSchedule;
  status: EventReservationStatus;
}

// TODO: Revisit this interface
export interface Transaction {
  transactionId: string;
  eventId: string;
  amount: number;
  clientEmail: string;
  clientName: string;
  paymentProviderId: string;
  status: EventReservationStatus;
  date: string;
  hasAdminConfirmed: boolean;
}

export interface TransactionDetailsFormData {
  eventId: string;
  amount: number;
  clientEmail?: string;
  clientName?: string;
  adminEmail?: string;
  adminName?: string;
  paymentProviderId: string;
  date: string;
}
