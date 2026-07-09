import PageHeader from "@/components/PageHeader";
import PlaceholderCard from "@/components/PlaceholderCard";

export default function Profile() {
  return (
    <div>
      <PageHeader title="Profile" description="Manage your personal information and account details." />
      <PlaceholderCard title="Profile Placeholder">
        <p>This page will let users manage their personal details, subscription status, and linked accounts.</p>
      </PlaceholderCard>
    </div>
  );
}
