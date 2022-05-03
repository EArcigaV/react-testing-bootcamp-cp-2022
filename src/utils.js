export function getFormattedDate(date = new Date()) {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

export function isFutureDate(date = new Date()) {
  return date.getTime() > Date.now();
}
