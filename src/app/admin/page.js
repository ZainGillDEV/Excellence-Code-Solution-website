import AdminDashboard from "@/components/admin/AdminDashboard";
import AdminLogin from "@/components/admin/AdminLogin";
import { isAdminConfigured, isSignedIn } from "@/lib/adminAuth";
import { countByStatus, listContacts, storageLabel } from "@/lib/contacts";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

export default async function AdminPage() {
  if (!isSignedIn()) {
    return <AdminLogin configured={isAdminConfigured()} />;
  }

  let contacts = [];
  let counts = { total: 0, new: 0, read: 0, replied: 0, archived: 0 };
  let loadError = "";

  try {
    contacts = await listContacts({ limit: 500 });
    counts = await countByStatus();
  } catch (error) {
    console.error("[admin] could not load enquiries:", error);
    loadError =
      "Could not reach the database. Check MONGODB_URI and that your IP is allowed in Atlas.";
  }

  if (loadError) {
    return (
      <div className="ecs-container py-5">
        <div className="ecs-alert ecs-alert--err">
          <i className="bi bi-exclamation-triangle-fill me-2" />
          {loadError}
        </div>
      </div>
    );
  }

  return (
    <AdminDashboard
      contacts={contacts}
      counts={counts}
      storage={storageLabel()}
    />
  );
}
