import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const BoroughSelect = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-[#2B4141] pb-2 pl-1">Location</h1>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Borough" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Manhattan">Manhattan</SelectItem>
          <SelectItem value="Brooklyn">Brooklyn</SelectItem>
          <SelectItem value="Queens">Queens</SelectItem>
          <SelectItem value="Bronx">Bronx</SelectItem>
          <SelectItem value="Staten-Island">State Island</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default BoroughSelect;
