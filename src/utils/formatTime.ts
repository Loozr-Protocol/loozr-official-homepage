import { DateTime } from 'luxon';

const TZ = "America/New_York";

export const formatToTimeAgo = (time: string) => {
  return DateTime.fromISO(time).setZone(TZ).toRelative();
}