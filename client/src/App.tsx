import { useEffect, useState } from "react";
import "./App.css";
import Timeline from "./Timeline/Timeline";
import { getTimeline } from "./services/TimelineService";
import { ITimelineMetadata } from "./models/models";

function App() {
  const [metadata, setMetadata] = useState<ITimelineMetadata[]>([]);

  useEffect(() => {
    getTimeline("ishu", "1").then((metadata) => {
      setMetadata(metadata);
    });
  }, []);

  return (
    <>
      <Timeline imagesAsCarousel={false} metadata={metadata}></Timeline>
    </>
  );
}

export default App;
