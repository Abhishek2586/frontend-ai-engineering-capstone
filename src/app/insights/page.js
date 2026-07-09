import PageHeader from "@/components/PageHeader";
import PlaceholderCard from "@/components/PlaceholderCard";

export default function Insights() {
  return (
    <div>
      <PageHeader title="AI Insights" description="Deep analysis of your productivity habits." />
      <PlaceholderCard title="Insights Placeholder">
        <p>This page will display AI-generated insights, charts, and recommendations based on your task completion history.</p>
      </PlaceholderCard>
    </div>
  );
}
