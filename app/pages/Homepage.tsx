import { Button } from "@/components/ui/button";
import DaySelect from "../components/DaySelect";
import BoroughSelect from "../components/BoroughSelect";
import TimeSelect from "../components/TimeSelect";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FreeSwitch from "../components/FreeSwitch";
import SearchButton from "../components/SearchButton";
import { BoroughCombobox } from "../components/BoroughCombobox";
import { DayCombobox } from "../components/DayCombobox";

const Homepage = () => {
  return (
    <div>
      <div className="flex flex-col items-center mx-auto my-3">
        <h1 className="text-3xl text-[#2B4141] text-center">
          Welcome to Open MYC, find comedy open mics in all 5 boroughs
        </h1>
      </div>
      <Card className="flex flex-row flex-wrap items-center gap-5 justify-center align-middle bg-gray-50 h-auto p-20 ">
        <BoroughCombobox />
        <DayCombobox />
        <TimeSelect period={"Start Time"} />
        <TimeSelect period={"End Time"} />
        <FreeSwitch />
        <SearchButton />
      </Card>
    </div>
  );
};

export default Homepage;
