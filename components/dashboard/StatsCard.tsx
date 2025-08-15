import { Card, CardBody } from "@/components/ui/layout/Card";

export function StatsCard({ title, value, change }: { title: string; value: string | number; change?: string }) {
  return (
    <Card>
      <CardBody>
        <div className="text-sm text-slate-500">{title}</div>
        <div className="mt-1 text-2xl font-semibold text-slate-900">{value}</div>
        {change && <div className="mt-1 text-xs text-emerald-600">{change}</div>}
      </CardBody>
    </Card>
  );
}

export default StatsCard;

