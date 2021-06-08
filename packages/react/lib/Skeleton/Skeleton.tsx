import type { ComponentProps } from "react";

type Props = ComponentProps<"div">;

const animName = "k42un0k0-react-skelton";
export default function Skelton(props: Props): JSX.Element {
  return (
    <div
      {...props}
      style={{
        width: 100,
        height: 100,
        backgroundColor: "#ddd",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>
        {`@keyframes ${animName} {
            0% {
              left: -100%;
            }
            25% {
              left: -100%;
            }
            100% {
              left: 100%;
            }
        }`}
      </style>
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          width: "100%",
          background: `linear-gradient(100deg, transparent 20%, rgba(255, 255, 255, 0.2
            ), transparent  80%)`,
          animationName: animName,
          animationDuration: "2s",
          animationIterationCount: "infinite",
        }}
      ></div>
    </div>
  );
}
