import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <div className="bottom-0 w-full p-4 border-t bg-blue-100">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <Logo />
        <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
          <Button size="sm" variant="ghost">
            私隱政策
          </Button>
          <text>香港中文大學醫學院2024 ©版權所有</text>
        </div>
      </div>
    </div>
  );
};
