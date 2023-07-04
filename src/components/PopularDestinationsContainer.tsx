import { FunctionComponent } from "react";
import { css } from "@emotion/css";
import DestinationContainer from "./DestinationContainer";

const PopularDestinationsContainer: FunctionComponent = () => {
  return (
    <div
      className={css`
        align-self: stretch;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 24px;
        text-align: left;
        font-size: 18px;
        color: #1262ae;
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
          @media screen and (max-width: 420px) {
            flex-direction: column;
            align-self: flex-start;
          }
        `}
      >
        <div
          className={css`
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            gap: 6px;
            @media screen and (max-width: 420px) {
              flex: unset;
              align-self: stretch;
            }
          `}
        >
          <b
            className={css`
              align-self: stretch;
              position: relative;
              letter-spacing: 0.04em;
              text-transform: uppercase;
            `}
          >
            Plan your next trip
          </b>
          <b
            className={css`
              align-self: stretch;
              position: relative;
              font-size: 30px;
              letter-spacing: 0.04em;
              text-transform: capitalize;
              color: #303030;
              @media screen and (max-width: 420px) {
                font-size: 22px;
              }
            `}
          >
            Most Popular Destinations
          </b>
        </div>
        <button
          className={css`
            cursor: pointer;
            border: none;
            padding: 0;
            background-color: #fff;
            border-radius: 31px;
            width: 231.38px;
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
              width: 197.33px;
              flex-shrink: 0;
            `}
          >
            View all destinations
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
            src="/arrowright.svg"
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
            margin-top: -16px;
            margin-bottom: -16px;
          }
        `}
      >
        <DestinationContainer
          destinationPrice="/parisimage@2x.png"
          destinationName="Paris"
          destinationPriceRange="$699"
        />
        <DestinationContainer
          destinationPrice="/greeceimage@2x.png"
          destinationName="Greece"
          destinationPriceRange="$1079"
          propWidth="99.92px"
          propDisplay="inline-block"
          propWidth1="unset"
          propLeft="47.39px"
        />
        <DestinationContainer
          destinationPrice="/norwayimage@2x.png"
          destinationName="Norway"
          destinationPriceRange="$895"
          propWidth="90.92px"
          propDisplay="inline-block"
          propWidth1="90.92px"
          propLeft="38.39px"
        />
        <DestinationContainer
          destinationPrice="/tuscanyimage@2x.png"
          destinationName="Tuscany"
          destinationPriceRange="$1245"
          propWidth="100.62px"
          propDisplay="inline-block"
          propWidth1="100.62px"
          propLeft="48.09px"
        />
      </div>
      <div
        className={css`
          border-radius: 31px;
          background-color: #fff;
          width: 231.38px;
          display: none;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-start;
          gap: 10px;
          text-align: right;
          @media screen and (max-width: 960px) {
            display: flex;
            margin-top: 16px;
          }
        `}
      >
        <div
          className={css`
            position: relative;
            letter-spacing: 0.04em;
            font-weight: 500;
            display: inline-block;
            width: 197.33px;
            flex-shrink: 0;
            @media screen and (max-width: 960px) {
              width: auto;
            }
          `}
        >
          View all destinations
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
          src="/arrowright1.svg"
        />
      </div>
    </div>
  );
};

export default PopularDestinationsContainer;
