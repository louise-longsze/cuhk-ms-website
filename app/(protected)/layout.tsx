import { Navbar } from "./_components/navbar";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return (
    <div className="min-h-screen w-full flex flex-col gap-y-10 items-center justify-center lg:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-primary bg-primary">
      <Navbar />
      {children}
    </div>
  );
};

export default ProtectedLayout;
