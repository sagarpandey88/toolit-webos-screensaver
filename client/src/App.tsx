import { useEffect, useState } from "react";
import "./App.css";
import Timeline from "./components/Timeline/Timeline";
import { getTimeline } from "./services/TimelineService";
import { ITimelineMetadata } from "./models/models";
import ImageUpload from "./components/ImageUpload/ImageUpload";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { createTheme, ThemeProvider, CssBaseline, Switch, FormControlLabel } from '@mui/material';


function App() {
  const [metadata, setMetadata] = useState<ITimelineMetadata[]>([]);

  const [mode, setMode] = useState<string>("view");

  useEffect(() => {
    getTimeline("ishu", "1").then((metadata) => {
      setMetadata(metadata);
    });
  }, []);

  const onUploadClick = () => {
    setMode("upload");
  };

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div>
          <button onClick={onUploadClick}> Upload </button>
        </div>
        {mode == "view" && (
          <Timeline imagesAsCarousel={false} metadata={metadata}></Timeline>
        )}
        {mode == "upload" && <ImageUpload></ImageUpload>}
      </LocalizationProvider>
    </>
  );
}

export default App;
