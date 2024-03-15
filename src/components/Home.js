import SearchComponent from "./SearchComponent";
import CallOverviewComponent from "./CallOverviewComponent";
import TranscriptComponent from "./TranscriptComponent";
const Home = () => {
  return (
    <>
      <div className="h-[100vh] w-[calc(100vw-250px)] text-white">
        <SearchComponent />
        <CallOverviewComponent title="Call Overview" />
        <TranscriptComponent title="Transcript Analysis Section" />
      </div>
    </>
  );
};
export default Home;
