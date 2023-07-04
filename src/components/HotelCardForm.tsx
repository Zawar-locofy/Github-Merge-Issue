import { FunctionComponent } from "react";
import { Property } from "csstype";
import { css } from "@emotion/css";

type HotelCardFormType = {
  hotelImageId?: string;
  hotelName?: string;
  hotelPrice?: string;
  hotelRating?: string;
  hotelReviewCount?: string;
  hotelReviewText?: string;
  hotelRatingText?: string;
  hotelDimensions?: string;

  /** Style props */
  propFlex?: Property.Flex;
  propGap?: Property.Gap;
  propWidth?: Property.Width;
  propRight?: Property.Right;
};

const HotelCardForm: FunctionComponent<HotelCardFormType> = ({
  hotelImageId,
  hotelName,
  hotelPrice,
  hotelRating,
  hotelReviewCount,
  hotelReviewText,
  hotelRatingText,
  hotelDimensions,
  propFlex,
  propGap,
  propWidth,
  propRight,
}) => {
  return (
    <div
      className={css`
        align-self: stretch;
        flex: 1;
        display: flex;
        flex-direction: row;
        padding: 0px 12px;
        box-sizing: border-box;
        align-items: flex-start;
        justify-content: center;
        width: 25%;
        text-align: left;
        font-size: 16px;
        color: #303030;
        font-family: Roboto;
        @media screen and (max-width: 960px) {
          width: 33.33%;
        }
        @media screen and (max-width: 420px) {
          width: 100%;
          flex: unset;
          align-self: stretch;
        }
      `}
    >
      <div
        className={css`
          align-self: stretch;
          flex: 1;
          border-radius: 10px;
          background-color: #fff;
          border: 1px solid #eaeaea;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          padding: 15px 13px;
          align-items: flex-start;
          justify-content: flex-start;
          gap: 23px;
          width: 25%;
          &:hover {
            background-color: rgba(226, 226, 226, 0.1);
            cursor: pointer;
          }
          @media screen and (max-width: 1200px) {
            width: 25% !important;
          }
          @media screen and (max-width: 960px) {
            width: 100%;
          }
          @media screen and (max-width: 420px) {
            width: 100% !important;
            margin-bottom: 20px;
          }
        `}
      >
        <img
          className={css`
            align-self: stretch;
            position: relative;
            border-radius: 10px;
            max-width: 100%;
            overflow: hidden;
            height: 200px;
            flex-shrink: 0;
            object-fit: cover;
          `}
          alt=""
          src={hotelImageId}
        />
        <div
          className={css`align-self: stretch;
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: flex-start;
gap: 11px;
flex: ${propFlex}
gap: ${propGap}
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
            `}
          >
            <div
              className={css`
                align-self: stretch;
                position: relative;
                letter-spacing: 0.02em;
                color: #8e8e94;
              `}
            >
              {hotelName}
            </div>
            <b
              className={css`
                align-self: stretch;
                position: relative;
                font-size: 22px;
                letter-spacing: 0.04em;
                text-transform: capitalize;
                @media screen and (max-width: 420px) {
                  font-size: 20px;
                }
              `}
            >
              {hotelPrice}
            </b>
            <div
              className={css`
                align-self: stretch;
                position: relative;
                font-size: 18px;
                letter-spacing: 0.04em;
              `}
            >
              {hotelRating}
            </div>
          </div>
          <img
            className={css`
              position: relative;
              width: 25px;
              height: 25px;
              overflow: hidden;
              flex-shrink: 0;
            `}
            alt=""
            src={hotelReviewCount}
          />
        </div>
        <div
          className={css`
            align-self: stretch;
            position: relative;
            height: 19px;
            color: #1262af;
          `}
        >
          <div
            className={css`
              position: absolute;
              top: 0px;
              left: 53.63px;
              letter-spacing: 0.04em;
              display: inline-block;
              width: 216.37px;
            `}
          >
            {hotelReviewText}
          </div>
          <div
            className={css`
              position: absolute;
              top: 0px;
              left: 0px;
              width: 44.34px;
              height: 19px;
              color: #303030;
            `}
          >
            <div
              className={css`
                position: absolute;
                top: 0px;
                left: 20.34px;
                letter-spacing: 0.04em;
                font-weight: 500;
              `}
            >
              {hotelRatingText}
            </div>
            <img
              className={css`position: absolute;
height: 90.47%;
width: 37.54%;
top: 0%;
right: 62.46%;
bottom: 9.53%;
left: 0%;
max-width: 100%;
overflow: hidden;
max-height: 100%;
width: ${propWidth}
right: ${propRight}
`}
              alt=""
              src={hotelDimensions}
            />
          </div>
        </div>
        <button
          className={css`
            cursor: pointer;
            border: 1px solid #ccdcec;
            padding: 0;
            background-color: transparent;
            align-self: stretch;
            border-radius: 4px;
            box-sizing: border-box;
            height: 46px;
            overflow: hidden;
            flex-shrink: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            @media screen and (max-width: 420px) {
              width: 100% !important;
            }
          `}
        >
          <div
            className={css`
              position: relative;
              font-size: 15px;
              letter-spacing: 0.46px;
              line-height: 26px;
              text-transform: uppercase;
              font-weight: 500;
              font-family: Roboto;
              color: #1262af;
              text-align: left;
            `}
          >
            More details
          </div>
        </button>
      </div>
    </div>
  );
};

export default HotelCardForm;
