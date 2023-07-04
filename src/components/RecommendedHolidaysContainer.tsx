import { FunctionComponent } from "react";
import { css } from "@emotion/css";
import RecommendedHolidayCardContaine from "./RecommendedHolidayCardContaine";

const RecommendedHolidaysContainer: FunctionComponent = () => {
  return (
    <div
      className={css`
        align-self: stretch;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 24px;
        text-align: left;
        font-size: 30px;
        color: #303030;
        font-family: Roboto;
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
        <b
          className={css`
            flex: 1;
            position: relative;
            letter-spacing: 0.04em;
            text-transform: capitalize;
            @media screen and (max-width: 420px) {
              font-size: 22px;
            }
          `}
        >
          Recommended Holidays
        </b>
        <button
          className={css`
            cursor: pointer;
            border: none;
            padding: 0;
            background-color: #fff;
            border-radius: 31px;
            width: 199.89px;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-start;
            gap: 10px;
            @media screen and (max-width: 960px) {
              display: none;
            }
          `}
        >
          <div
            className={css`
              position: relative;
              font-size: 18px;
              letter-spacing: 0.04em;
              font-weight: 500;
              font-family: Roboto;
              color: #1262ae;
              text-align: right;
              display: inline-block;
              width: 165.89px;
              flex-shrink: 0;
            `}
          >
            View all holidays
          </div>
          <img
            className={css`
              position: relative;
              width: 24px;
              height: 24px;
              overflow: hidden;
              flex-shrink: 0;
            `}
            alt=""
            src="/arrowright2.svg"
          />
        </button>
      </div>
      <div
        className={css`
          align-self: stretch;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-start;
          margin-left: -16px;
          margin-right: -16px;
          @media screen and (max-width: 960px) {
            margin-left: -16px;
            margin-right: -16px;
            flex-wrap: wrap;
          }
        `}
      >
        <RecommendedHolidayCardContaine
          packageName="/unsplash5mv818tzxeo@2x.png"
          packageDestination="Bali"
          packageDuration="4D3N"
          packagePrice="$899"
        />
        <RecommendedHolidayCardContaine
          packageName="/switzerlandimage@2x.png"
          packageDestination="Swiss"
          packageDuration="6D5N"
          packagePrice="$900"
        />
        <RecommendedHolidayCardContaine
          packageName="/boracayimage@2x.png"
          packageDestination="Boracay"
          packageDuration="5D4N"
          packagePrice="$699"
        />
        <RecommendedHolidayCardContaine
          packageName="/palawanimage@2x.png"
          packageDestination="Palawan"
          packageDuration="4D3N"
          packagePrice="$789"
        />
      </div>
      <div
        className={css`
          border-radius: 31px;
          background-color: #fff;
          width: 199.89px;
          display: none;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-start;
          gap: 10px;
          text-align: right;
          font-size: 18px;
          color: #1262ae;
          @media screen and (max-width: 960px) {
            display: flex;
            mrgin-top: 16px;
          }
        `}
      >
        <div
          className={css`
            position: relative;
            letter-spacing: 0.04em;
            font-weight: 500;
            display: inline-block;
            width: 165.89px;
            flex-shrink: 0;
            @media screen and (max-width: 960px) {
              width: auto;
            }
          `}
        >
          View all holidays
        </div>
        <img
          className={css`
            position: relative;
            width: 24px;
            height: 24px;
            overflow: hidden;
            flex-shrink: 0;
          `}
          alt=""
          src="/arrowright3.svg"
        />
      </div>
    </div>
  );
};

export default RecommendedHolidaysContainer;
