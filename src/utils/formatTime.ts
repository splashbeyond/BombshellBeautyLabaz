/**
 * Convert 24-hour `HH:MM` (from site config) to 12-hour clock with am/pm for display
 * (matches Square booking: e.g. 9:00 am – 5:00 pm).
 */
export function formatTime12h(time24: string): string {
  const m = /^(\d{1,2}):(\d{2})$/.exec(time24.trim());
  if (!m) return time24;
  let hour = parseInt(m[1], 10);
  const minutes = m[2];
  const isPm = hour >= 12;
  if (hour === 0) hour = 12;
  else if (hour > 12) hour -= 12;
  const suffix = isPm ? 'pm' : 'am';
  return `${hour}:${minutes} ${suffix}`;
}
