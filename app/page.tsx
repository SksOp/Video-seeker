import VideoPlayer from "@/components/video";
import Seeker, { DescriptionWrapper } from "@/packages/seek";
import * as React from "react";
import { render } from "react-dom";

// import VideoPlayer from "./video";

// import "./styles.css";

const videoJsOptions = {
  sources: [
    {
      src: "//vjs.zencdn.net/v/oceans.mp4",
      type: "video/mp4",
    },
  ],
};

const description = `
This a long dummy description . Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sed aliquam ultricies, nunc sapien ultricies nunc, quis ultricies nisl nunc sed nunc. Donec euismod, nisl sed aliquam ultricies, nunc sapien ultricies nunc, quis ultricies nisl nunc sed nunc. Donec euismod, nisl sed aliquam ultricies, nunc sapien ultricies nunc, quis ultricies nisl nunc sed nunc. Donec euismod, nisl sed aliquam ultricies, nunc sapien ultricies nunc, quis ultricies nisl nunc sed nunc. Donec euismod, nisl sed aliquam ultricies, nunc sapien ultricies nunc, quis ultricies nisl nunc sed nunc.
#(00:00) timestamp1
#(00:20) timestamp2
#(00:30) timestamp3
#(00:40) timestamp4
`;

function App() {
  console.log(Seeker.DescriptionWrapper);
  return (
    <div className="App">
      <Seeker>
        <VideoPlayer options={videoJsOptions} />
        <DescriptionWrapper className="hello">{description}</DescriptionWrapper>
      </Seeker>
    </div>
  );
}

export default App;
