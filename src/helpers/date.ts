export const userTimezone = {
  displayTimezone: new Date()
    .toString()
    .match(/([A-Z]+[\+-][0-9]+.*)/)?.[1]
    .match(/\(([^)]+)\)/)?.[1],
  convertValue: Intl.DateTimeFormat().resolvedOptions().timeZone,
};

export const convertTimezone = (
  date: string | Date,
  toTimezone: string,
  lang = 'en-US'
) => {
  return new Date(
    (typeof date === 'string' ? new Date(date) : date).toLocaleString(lang, {
      timeZone: toTimezone,
    })
  );
};

export const formatDate = (
  date: Date,
  lang: string = 'en',
  format: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
) => new Date(date).toLocaleDateString(lang, format);

export const abbreviateTimezone = (date: string) =>
  new Date(date)
    .toLocaleTimeString('en-us', {
      timeZoneName: 'short',
    })
    .split(' ')[2];

export const stringToDate = (value: string) => new Date(value);
