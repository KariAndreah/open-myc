import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const SearchButton = () => {
  return (
    <div>
      <Button className="gap-2">
        <h1 className="text-white">Search</h1>
        <Search className="h-4 w-4"></Search>
      </Button>
    </div>
  );
};

export default SearchButton;
