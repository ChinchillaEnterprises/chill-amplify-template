import { Card, CardBody, CardHeader } from "@/components/ui/layout/Card";

type Item = { id: string; title: string; time: string; description?: string };

export function ActivityFeed({ items }: { items: Item[] }) {
  return (
    <Card>
      <CardHeader>
        <div className="text-sm font-medium text-slate-900">Recent activity</div>
      </CardHeader>
      <CardBody>
        <ul className="space-y-3">
          {items.map((it) => (
            <li key={it.id} className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-slate-400" />
              <div>
                <div className="text-sm text-slate-900">{it.title}</div>
                {it.description && <div className="text-sm text-slate-600">{it.description}</div>}
                <div className="text-xs text-slate-400">{it.time}</div>
              </div>
            </li>
          ))}
        </ul>
      </CardBody>
    </Card>
  );
}

export default ActivityFeed;

