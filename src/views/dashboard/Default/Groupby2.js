import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function GroupBy2() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={GroupByIn}
      renderInput={(params) => <TextField {...params} label="Group By" />}
      style={{overflow:'visible', zIndex:'100', width:'90%'}}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const GroupByIn = [
  { label: "HH:mm, Day of Week" },
  { label: "HH:mm, Day of Month" },
  { label: "HH:mm, Month of Year" },
  { label: "HH:mm, Year" },
  { label: "Day" },
  { label: "Day, Day of Week" },
  { label: "Day, Day of Month" },
  { label: "Day, Month of Year" }
];

