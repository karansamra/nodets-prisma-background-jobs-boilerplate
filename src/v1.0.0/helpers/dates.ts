import moment from 'moment';
export const dateTimeFormats = {
  dateTime: 'YYYY-MM-DD HH:mm:ss',
  date: 'YYYY-MM-DD',
  short: '',
  'ISO-8601': 'YYYY-MM-DDTHH:mm:ss.SSSZ',
};

export const getCurrentDateTime = async (
  format: string = dateTimeFormats.dateTime,
  isUtcDateTime = false
) => {
  if (!isUtcDateTime) return moment().format(format);
  else return moment().utc().startOf('hour').format(format);
};

export function computeTargetDatesUTC(daysAfter: number): {
  targetDate: Date;
  dayAfterTargetDate: Date;
} {
  const now = new Date();
  const currentDate = new Date(
    Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate())
  );
  const targetDate = new Date(currentDate);
  targetDate.setUTCDate(currentDate.getUTCDate() + daysAfter);
  const dayAfterTargetDate = new Date(targetDate);
  dayAfterTargetDate.setUTCDate(targetDate.getUTCDate() + 1);

  return { targetDate, dayAfterTargetDate };
}

export function formateDateString(
  inputDate: string,
  currentDateFormate: string = dateTimeFormats['ISO-8601']
) {
  return moment(inputDate, currentDateFormate).format(dateTimeFormats.dateTime);
}
