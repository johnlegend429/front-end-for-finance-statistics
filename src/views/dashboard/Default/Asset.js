import PropTypes from 'prop-types';

// material-ui
import { styled } from '@mui/material/styles';
import { Box, Grid } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SkeletonSelectAsset from 'ui-component/cards/Skeleton/DatetimeRange';

import SelectAsset from './SelectAsset';

const CardWrapper = styled(MainCard)(({ theme }) => ({
  backgroundColor: theme.palette.grey[1000],
  color: '#fff',
  overflow: 'visible',
  position: 'relative',
  '&>div': {
    position: 'relative',
    zIndex: 1000
  },
  '&:after': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    background: theme.palette.success.dark,
    borderRadius: '50%',
    zIndex: 1,
    top: -85,
    right: -95,
    [theme.breakpoints.down('sm')]: {
      top: -105,
      right: -140
    }
  },
  '&:before': {
    content: '""',
    position: 'absolute',
    zIndex: 1,
    width: 210,
    height: 210,
    background: theme.palette.success.light,
    borderRadius: '50%',
    top: -125,
    right: -15,
    opacity: 0.5,
    [theme.breakpoints.down('sm')]: {
      top: -155,
      right: -70
    }
  }
}));
// ===========================|| DASHBOARD DEFAULT - EARNING CARD ||=========================== //

const Asset = ({ isLoading }) => {
  return (
    <>
      {isLoading ? (
        <SkeletonSelectAsset />
      ) : (
        <CardWrapper border={false} content={false}>
          <Box sx={{ p: 2.25 }}>
            <Grid container direction="column">
              <Grid item>
                <Grid container justifyContent="space-between">
                <SelectAsset/>                  
                </Grid>
              </Grid>
              <Grid item>
                <Grid container alignItems="center">
                </Grid>
                </Grid>
              </Grid>
          </Box>
        </CardWrapper>
      )}
    </>
  );
};

SelectAsset.propTypes = {
  isLoading: PropTypes.bool
};

export default Asset;
