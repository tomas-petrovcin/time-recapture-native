export const formatDate = (date: Date | string) => {
  if (typeof date === 'string') {
    date = new Date(date);
  }

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${year}/${month}/${day}`;
};

export const formatTime = (date: Date) => {
  const hour = date.getHours();
  const minute = date.getMinutes();

  return `${hour}:${minute}`;
};
