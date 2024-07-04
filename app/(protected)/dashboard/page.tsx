import DashboardCard from "@/components/dashboard/dashboardcard";
import { currentUser } from "@/lib/auth";
import { Newspaper } from "lucide-react";

const DashboardPage = async () => {
  const user = await currentUser();

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between gap-5 mb-5">
        <DashboardCard
          title={"Test"}
          count={0}
          icon={<Newspaper className="text-slate-500" size={64} />}
        />
        <DashboardCard
          title={"Test"}
          count={0}
          icon={<Newspaper className="text-slate-500" size={64} />}
        />
        <DashboardCard
          title={"Test"}
          count={0}
          icon={<Newspaper className="text-slate-500" size={64} />}
        />
        <DashboardCard
          title={"Test"}
          count={0}
          icon={<Newspaper className="text-slate-500" size={64} />}
        />
      </div>
    </>
  );
};

export default DashboardPage;
