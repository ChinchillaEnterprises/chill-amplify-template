import StatsCard from "@/components/dashboard/StatsCard";
import ActivityFeed from "@/components/dashboard/ActivityFeed";
import DashboardLayout from "@/components/dashboard/DashboardLayout";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatsCard title="Users" value={128} change="+4.2%" />
          <StatsCard title="Sessions" value={842} change="+1.1%" />
          <StatsCard title="Revenue" value="$2.4k" change="+8.9%" />
          <StatsCard title="Errors" value={3} />
        </div>
        <ActivityFeed
          items={[
            { id: "1", title: "New signup", time: "3m ago", description: "jane@example.com" },
            { id: "2", title: "Password reset", time: "1h ago" },
            { id: "3", title: "Profile updated", time: "2h ago" },
          ]}
        />
      </div>
    </DashboardLayout>
  );
}