import {
  PhoneIcon,
  UserIcon,
  ArrowTrendingUpIcon,
  ClockIcon,
} from "@heroicons/react/24/solid";
const CallOverviewComponent = (props) => {
  const { title } = props;
  return (
    <>
      <div className="ml-[16px] mt-5 mb-5">{title}</div>
      <div className="w-[95%] h-[20%] grid grid-cols-4 bg-app-layover ml-5 mb-5">
        <CallOverviewCardsV1
          Icon={PhoneIcon}
          name="#9876"
          property="Call ID"
          color={"text-[#28C76F]"}
          background={"bg-[#28C76F]/[0.125]"}
        />
        <CallOverviewCardsV1
          Icon={UserIcon}
          name="Binod Verma"
          property="Agent Name"
          color={"text-[#00CFE8]"}
          background={"bg-[#00CFE8]/[0.125]"}
        />
        <CallOverviewCardsV1
          Icon={ArrowTrendingUpIcon}
          name="008970"
          property="Customer Number"
          color={"text-[#EA5455]"}
          background={"bg-[#EA5455]/[0.125]"}
        />
        <CallOverviewCardsV1
          Icon={ClockIcon}
          name="21-07-2023"
          property="Call Time Stamp"
          color={"text-[#28C76F]"}
          background={"bg-[#28C76F]/[0.125]"}
        />
      </div>
      <div className="grid grid-cols-3 w-[97%] mb-5">
        <CallOverviewCardsV2
          Icon={ClockIcon}
          name="03:56"
          property="AHT"
          color={"text-[#07B4CD]"}
          background={"bg-[#07B4CD]/[0.125]"}
        />
        <CallOverviewCardsV2
          Icon={ClockIcon}
          name="PTP"
          property="Desposition Status"
          color={"text-[#FF9F43]"}
          background={"bg-[#FF9F43]/[0.125]"}
        />
        <CallOverviewCardsV2
          Icon={ClockIcon}
          name="86"
          property="Compliance Status"
          color={"text-[#EA5455]"}
          background={"bg-[#EA5455]/[0.125]"}
        />
      </div>
    </>
  );
};
const CallOverviewCardsV2 = (props) => {
  const { Icon, name, property, color, background } = props;
  return (
    <>
      <div className="flex flex-col justify-center items-center p-5 bg-app-layover ml-5">
        <Icon
          className={`h-12 w-12 p-2 m-2 ${color} ${background} rounded-full`}
        />
        <p className={`${color} font-bold `}>{name}</p>
        <p className="text-sm text-sub-title">{property}</p>
      </div>
    </>
  );
};
const CallOverviewCardsV1 = (props) => {
  const { Icon, name, property, color, background } = props;
  return (
    <>
      <div className="flex items-center p-5">
        <Icon
          className={`h-12 w-12 p-2 m-2 ${color} ${background} rounded-full`}
        />
        <div className="ml-2">
          <p className={`${color} font-bold`}>{name}</p>
          <p className="text-sm text-sub-title">{property}</p>
        </div>
      </div>
    </>
  );
};
export default CallOverviewComponent;
