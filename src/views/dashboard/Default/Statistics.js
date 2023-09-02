import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function Statistics() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={StatisticsIn}
      renderInput={(params) => <TextField {...params} label="Statistic" />}
      style={{overflow:'visible', zIndex:'100', width:'90%'}}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const StatisticsIn = [
  { label: "Mean" },
  { label: "Median" },
  { label: "Sum" },
  { label: "Count" },
  { label: "SD" }
];


