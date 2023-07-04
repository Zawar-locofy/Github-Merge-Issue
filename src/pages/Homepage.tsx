import { FunctionComponent } from "react";
import Header from "../components/Header";
import SearchSection from "../components/SearchSection";
import { css } from "@emotion/css";
import UpcomingFlightContainer from "../components/UpcomingFlightContainer";
import PopularDestinationsContainer from "../components/PopularDestinationsContainer";
import RecommendedHolidaysContainer from "../components/RecommendedHolidaysContainer";
import PopularStaysContainer from "../components/PopularStaysContainer";
import WeeklyUpdatesContainer from "../components/WeeklyUpdatesContainer";
import Footer from "../components/Footer";

const Homepage: FunctionComponent = () => {
  return (
    <div
      className={css`
        position: relative;
        background-color: #fff;
        width: 100%;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        gap: 69px;
        &:hover {
          background: linear-gradient(#fff, #fff), #87550a;
        }
        @media screen and (max-width: 420px) {
          width: 100%;
          &:hover {
            background-color: #f99a0e;
          }
        }
      `}
    >
      <div
        className={css`
          align-self: stretch;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
        `}
      >
        <Header />
        <SearchSection />
      </div>
      <div
        className={css`
          width: 100%;
          display: flex;
          flex-direction: column;
          padding: 0px 80px;
          box-sizing: border-box;
          align-items: center;
          justify-content: flex-start;
          gap: 80px;
          max-width: 1280px;
          @media screen and (max-width: 960px) {
            padding-left: 30px;
            padding-right: 30px;
            box-sizing: border-box;
          }
        `}
      >
        <UpcomingFlightContainer />
        <PopularDestinationsContainer />
        <RecommendedHolidaysContainer />
        <PopularStaysContainer />
      </div>
      <div
        className={css`
          align-self: stretch;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
        `}
      >
        <WeeklyUpdatesContainer />
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
