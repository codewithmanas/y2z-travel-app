import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="text-2xl font-bold">
          <span className="text-primary">Y2Z</span>
          <span className="text-gray-800"> TRAVEL</span>
        </div>
      </div>
      <Button variant="ghost" size="icon">
        <Menu className="h-5 w-5" />
      </Button>
    </header>
  );
};

export default Header;