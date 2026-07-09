import PageHeader from "@/components/PageHeader";
import PlaceholderCard from "@/components/PlaceholderCard";

export default function Settings() {
  return (
    <div>
      <PageHeader title="Settings" description="Configure your app preferences and integration settings." />
      <PlaceholderCard title="Settings Placeholder">
        <p>This page will allow users to adjust their notification preferences, UI themes, and AI behavior parameters.</p>
      </PlaceholderCard>
    </div>
  );
}
