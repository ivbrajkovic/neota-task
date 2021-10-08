import { Typography, Link } from '@mui/material';

const Copyright = () => (
  <Typography
    variant="body2"
    color="textSecondary"
    height="100%"
    display="flex"
    alignItems="center"
    justifyContent="center"
  >
    {'Copyright © '}
    <Link color="primary" href="https://github.com/ivbrajkovic" target="_blank">
      Ivan Brajković
    </Link>
    {` ${new Date().getFullYear()}.`}
  </Typography>
);

export default Copyright;
