import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { ScrollArea } from "@/components/ui/scroll-area";

const TimeSelect: React.FC<TimeSelectProps> = ({ period }) => {
  return (
    <div className="flex flex-col">
      <h1 className="pb-2 pl-1">{period}</h1>
      <Select>
        <SelectTrigger className="w-[180px] ">
          <SelectValue placeholder={period} />
        </SelectTrigger>
        <SelectContent>
          <ScrollArea>
            <SelectItem value="24:00">12:00 am</SelectItem>
            <SelectItem value="01:00">1:00 am</SelectItem>
            <SelectItem value="02:00">2:00 am</SelectItem>
            <SelectItem value="03:00">3:00 am</SelectItem>
            <SelectItem value="04:00">4:00 am</SelectItem>
            <SelectItem value="05:00">5:00 am</SelectItem>
            <SelectItem value="06:00">6:00 am</SelectItem>
            <SelectItem value="07:00">7:00 am</SelectItem>
            <SelectItem value="08:00">8:00 am</SelectItem>
            <SelectItem value="09:00">9:00 am</SelectItem>
            <SelectItem value="10:00">10:00 am</SelectItem>
            <SelectItem value="11:00">11:00 am</SelectItem>
            <SelectItem value="12:00">12:00 pm</SelectItem>
            <SelectItem value="13:00">1:00 pm</SelectItem>
            <SelectItem value="14:00">2:00 pm</SelectItem>
            <SelectItem value="15:00">3:00 pm</SelectItem>
            <SelectItem value="16:00">4:00 pm</SelectItem>
            <SelectItem value="17:00">5:00 pm</SelectItem>
            <SelectItem value="18:00">6:00 pm</SelectItem>
            <SelectItem value="19:00">7:00 pm</SelectItem>
            <SelectItem value="20:00">8:00 pm</SelectItem>
            <SelectItem value="21:00">9:00 pm</SelectItem>
            <SelectItem value="22:00">10:00 pm</SelectItem>
            <SelectItem value="23:00">11:00 pm</SelectItem>
            <SelectItem value="all-day">All day</SelectItem>
          </ScrollArea>
        </SelectContent>
      </Select>
    </div>
  );
};

type TimeSelectProps = {
  period: String;
};

export default TimeSelect;
