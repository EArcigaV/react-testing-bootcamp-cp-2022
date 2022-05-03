import React, { useState, Fragment } from "react";

import {
  ContentMain,
  DatePickerClass,
  Figure,
  ContentMain2,
  Description,
  PhotoTitle,
  ErrorMsg,
  ErrDatePickerClass,
  ErrDescription,
} from "./Content.styles";
import { isFutureDate } from "../../utils";

import useFetch from "../../hooks/useFetch";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function Content() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { photoData, loading, error } = useFetch(selectedDate);

  if (loading) return <h2>Loading...</h2>;

  const DatePickerWrapper = !error ? DatePickerClass : ErrDatePickerClass;
  const DatePickerMessageWrapper = !error ? Fragment : ErrorMsg;
  const DescriptionWrapper = !error ? Description : ErrDescription;

  return (
    <>
      <ContentMain>
        <DatePickerWrapper>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Please select a Day"
              value={selectedDate}
              onChange={(newDate) => {
                setSelectedDate(newDate);
              }}
              renderInput={(params) => (
                <TextField
                  aria-label="error-display"
                  helperText={
                    error ? (
                      <DatePickerMessageWrapper aria-label="myMsg">
                        <span>
                          {!isFutureDate(selectedDate)
                            ? "There was an error, please try again."
                            : "Please do not select a future date."}
                        </span>
                      </DatePickerMessageWrapper>
                    ) : (
                      ""
                    )
                  }
                  {...params}
                />
              )}
            />
          </LocalizationProvider>
        </DatePickerWrapper>

        <Figure hide={error}>
          <h2 label="photo-title">Photo of the Day ( {photoData.date} )</h2>
          <h3>{photoData.copyright && `by: ${photoData.copyright}`}</h3>
          <img src={photoData.url} alt="dayPhoto" />
        </Figure>
        <ContentMain2 hide={error}>
          <DescriptionWrapper title="description">
            <PhotoTitle>{photoData.title}</PhotoTitle>
            {photoData.explanation}
          </DescriptionWrapper>
        </ContentMain2>
      </ContentMain>
    </>
  );
}
