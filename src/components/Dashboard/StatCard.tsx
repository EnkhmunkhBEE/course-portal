type Props = {
  title: string;
  value: string;
};

export default function StatCard({ title, value }: Props) {
  return (
    <div className="dashboard-card">
      <h3>{title}</h3>
      <h2>{value}</h2>
    </div>
  );
}