import React, { useState } from "react";

import {
  ContentMain,
  DatePickerClass,
  Figure,
  ContentMain2,
  Description,
  PhotoTitle,
} from "./Content.styles";

import useFetch from "../../hooks/useFetch";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function Content() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const { photoData, loading, error } = useFetch(selectedDate);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Error</h2>;

  return (
    <>
      <ContentMain>
        <DatePickerClass>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              // maxDate={new Date()}
              label="Please select a Day"
              value={selectedDate}
              onChange={(newDate) => {
                setSelectedDate(newDate);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </DatePickerClass>

        <Figure>
          <h2 label="photo-title">Photo of the Day ( {photoData.date} )</h2>
          <h3>{photoData.copyright && `by: ${photoData.copyright}`}</h3>
          <img src={photoData.url} alt="dayPhoto" />
        </Figure>
        <ContentMain2>
          <Description>
            <PhotoTitle>{photoData.title}</PhotoTitle>
            {photoData.explanation}
          </Description>
        </ContentMain2>
      </ContentMain>
    </>
  );
}
