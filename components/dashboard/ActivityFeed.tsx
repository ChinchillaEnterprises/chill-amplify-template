import { Card, CardBody, CardHeader } from "@/components/ui/layout/Card";

type Item = { id: string; title: string; time: string; description?: string };

export function ActivityFeed({ items }: { items: Item[] }) {
  return (
    <Card>
      <CardHeader>
        <div className="text-sm font-semibold text-app">Recent activity</div>
      </CardHeader>
      <CardBody>
        <ul className="space-y-3">
          {items.map((it) => (
            <li key={it.id} className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-app" />
              <div>
                <div className="text-sm font-medium text-app">{it.title}</div>
                {it.description && <div className="text-sm text-appmuted">{it.description}</div>}
                <div className="text-xs text-appmuted">{it.time}</div>
              </div>
            </li>
          ))}
        </ul>
      </CardBody>
    </Card>
  );
}

export default ActivityFeed;

