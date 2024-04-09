import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import NavItems from "@/components/shared/navitems";
import { HiOutlineMenu } from "react-icons/hi";
import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";

const MobileNav = () => {
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
          <HiOutlineMenu className="cursor-pointer h-8 w-8" />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
          <Image src="/logo.svg" alt="logo" width={128} height={38} />
          <LoginButton asChild>
            <Button variant="default" size="lg">
              登入
            </Button>
          </LoginButton>
          <Separator className="border border-gray-200" />
          <NavItems />
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
