import { FunctionComponent } from "react";
import { Property } from "csstype";
import { css } from "@emotion/css";

type DestinationContainerType = {
  destinationPrice?: string;
  destinationName?: string;
  destinationPriceRange?: string;

  /** Style props */
  propWidth?: Property.Width;
  propDisplay?: Property.Display;
  propWidth1?: Property.Width;
  propLeft?: Property.Left;
};

const DestinationContainer: FunctionComponent<DestinationContainerType> = ({
  destinationPrice,
  destinationName,
  destinationPriceRange,
  propWidth,
  propDisplay,
  propWidth1,
  propLeft,
}) => {
  return (
    <button
      className={css`
        cursor: pointer;
        border: none;
        padding: 0px 16px;
        background-color: transparent;
        width: 25%;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        align-items: center;
        justify-content: center;
        @media screen and (max-width: 960px) {
          padding: 16px;
          box-sizing: border-box;
          width: 50%;
        }
        @media screen and (max-width: 420px) {
          width: 100%;
        }
      `}
    >
      <div
        className={css`
          align-self: stretch;
          position: relative;
          border-radius: 10px;
          height: 182px;
          overflow: hidden;
          flex-shrink: 0;
        `}
      >
        <img
          className={css`
            position: absolute;
            height: 100%;
            width: 100%;
            top: 0px;
            right: 0px;
            bottom: 0px;
            left: 0px;
            max-width: 100%;
            overflow: hidden;
            max-height: 100%;
            object-fit: cover;
          `}
          alt=""
          src={destinationPrice}
        />
        <div
          className={css`
            position: absolute;
            width: calc(100% - 0.59px);
            top: 0px;
            right: 0.29px;
            left: 0.29px;
            display: flex;
            flex-direction: row;
            padding: 8px 12px;
            box-sizing: border-box;
            align-items: flex-start;
            justify-content: flex-start;
          `}
        >
          <b
            className={css`
              flex: 1;
              position: relative;
              font-size: 20px;
              letter-spacing: 0.02em;
              font-family: Roboto;
              color: #fff;
              text-align: left;
            `}
          >
            {destinationName}
          </b>
          <div
            className={css`
              position: relative;
              width: 90.92px;
              height: 59px;
              width: ${propWidth};
            `}
          >
            <div
              className={css`position: absolute;
top: 21px;
left: 0px;
font-size: 38px;
line-height: 38px;
font-family: 'Baloo Bhai';
color: #fff;
text-align: right;
display: inline-block;
width: 90.92px;
display: ${propDisplay}
width: ${propWidth1}
`}
            >
              {destinationPriceRange}
            </div>
            <div
              className={css`
                position: absolute;
                top: 0px;
                left: 38.39px;
                font-size: 16px;
                letter-spacing: 0.04em;
                text-transform: uppercase;
                font-family: Roboto;
                color: #fff;
                text-align: right;
                display: inline-block;
                width: 52.53px;
                left: ${propLeft};
              `}
            >
              from
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default DestinationContainer;
