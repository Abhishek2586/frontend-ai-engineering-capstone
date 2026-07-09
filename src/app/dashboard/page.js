import PageHeader from "@/components/PageHeader";
import PlaceholderCard from "@/components/PlaceholderCard";

export default function Dashboard() {
  return (
    <div>
      <PageHeader title="Dashboard" description="Overview of your recent activity and AI summaries." />
      <PlaceholderCard title="Dashboard Overview Placeholder">
        <p>This page will display a high-level summary of tasks, productivity trends, and recent AI insights.</p>
      </PlaceholderCard>
    </div>
  );
}
