// preview page for newly created UI components
import Avatar from "@/components/Avatar";

export default function PreviewPage() {
  return (
    <div className="page-content">
      <h2>Previewasdasd</h2>

      <section>
        <h3>Avatar</h3>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            alignItems: "center",
            marginTop: "0.5rem",
          }}
        >
          <Avatar name="john" />
          <Avatar name="Mohammed" />
          <Avatar name="JohnDoe" />
          <Avatar name="UserStatsCard" />
        </div>
      </section>
    </div>
  );
}
