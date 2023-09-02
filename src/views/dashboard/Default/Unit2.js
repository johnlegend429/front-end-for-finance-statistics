import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function Unit2() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={UnitIn}
      renderInput={(params) => <TextField {...params} label="Unit" />}
      style={{overflow:'visible', zIndex:'100', width:'90%'}}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const UnitIn = [
  { label: "Pt" },
  { label: "%" },
  { label: "$/s" }
];


