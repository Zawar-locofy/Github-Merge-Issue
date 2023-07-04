import { FunctionComponent, useState } from "react";
import {
  FormControlLabel,
  Radio,
  Autocomplete,
  TextField,
  Icon,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { css } from "@emotion/css";
import LetsExplore from "./LetsExplore";

const SearchSection: FunctionComponent = () => {
  const [
    selectOutlinedDateTimePickerValue,
    setSelectOutlinedDateTimePickerValue,
  ] = useState<string | null>(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div
        className={css`
          align-self: stretch;
          position: relative;
          height: 640px;
          text-align: center;
          font-size: 61px;
          color: #fff;
          font-family: "Baloo Bhai";
        `}
      >
        <div
          className={css`
            position: absolute;
            width: 100%;
            top: 0px;
            right: 0px;
            left: 0px;
            background: linear-gradient(78.78deg, #114f8b 5.2%, #2a9ad7);
            height: 639.91px;
          `}
        />
        <img
          className={css`
            position: absolute;
            width: 100%;
            top: 0.4px;
            right: 0px;
            left: 0px;
            max-width: 100%;
            overflow: hidden;
            height: 640px;
            object-fit: cover;
          `}
          alt=""
          src="/banner--background@2x.png"
        />
        <div
          className={css`
            position: absolute;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 640px;
            display: flex;
            flex-direction: column;
            padding: 0px 140px;
            box-sizing: border-box;
            align-items: center;
            justify-content: center;
            gap: 43px;
            @media screen and (max-width: 960px) {
              padding-left: 30px;
              padding-right: 30px;
              box-sizing: border-box;
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
              gap: 5px;
            `}
          >
            <LetsExplore
              letsExploreTravelTheWorld={`Let’s explore & travel PAKISTAN`}
              letsExploreTravelTheWorldAnimationName="10"
            />
            <div
              className={css`
                align-self: stretch;
                position: relative;
                font-size: 24px;
                line-height: 32px;
                font-family: Roboto;
              `}
            >
              Find the best destinations and the most popular stays!
            </div>
          </div>
          <div
            className={css`
              align-self: stretch;
              border-radius: 10px;
              background-color: #fff;
              display: flex;
              flex-direction: column;
              padding: 20px;
              align-items: flex-start;
              justify-content: flex-start;
              gap: 4px;
              text-align: left;
              font-size: 20px;
              color: #303030;
              font-family: Roboto;
              @media screen and (max-width: 960px) {
                flex-direction: column;
              }
              @media screen and (max-width: 420px) {
                margin-top: 20px;
              }
            `}
          >
            <div
              className={css`
                align-self: stretch;
                overflow: hidden;
                display: flex;
                flex-direction: row;
                padding: 5px;
                align-items: center;
                justify-content: flex-start;
                gap: 5px;
                @media screen and (max-width: 420px) {
                  flex-direction: column;
                  align-items: flex-start;
                }
              `}
            >
              <b
                className={css`
                  flex: 1;
                  position: relative;
                  letter-spacing: 0.04em;
                  text-transform: uppercase;
                  @media screen and (max-width: 420px) {
                    width: 100%;
                    padding-bottom: 10px;
                    margin-bottom: 6px;
                    border-bottom: 1px;
                    border-bottom-style: solid;
                    border-bottom-color: #eaeaea;
                    flex: unset;
                    align-self: stretch;
                  }
                `}
              >
                Search flights
              </b>
              <div
                className={css`
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  justify-content: flex-start;
                  @media screen and (max-width: 420px) {
                    width: 100%;
                  }
                `}
              >
                <div
                  className={css`
                    position: relative;
                    width: 216.53px;
                    height: 38px;
                    @media screen and (max-width: 420px) {
                      width: 100% !important;
                    }
                  `}
                >
                  <FormControlLabel
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: 0px;
                    `}
                    label="Return"
                    labelPlacement="end"
                    control={<Radio size="medium" />}
                  />
                  <FormControlLabel
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: 106px;
                    `}
                    label="One-way"
                    labelPlacement="end"
                    control={<Radio color="primary" checked size="medium" />}
                  />
                </div>
              </div>
            </div>
            <div
              className={css`
                align-self: stretch;
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                justify-content: flex-start;
                font-size: 12px;
                color: rgba(0, 0, 0, 0.6);
                @media screen and (max-width: 960px) {
                  flex-direction: column;
                }
              `}
            >
              <div
                className={css`
                  flex: 1;
                  display: flex;
                  flex-direction: row;
                  padding: 5px;
                  align-items: flex-start;
                  justify-content: flex-start;
                  gap: 10px;
                  @media screen and (max-width: 960px) {
                    width: 100%;
                    flex: unset;
                    align-self: stretch;
                  }
                  @media screen and (max-width: 420px) {
                    flex-direction: column;
                  }
                `}
              >
                <Autocomplete
                  className={css`
                    align-self: stretch;
                    flex: 1;
                    @media screen and (max-width: 420px) {
                      flex: unset;
                      align-self: stretch;
                    }
                  `}
                  disablePortal
                  options={[
                    "Singapore (SIN)",
                    "Sydney (SYD)",
                    "Siem Reap (REP)",
                    "Shanghai (PVG)",
                    "Sanya (SYX)",
                  ]}
                  renderInput={(params: any) => (
                    <TextField
                      {...params}
                      color="primary"
                      label="Departure"
                      variant="outlined"
                      placeholder=""
                      helperText=""
                    />
                  )}
                  defaultValue="Singapore -  Changi (SIN)"
                  size="medium"
                />
                <div
                  className={css`
                    align-self: stretch;
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: flex-start;
                    @media screen and (max-width: 420px) {
                      flex: unset;
                      align-self: stretch;
                    }
                  `}
                >
                  <div
                    className={css`
                      align-self: stretch;
                      border-radius: 4px;
                      border: 1px solid rgba(0, 0, 0, 0.23);
                      box-sizing: border-box;
                      height: 56px;
                      display: flex;
                      flex-direction: column;
                      padding: 0px 12px;
                      align-items: flex-start;
                      justify-content: flex-start;
                    `}
                  >
                    <div
                      className={css`
                        background-color: #fff;
                        height: 2px;
                        display: flex;
                        flex-direction: row;
                        padding: 0px 4px;
                        box-sizing: border-box;
                        align-items: center;
                        justify-content: flex-start;
                      `}
                    >
                      <div
                        className={css`
                          position: relative;
                          letter-spacing: 0.15px;
                          line-height: 12px;
                        `}
                      >
                        Arrival
                      </div>
                    </div>
                    <div
                      className={css`
                        align-self: stretch;
                        overflow: hidden;
                        display: flex;
                        flex-direction: row;
                        padding: 15px 0px;
                        align-items: center;
                        justify-content: flex-start;
                        gap: 8px;
                        text-align: center;
                        color: #616161;
                      `}
                    >
                      <div
                        className={css`
                          display: none;
                          flex-direction: row;
                          align-items: flex-start;
                          justify-content: flex-start;
                          gap: 8px;
                        `}
                      >
                        <div
                          className={css`
                            display: flex;
                            flex-direction: column;
                            align-items: flex-start;
                            justify-content: flex-start;
                          `}
                        >
                          <div
                            className={css`
                              border-radius: 16px;
                              background-color: #e0e0e0;
                              display: flex;
                              flex-direction: row;
                              padding: 4px;
                              align-items: center;
                              justify-content: flex-start;
                            `}
                          >
                            <div
                              className={css`
                                border-radius: 64px;
                                background-color: #bdbdbd;
                                width: 24px;
                                height: 24px;
                                overflow: hidden;
                                flex-shrink: 0;
                                display: none;
                                flex-direction: row;
                                align-items: center;
                                justify-content: center;
                              `}
                            >
                              <div
                                className={css`
                                  align-self: stretch;
                                  flex: 1;
                                  position: relative;
                                  letter-spacing: 0.4px;
                                  line-height: 166%;
                                  display: flex;
                                  align-items: center;
                                  justify-content: center;
                                `}
                              >
                                F
                              </div>
                            </div>
                            <div
                              className={css`
                                display: flex;
                                flex-direction: column;
                                padding: 3px 6px;
                                align-items: flex-start;
                                justify-content: flex-start;
                                text-align: left;
                                font-size: 13px;
                                color: rgba(0, 0, 0, 0.87);
                              `}
                            >
                              <div
                                className={css`
                                  position: relative;
                                  letter-spacing: 0.16px;
                                  line-height: 18px;
                                `}
                              >
                                Chip
                              </div>
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
                              src="/cancel.svg"
                            />
                          </div>
                        </div>
                        <div
                          className={css`
                            display: flex;
                            flex-direction: column;
                            align-items: flex-start;
                            justify-content: flex-start;
                          `}
                        >
                          <div
                            className={css`
                              border-radius: 16px;
                              background-color: #e0e0e0;
                              display: flex;
                              flex-direction: row;
                              padding: 4px;
                              align-items: center;
                              justify-content: flex-start;
                            `}
                          >
                            <div
                              className={css`
                                border-radius: 64px;
                                background-color: #bdbdbd;
                                width: 24px;
                                height: 24px;
                                overflow: hidden;
                                flex-shrink: 0;
                                display: none;
                                flex-direction: row;
                                align-items: center;
                                justify-content: center;
                              `}
                            >
                              <div
                                className={css`
                                  align-self: stretch;
                                  flex: 1;
                                  position: relative;
                                  letter-spacing: 0.4px;
                                  line-height: 166%;
                                  display: flex;
                                  align-items: center;
                                  justify-content: center;
                                `}
                              >
                                F
                              </div>
                            </div>
                            <div
                              className={css`
                                display: flex;
                                flex-direction: column;
                                padding: 3px 6px;
                                align-items: flex-start;
                                justify-content: flex-start;
                                text-align: left;
                                font-size: 13px;
                                color: rgba(0, 0, 0, 0.87);
                              `}
                            >
                              <div
                                className={css`
                                  position: relative;
                                  letter-spacing: 0.16px;
                                  line-height: 18px;
                                `}
                              >
                                Chip
                              </div>
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
                              src="/cancel.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        className={css`
                          flex: 1;
                          position: relative;
                          font-size: 16px;
                          letter-spacing: 0.15px;
                          line-height: 24px;
                          color: rgba(0, 0, 0, 0.87);
                          text-align: left;
                        `}
                      >
                        Los Angeles (LA)
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={css`
                    align-self: stretch;
                    flex: 1;
                    @media screen and (max-width: 420px) {
                      flex: unset;
                      align-self: stretch;
                    }
                  `}
                >
                  <DatePicker
                    label="Date"
                    value={selectOutlinedDateTimePickerValue}
                    onChange={(newValue: any) => {
                      setSelectOutlinedDateTimePickerValue(newValue);
                    }}
                    slotProps={{
                      textField: {
                        variant: "outlined",
                        size: "medium",
                        fullWidth: true,
                        color: "primary",
                      },
                    }}
                  />
                </div>
              </div>
              <div
                className={css`
                  display: flex;
                  flex-direction: column;
                  padding: 5px;
                  align-items: center;
                  justify-content: center;
                  text-align: center;
                  font-size: 15px;
                  color: #fff;
                  @media screen and (max-width: 960px) {
                    width: 100%;
                    text-align: left;
                  }
                `}
              >
                <div
                  className={css`
                    border-radius: 4px;
                    background-color: #f99a0e;
                    width: 164px;
                    height: 56px;
                    overflow: hidden;
                    flex-shrink: 0;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    transition: 0.3s;
                    @media screen and (max-width: 960px) {
                      margin-right: auto;
                    }
                    @media screen and (max-width: 420px) {
                      width: 100% !important;
                    }
                  `}
                >
                  <div
                    className={css`
                      position: relative;
                      letter-spacing: 0.46px;
                      line-height: 26px;
                      text-transform: uppercase;
                      font-weight: 500;
                      display: inline-block;
                      width: 146.98px;
                    `}
                  >
                    Search flights
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default SearchSection;
