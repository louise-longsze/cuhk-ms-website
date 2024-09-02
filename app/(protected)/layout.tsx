import { Navbar } from "./_components/navbar";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return (
    <div className="min-h-screen w-full flex flex-col gap-y-10 items-center mt-[80px] justify-start bg-gray-300">
      <Navbar />
      {children}
    </div>
  );
};

export default ProtectedLayout;
