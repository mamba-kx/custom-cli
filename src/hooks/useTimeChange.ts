export default function useChangeTime(timestamp: any) {
  const time = new Date(timestamp);
  const year = time.getFullYear();
  const month = (time.getMonth() + 1).toString().padStart(2, "0");
  const date = time.getDate().toString().padStart(2, "0");
  const hours = time.getHours().toString().padStart(2, "0");
  const minute = time.getMinutes().toString().padStart(2, "0");
  const second = time.getSeconds().toString().padStart(2, "0");

  return (
    year + "-" + month + "-" + date + " " + hours + ":" + minute + ":" + second
  );
}
