import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SelectControl = ({ name, data, ...rest }) => (
  <FormControl fullWidth variant="standard" margin="normal">
    <InputLabel
      id={`${name}-select-label`}
      sx={{ textTransform: 'capitalize' }}
    >
      {name}
    </InputLabel>
    <Select
      labelId={`${name}-select-label`}
      id={`${name}-select`}
      label={name}
      name={name}
      variant="standard"
      {...rest}
    >
      {data.map((item) => (
        <MenuItem key={item} value={item}>
          {item}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);

export default SelectControl;
