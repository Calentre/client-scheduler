export type AvailablePlatforms = 'google-meet' | 'teams'; // revisit this

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
