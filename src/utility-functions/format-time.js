export const formatTime = date => {
  let time = date
    .toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    })
    .replace(":00", "")
    .toLowerCase();

  time = time.slice(0, time.length - 1) + "." + time.slice(time.length - 1);

  time = time.startsWith("0") ? time.slice(1) : time;

  return time;
};
