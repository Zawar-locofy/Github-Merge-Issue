import { FunctionComponent } from "react";
import { css } from "@emotion/css";
import RecentSearchesContainer from "./RecentSearchesContainer";

const UpcomingFlightContainer: FunctionComponent = () => {
  return (
    <div
      className={css`
        align-self: stretch;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        text-align: left;
        font-size: 18px;
        color: #303030;
        font-family: Roboto;
        @media screen and (max-width: 960px) {
          display: block;
        }
      `}
    >
      <div
        className={css`
          align-self: stretch;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          gap: 20px;
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
          Recent Searches
        </b>
        <div
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            gap: 36px;
            font-size: 24px;
            color: #1262ae;
            @media screen and (max-width: 960px) {
              flex-direction: column;
            }
          `}
        >
          <div
            className={css`
              align-self: stretch;
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              gap: 15px;
              @media screen and (max-width: 960px) {
                flex-direction: column;
              }
            `}
          >
            <RecentSearchesContainer
              originAirportCode="SIN"
              destinationAirportCode="/duration.svg"
              originAirportName="LAX"
              departureDate="Depart on: "
              returnDate="7 Sep 2021"
            />
            <RecentSearchesContainer
              originAirportCode="MY"
              destinationAirportCode="/duration1.svg"
              originAirportName="DUB"
              departureDate="Depart on:"
              returnDate=" 9 Sep 2021"
            />
          </div>
          <div
            className={css`
              align-self: stretch;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: center;
              gap: 20px;
              font-size: 18px;
              color: #cecece;
              @media screen and (max-width: 960px) {
                width: 100%;
              }
            `}
          >
            <div
              className={css`
                align-self: stretch;
                position: relative;
                letter-spacing: 0.04em;
                text-transform: uppercase;
              `}
            >
              Prepare for your trip
            </div>
            <div
              className={css`
                align-self: stretch;
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                justify-content: space-between;
                text-align: center;
                font-size: 15px;
                color: #8e8e94;
                @media screen and (max-width: 420px) {
                  flex-direction: row;
                  text-align: center;
                  flex-wrap: wrap;
                  justify-content: space-between;
                  margin-left: -28px;
                  margin-right: -28px;
                }
              `}
            >
              <div
                className={css`
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                  gap: 8px;
                  text-align: left;
                  @media screen and (max-width: 420px) {
                    padding-bottom: 20px;
                    box-sizing: border-box;
                    width: 33.33%;
                    text-align: center;
                  }
                `}
              >
                <img
                  className={css`
                    position: relative;
                    width: 65.39px;
                    height: 65.39px;
                  `}
                  alt=""
                  src="/hotel-icon.svg"
                />
                <div
                  className={css`
                    position: relative;
                    letter-spacing: 0.04em;
                  `}
                >
                  Hotel
                </div>
              </div>
              <div
                className={css`
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                  gap: 8px;
                  @media screen and (max-width: 420px) {
                    padding-bottom: 20px;
                    box-sizing: border-box;
                    width: 33.33%;
                    text-align: center;
                  }
                `}
              >
                <div
                  className={css`
                    position: relative;
                    width: 65.39px;
                    height: 65.39px;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: 0px;
                      border-radius: 16px;
                      background-color: #ff9b53;
                      width: 65.39px;
                      height: 65.39px;
                    `}
                  />
                  <img
                    className={css`
                      position: absolute;
                      height: 47.93%;
                      width: 48.38%;
                      top: 26.04%;
                      right: 25.81%;
                      bottom: 26.03%;
                      left: 25.81%;
                      max-width: 100%;
                      overflow: hidden;
                      max-height: 100%;
                    `}
                    alt=""
                    src="/ticket.svg"
                  />
                </div>
                <div
                  className={css`
                    position: relative;
                    letter-spacing: 0.04em;
                  `}
                >
                  Attractions
                </div>
              </div>
              <div
                className={css`
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                  gap: 8px;
                  @media screen and (max-width: 420px) {
                    padding-bottom: 20px;
                    box-sizing: border-box;
                    width: 33.33%;
                    text-align: center;
                  }
                `}
              >
                <img
                  className={css`
                    position: relative;
                    width: 65.39px;
                    height: 65.39px;
                  `}
                  alt=""
                  src="/eats-icon.svg"
                />
                <div
                  className={css`
                    position: relative;
                    letter-spacing: 0.04em;
                  `}
                >
                  Eats
                </div>
              </div>
              <div
                className={css`
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                  gap: 8px;
                  @media screen and (max-width: 420px) {
                    padding-bottom: 20px;
                    box-sizing: border-box;
                    width: 33.33%;
                    text-align: center;
                  }
                `}
              >
                <div
                  className={css`
                    position: relative;
                    width: 65.39px;
                    height: 65.39px;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: 0px;
                      border-radius: 16px;
                      background-color: #fdbf00;
                      width: 65.39px;
                      height: 65.39px;
                    `}
                  />
                  <img
                    className={css`
                      position: absolute;
                      height: 48.43%;
                      width: 41.17%;
                      top: 26.51%;
                      right: 29.42%;
                      bottom: 25.06%;
                      left: 29.42%;
                      max-width: 100%;
                      overflow: hidden;
                      max-height: 100%;
                    `}
                    alt=""
                    src="/vector.svg"
                  />
                </div>
                <div
                  className={css`
                    position: relative;
                    letter-spacing: 0.04em;
                  `}
                >
                  Commute
                </div>
              </div>
              <div
                className={css`
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                  gap: 8px;
                  @media screen and (max-width: 420px) {
                    padding-bottom: 20px;
                    box-sizing: border-box;
                    width: 33.33%;
                    text-align: center;
                  }
                `}
              >
                <div
                  className={css`
                    position: relative;
                    width: 70px;
                    height: 65.39px;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: 0px;
                      border-radius: 16px;
                      background-color: #4dabff;
                      width: 70px;
                      height: 65.39px;
                    `}
                  />
                  <img
                    className={css`
                      position: absolute;
                      height: 40.15%;
                      width: 40.52%;
                      top: 29.63%;
                      right: 29.74%;
                      bottom: 30.22%;
                      left: 29.74%;
                      max-width: 100%;
                      overflow: hidden;
                      max-height: 100%;
                    `}
                    alt=""
                    src="/vector1.svg"
                  />
                </div>
                <div
                  className={css`
                    position: relative;
                    letter-spacing: 0.04em;
                    display: inline-block;
                    width: 32.12px;
                  `}
                >
                  Taxi
                </div>
              </div>
              <div
                className={css`
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                  gap: 8px;
                  @media screen and (max-width: 420px) {
                    padding-bottom: 20px;
                    box-sizing: border-box;
                    width: 33.33%;
                    text-align: center;
                  }
                `}
              >
                <div
                  className={css`
                    position: relative;
                    width: 65.39px;
                    height: 65.39px;
                  `}
                >
                  <div
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: 0px;
                      border-radius: 16px;
                      background-color: #79ca00;
                      width: 65.39px;
                      height: 65.39px;
                    `}
                  />
                  <img
                    className={css`
                      position: absolute;
                      height: 35.6%;
                      width: 39.93%;
                      top: 32.2%;
                      right: 30.04%;
                      bottom: 32.2%;
                      left: 30.03%;
                      max-width: 100%;
                      overflow: hidden;
                      max-height: 100%;
                    `}
                    alt=""
                    src="/vector2.svg"
                  />
                </div>
                <div
                  className={css`
                    position: relative;
                    letter-spacing: 0.04em;
                  `}
                >
                  Movies
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingFlightContainer;
