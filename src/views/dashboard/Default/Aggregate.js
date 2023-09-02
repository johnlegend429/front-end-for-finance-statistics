import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function Aggregate() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={AggregateIn}
      renderInput={(params) => <TextField {...params} label="Aggregate Candles By" />}
      style={{overflow:'visible', zIndex:'100', width:'90%'}}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const AggregateIn = [
  { label: "1 minute"},
  { label: "3 minutes" },
  { label: "5 minutes" },
  { label: "10 minutes" },
  { label: "15 minutes" },
  { label: "30 minutes" },
  { label: "60 minutes" }
];


