import { Card, CardBody } from "@/components/ui/layout/Card";

export function StatsCard({ title, value, change }: { title: string; value: string | number; change?: string }) {
  return (
    <Card>
      <CardBody>
        <div className="text-sm font-medium text-app">{title}</div>
        <div className="mt-1 text-2xl font-bold text-app">{value}</div>
        {change && <div className="mt-1 text-xs font-semibold text-emerald-700">{change}</div>}
      </CardBody>
    </Card>
  );
}

export default StatsCard;

