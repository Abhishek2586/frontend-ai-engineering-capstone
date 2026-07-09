import PageHeader from "@/components/PageHeader";
import PlaceholderCard from "@/components/PlaceholderCard";
import { getHealthData } from "@/lib/health";

export default async function Health() {
  // To avoid Next.js build-time errors from fetching internal API routes
  // when the server is not fully running, we use the shared helper directly.
  const data = getHealthData();

  return (
    <div>
      <PageHeader title="System Health" description="Real-time status of the application." />
      <PlaceholderCard title="Health Check Results">
        <ul className="space-y-2">
          <li><strong>Status:</strong> <span className="text-green-600 font-medium">{data.status}</span></li>
          <li><strong>App Name:</strong> {data.appName}</li>
          <li><strong>Environment:</strong> {data.environment}</li>
          <li><strong>Version:</strong> {data.version}</li>
          <li><strong>Timestamp:</strong> {data.timestamp}</li>
        </ul>
      </PlaceholderCard>
    </div>
  );
}
