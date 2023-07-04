import { FunctionComponent } from "react";
import { css } from "@emotion/css";

type RecommendedHolidayCardContaineType = {
  packageName?: string;
  packageDestination?: string;
  packageDuration?: string;
  packagePrice?: string;
};

const RecommendedHolidayCardContaine: FunctionComponent<
  RecommendedHolidayCardContaineType
> = ({ packageName, packageDestination, packageDuration, packagePrice }) => {
  return (
    <button
      className={css`
        cursor: pointer;
        border: none;
        padding: 0px 16px;
        background-color: transparent;
        flex: 1;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        align-items: center;
        justify-content: flex-start;
        width: 25%;
        @media screen and (max-width: 960px) {
          width: 50%;
          margin-bottom: 32px;
        }
        @media screen and (max-width: 420px) {
          width: 100%;
          margin-bottom: 32px;
        }
      `}
    >
      <img
        className={css`
          align-self: stretch;
          position: relative;
          border-radius: 10px 10px 0px 0px;
          max-width: 100%;
          overflow: hidden;
          height: 242px;
          flex-shrink: 0;
          object-fit: cover;
        `}
        alt=""
        src={packageName}
      />
      <div
        className={css`
          align-self: stretch;
          border-radius: 0px 0px 10px 10px;
          background-color: #fff;
          border: 1px solid #eaeaea;
          display: flex;
          flex-direction: column;
          padding: 20px 16px;
          align-items: center;
          justify-content: center;
        `}
      >
        <div
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
          `}
        >
          <div
            className={css`
              flex: 1;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: flex-start;
              gap: 3px;
            `}
          >
            <div
              className={css`
                align-self: stretch;
                position: relative;
                font-size: 20px;
                letter-spacing: 0.02em;
                font-weight: 500;
                font-family: Roboto;
                color: #424242;
                text-align: left;
              `}
            >
              {packageDestination}
            </div>
            <div
              className={css`
                align-self: stretch;
                position: relative;
                font-size: 16px;
                letter-spacing: 0.02em;
                font-family: Roboto;
                color: #999;
                text-align: left;
              `}
            >
              {packageDuration}
            </div>
          </div>
          <div
            className={css`
              position: relative;
              font-size: 32px;
              line-height: 34px;
              font-family: "Baloo Bhai";
              color: #1262af;
              text-align: right;
            `}
          >
            {packagePrice}
          </div>
        </div>
      </div>
    </button>
  );
};

export default RecommendedHolidayCardContaine;
