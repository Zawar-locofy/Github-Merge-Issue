import { FunctionComponent, useCallback } from "react";
import { css } from "@emotion/css";
import HotelCardForm from "./HotelCardForm";

const PopularStaysContainer: FunctionComponent = () => {
  const onViewAllStaysButtonClick = useCallback(() => {
    // Please sync "Hotels Page" to the project
  }, []);

  return (
    <div
      className={css`
        align-self: stretch;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 20px;
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
          justify-content: center;
        `}
      >
        <div
          className={css`
            flex: 1;
            position: relative;
            height: 35px;
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
              width: 1105.34px;
              @media screen and (max-width: 420px) {
                font-size: 22px;
              }
            `}
          >
            Popular Stays
          </b>
        </div>
        <button
          className={css`
            cursor: pointer;
            border: none;
            padding: 0;
            background-color: #fff;
            border-radius: 31px;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-start;
            gap: 10px;
            @media screen and (max-width: 960px) {
              display: none;
            }
          `}
          onClick={onViewAllStaysButtonClick}
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
              width: 140.66px;
              flex-shrink: 0;
            `}
          >
            View all stays
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
            src="/arrowright4.svg"
          />
        </button>
      </div>
      <div
        className={css`
          align-self: stretch;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          margin-left: -12px;
          margin-right: -12px;
          font-size: 16px;
          @media screen and (max-width: 1200px) {
            padding-right: 40px;
            box-sizing: border-box;
            margin-left: -12px;
            margin-right: -50px;
          }
          @media screen and (max-width: 960px) {
            margin-right: -50px;
            margin-left: -12px;
          }
          @media screen and (max-width: 420px) {
            flex-direction: column;
            padding-right: 0px;
            box-sizing: border-box;
            margin-right: -12px;
            margin-left: -12px;
          }
        `}
      >
        <HotelCardForm
          hotelImageId="/unsplashrlwe8f8anoc@2x.png"
          hotelName="Entire bungalow"
          hotelPrice="Matterhorn Suites"
          hotelRating="$575/night"
          hotelReviewCount="/video.svg"
          hotelReviewText="(60 reviews)"
          hotelRatingText="4.9"
          hotelDimensions="/vector3.svg"
        />
        <HotelCardForm
          hotelImageId="/unsplashtsn8bpopveo@2x.png"
          hotelName="2-Story beachfront suite"
          hotelPrice="Discovery Shores"
          hotelRating="$360/night"
          hotelReviewCount="/video1.svg"
          hotelReviewText="(116 reviews)"
          hotelRatingText="4.8"
          hotelDimensions="/vector4.svg"
          propFlex="1"
          propGap="11px"
          propWidth="37.54%"
          propRight="62.46%"
        />
        <HotelCardForm
          hotelImageId="/unsplashrlwe8f8anoc1@2x.png"
          hotelName="Single deluxe hut"
          hotelPrice="Arctic Hut "
          hotelRating="$420/night"
          hotelReviewCount="/video.svg"
          hotelReviewText="(78 reviews)"
          hotelRatingText="4.7"
          hotelDimensions="/vector5.svg"
          propFlex="1"
          propGap="5px"
          propWidth="37.58%"
          propRight="62.42%"
        />
        <HotelCardForm
          hotelImageId="/unsplashyqrybvxug5q@2x.png"
          hotelName="Deluxe King Room"
          hotelPrice="Lake Louise Inn"
          hotelRating="$244/night"
          hotelReviewCount="/video2.svg"
          hotelReviewText="(63 reviews)"
          hotelRatingText="4.6"
          hotelDimensions="/vector6.svg"
          propFlex="unset"
          propGap="11px"
          propWidth="37.54%"
          propRight="62.46%"
        />
      </div>
      <div
        className={css`
          border-radius: 31px;
          background-color: #fff;
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
            width: 140.66px;
            flex-shrink: 0;
            @media screen and (max-width: 960px) {
              width: auto;
            }
          `}
        >
          View all stays
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
          src="/arrowright5.svg"
        />
      </div>
    </div>
  );
};

export default PopularStaysContainer;
