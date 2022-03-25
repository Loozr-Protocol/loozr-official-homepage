interface TimeProps {
  time: number;
}
export default function Time({ time }: TimeProps) {
  const seconds = Math.floor(time % 60);
  const minutes = Math.floor((time / 60) % 60);
  return (
    <>
      {minutes > 0 ? minutes : "00"}:{seconds > 0 ? seconds : "00"}
    </>
  );
}
