import React, { useState } from "react";

import {
  ContentMain,
  DatePickerClass,
  Figure,
  ContentMain2,
  Description,
  PhotoTitle,
} from "./Content.styles";

//import DayPicker from "./DayPicker/DayPicker";
import useFetch from "../../hooks/useFetch";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function Content() {
  const today = new Date();

  // to force date to yesterday
  today.setDate(today.getDate() - 1);

  //const todayLocal = today.toLocaleDateString();
  //console.log(todayLocal);
  const [value, setValue] = useState(today);
  //console.log(value);

  let formattedDate = value.toISOString().split("T")[0];
  const { photoData, loading, error } = useFetch(formattedDate);

  if (loading) return <h2>Loading...</h2>;
  if (error) console.log(error);
  //console.log(photoData);
  return (
    <>
      <ContentMain>
        <DatePickerClass>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              maxDate={new Date()}
              label="Please select a Day"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </DatePickerClass>

        <Figure>
          <h2 title="photo-title">Photo of the Day ( {photoData.date} )</h2>
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
