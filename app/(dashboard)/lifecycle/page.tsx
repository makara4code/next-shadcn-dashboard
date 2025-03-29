import { LifecycleHeader } from "@/components/lifecycle-header";
import { LifecycleStages } from "@/components/lifecycle-stages";
import { LifecycleStats } from "@/components/lifecycle-stats";

export default function LifecycleDashboard() {
  return (
    <div className="px:4 lg:px-6 space-y-6 container mx-auto">
      <LifecycleHeader />
      <LifecycleStats />
      <LifecycleStages />
    </div>
  );
}
