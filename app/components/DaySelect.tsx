import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const DaySelect = () => {
  return (
    <div className="flex flex-col">
      <h1 className="justify-center text-[#2B4141] pb-2 pl-1">
        Day of the week
      </h1>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Day" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Monday">Monday</SelectItem>
          <SelectItem value="Tuesday">Tuesday</SelectItem>
          <SelectItem value="Wednesday">Wednesday</SelectItem>
          <SelectItem value="Thursday">Thursday</SelectItem>
          <SelectItem value="Friday">Friday</SelectItem>
          <SelectItem value="Saturday">Saturday</SelectItem>
          <SelectItem value="Sunday">Sunday</SelectItem>
          <SelectItem value="All">All</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default DaySelect;
