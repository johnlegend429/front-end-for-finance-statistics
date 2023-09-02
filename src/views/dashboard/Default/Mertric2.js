import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function Mertric2() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={MertricIn}
      renderInput={(params) => <TextField {...params} label="Mertric" />}
      style={{overflow:'visible', zIndex:'100', width:'90%'}}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const MertricIn = [
  { label: "close - close (-1)"},
  { label: "close - open"},
  { label: "high - low"},
  { label: "Hight"},
  { label: "low"},
  { label: "hight + low"},
  { label: "volume"}
];


