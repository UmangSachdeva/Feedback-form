interface StatsBoxProps {
  heading: string;
  text: string;
}

function StatsBox({ heading, text }: StatsBoxProps) {
  return (
    <div className="p-4 text-white bg-transparent border shadow-sm rounded-xl border-secondary">
      <h3 className="text-sm font-medium ">{heading}</h3>
      <p className="text-2xl font-bold ">{text}</p>
    </div>
  );
}

export default StatsBox;
