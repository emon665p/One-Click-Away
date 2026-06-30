export const eventDate = new Date('2026-09-14T19:30:00');

export const formatDate = (date: Date) =>
  new Intl.DateTimeFormat('en', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(date);

export const getCountdown = (date: Date) => {
  const diff = date.getTime() - Date.now();
  return {
    days: Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24))),
    hours: Math.max(0, Math.floor((diff / (1000 * 60 * 60)) % 24)),
    minutes: Math.max(0, Math.floor((diff / (1000 * 60)) % 60)),
  };
};
