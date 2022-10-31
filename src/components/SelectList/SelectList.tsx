import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { ProducdtContext } from 'context/product/ProductContext';
import { useContext } from 'react';


const sorterList = [
    {   
        label: 'Sort By Name: A-Z',
        by:'title',
        direction:'asc'
    },
    {
        label:'Sort By Name: Z-A',
        by:'title',
        direction:'desc'
    },
    {
        label:'Sort By Price: Low To High',
        by:'price',
        direction:'asc'
    },
    {
        label:'Sort By: High to Low',
        by:'price',
        direction:'desc'
    }
]
export default function BasicSelect() {
  const [age, setAge] = React.useState('');
  const productContext = useContext(ProducdtContext)
  const handleChange = (event: SelectChangeEvent) => {
    console.log(event.target.value, 'event')
    let key = Number(event.target.value);
    setAge(event.target.value);
    console.log(sorterList[key])
    productContext.sortBy(sorterList[key])
  };

  return (
    <Box sx={{ minWidth: 120, maxWidth:300 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sort</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
            {
                sorterList.map((item:any, index:number) => {
                    return (
                        <MenuItem key={index} value={index} data-direction={'asc'} >{item.label}</MenuItem>
                    )
                }) 
            }
        
        </Select>
      </FormControl>
    </Box>
  );
}