import { FunctionComponent } from "react";
import { Property } from "csstype";
import { css } from "@emotion/css";

type LetsExploreType = {
  letsExploreTravelTheWorld?: string;

  /** Style props */
  letsExploreTravelTheWorldAnimationName?: Property.AnimationName;
};

const LetsExplore: FunctionComponent<LetsExploreType> = ({
  letsExploreTravelTheWorld,
  letsExploreTravelTheWorldAnimationName,
}) => {
  return (
    <div
      className={css`
        align-self: stretch;
        position: relative;
        font-size: 61px;
        line-height: 67px;
        font-family: "Baloo Bhai";
        color: #fff;
        text-align: center;
        @media screen and (max-width: 420px) {
          font-size: 42px;
          line-height: 48px;
        }
        animation-name: ${letsExploreTravelTheWorldAnimationName};
      `}
    >
      {letsExploreTravelTheWorld}
    </div>
  );
};

export default LetsExplore;
