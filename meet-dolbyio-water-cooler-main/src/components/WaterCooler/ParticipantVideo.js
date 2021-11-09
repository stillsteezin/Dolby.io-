import { useRef, useEffect } from 'react';

// Inspired by:
// https://github.com/dolbyio-samples/dolbyio-web-file-presentation-service/blob/362743a41466d66567fd81ecd52b15f605893925/client/components/attendeeVideo.js#L28

const size = 40;

export const ParticipantVideo = ({ position, videoStream, isSelf }) => {
  const ref = useRef();

  // add mirror class to video if current participant
  let addFlipClass = isSelf ? 'flipped' : '';

  let isSafari = navigator.vendor === 'Apple Computer, Inc.' ? true : false;

  let topPosition = isSafari ? position[1] + 70 : 0;
  let leftPosition = isSafari ? position[0] + 265 : 0;

  useEffect(() => {
    navigator.attachMediaStream(ref.current, videoStream);
  }, [videoStream]);

  return (
    <g
      className="avatar-video"
      transform={`translate(${position[0] - size / 2},${
        position[1] - size / 2
      })`}
    >
      <foreignObject width={size} height={size}>
        <div>
          <video
            class={addFlipClass}
            ref={ref}
            style={{
              position: 'absolute',
              top: `${topPosition}px`,
              left: `${leftPosition}px`,
              borderRadius: `${size / 2}px`,
            }}
            playsInline
            autoPlay
            muted
          ></video>
        </div>
      </foreignObject>
    </g>
  );
};
