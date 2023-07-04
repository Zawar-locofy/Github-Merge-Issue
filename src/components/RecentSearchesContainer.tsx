import { FunctionComponent } from "react";
import { css } from "@emotion/css";

type RecentSearchesContainerType = {
  originAirportCode?: string;
  destinationAirportCode?: string;
  originAirportName?: string;
  departureDate?: string;
  returnDate?: string;
};

const RecentSearchesContainer: FunctionComponent<
  RecentSearchesContainerType
> = ({
  originAirportCode,
  destinationAirportCode,
  originAirportName,
  departureDate,
  returnDate,
}) => {
  return (
    <div
      className={css`
        flex: 1;
        border-radius: 8px;
        border: 1px solid #eaeaea;
        display: flex;
        flex-direction: column;
        padding: 20px;
        align-items: center;
        justify-content: center;
        gap: 21px;
        text-align: left;
        font-size: 24px;
        color: #1262ae;
        font-family: Roboto;
        @media screen and (max-width: 1200px) {
          width: 520px;
        }
        @media screen and (max-width: 960px) {
          width: 100%;
          display: block;
          margin-bottom: 30px;
          flex: unset;
          align-self: stretch;
        }
      `}
    >
      <div
        className={css`
          align-self: stretch;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
        `}
      >
        <div
          className={css`
            position: relative;
            width: 44.73px;
            height: 28px;
          `}
        >
          <b
            className={css`
              position: absolute;
              top: 0px;
              left: 0px;
              letter-spacing: 0.04em;
              text-transform: capitalize;
              display: inline-block;
              width: 44.73px;
            `}
          >
            {originAirportCode}
          </b>
        </div>
        <img
          className={css`
            position: relative;
            width: 117.35px;
            height: 24px;
          `}
          alt=""
          src={destinationAirportCode}
        />
        <div
          className={css`
            position: relative;
            width: 51.27px;
            height: 28px;
            text-align: right;
          `}
        >
          <b
            className={css`
              position: absolute;
              top: 0px;
              left: 0px;
              letter-spacing: 0.04em;
              text-transform: capitalize;
              display: inline-block;
              width: 51.27px;
            `}
          >
            {originAirportName}
          </b>
        </div>
      </div>
      <div
        className={css`
          position: relative;
          font-size: 20px;
          letter-spacing: 0.04em;
          text-transform: capitalize;
          color: #000;
        `}
      >
        <b>{departureDate}</b>
        <span>{returnDate}</span>
      </div>
    </div>
  );
};

export default RecentSearchesContainer;
