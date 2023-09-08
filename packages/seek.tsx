"use client";
import React, {
  createContext,
  useContext,
  useRef,
  useEffect,
  ReactNode,
} from "react";

const description = `
This a long dummy description . Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl sed aliquam ultricies, nunc sapien ultricies nunc, quis ultricies nisl nunc sed nunc. Donec euismod, nisl sed aliquam ultricies, nunc sapien ultricies nunc, quis ultricies nisl nunc sed nunc. Donec euismod, nisl sed aliquam ultricies, nunc sapien ultricies nunc, quis ultricies nisl nunc sed nunc. Donec euismod, nisl sed aliquam ultricies, nunc sapien ultricies nunc, quis ultricies nisl nunc sed nunc. Donec euismod, nisl sed aliquam ultricies, nunc sapien ultricies nunc, quis ultricies nisl nunc sed nunc.
#(00:00) timestamp1
#(00:20) timestamp2
#(00:30) timestamp3
#(00:40) timestamp4
`;

// using regex to find timestamps
const findTimestamps = (description: string) => {
  const regex = /#(\(.*?\))/g;
  const timestamps = description.match(regex);
  return timestamps;
};

interface SeekerContextType {
  videoRef: React.RefObject<HTMLVideoElement>;
}

const SeekerContext = createContext<SeekerContextType | undefined>(undefined);

interface SeekerProps {
  children: ReactNode;
}

const Seeker: React.FC<SeekerProps> & {
  DescriptionWrapper: React.FC<{ children: ReactNode }>;
} = ({ children }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) return;

    const videoElement = document.querySelector(".seeker video");
    if (videoElement) {
      videoRef.current = videoElement as HTMLVideoElement;
    }
  }, []);

  return (
    <SeekerContext.Provider value={{ videoRef }}>
      <div className="seeker">{children}</div>
    </SeekerContext.Provider>
  );
};

interface DescriptionWrapperProps {
  children: ReactNode;
}
const DescriptionWrapper: React.FC<
  DescriptionWrapperProps & React.HTMLProps<HTMLDivElement>
> = ({ children, ...props }) => {
  const context = useContext(SeekerContext);

  if (!context) {
    throw new Error("DescriptionWrapper must be used within a Seeker");
  }

  const { videoRef } = context;

  const seekToTimestamp = (time: number) => {
    if (videoRef && videoRef.current) {
      videoRef.current.currentTime = time;
    }
  };

  return <p>{children}</p>;
};

Seeker.DescriptionWrapper = DescriptionWrapper;
export { DescriptionWrapper };
export default Seeker;
