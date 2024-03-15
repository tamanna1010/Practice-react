import { PlayIcon, CogIcon, SpeakerWaveIcon } from "@heroicons/react/24/solid";
import Slider from "@mui/material/Slider";
const TranscriptComponent = (props) => {
  const { title } = props;
  return (
    <>
      <div className="ml-5 mb-5">{title}</div>
      <div className="w-[95%] p-2 bg-app-layover ml-5">
        <div className="flex justify-start items-center ml-5 text-white">
          <PlayIcon className="w-5 h-5" />
          <Slider
            marks={false}
            max={10}
            min={0}
            size="small"
            valueLabelDisplay="auto"
            sx={{ width: "80%", margin: "0 20px" }}
          />
          <CogIcon className="w-5 h-5" />
          <p className="ml-2">02:43</p>
          <SpeakerWaveIcon className="w-5 h-5 ml-2" />
          <Slider
            marks={false}
            max={10}
            min={0}
            size="small"
            valueLabelDisplay="auto"
            sx={{ width: "10%", margin: "0 20px" }}
          />
        </div>
      </div>
    </>
  );
};
export default TranscriptComponent;
