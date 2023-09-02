import PropTypes from 'prop-types';

// material-ui
import { styled } from '@mui/material/styles';
import { Box, Grid } from '@mui/material';



// project imports
import MainCard from 'ui-component/cards/MainCard';
import SkeletonTotalOrderCard from 'ui-component/cards/Skeleton/DatetimeRange';

import Aggregate from './Aggregate';
import Aggregate2 from './Aggregate2';
import Mertric from './Mertric';
import Mertric2 from './Mertric2';
import Unit from './Unit';
import Unit2 from './Unit2';
import Groupby from './Groupby';
import Groupby2 from './Groupby2';
import Statistics from './Statistics';
import Statistics2 from './Statistics2';
import Cums from './Cums';
import Cums2 from './Cums2';

const CardWrapper = styled(MainCard)(({ theme }) => ({
  backgroundColor: theme.palette.grey[1000],
  color: '#fff',
  overflow: 'visible',
  position: 'relative',
  '&>div': {
    position: 'relative',
    zIndex: 5
  },
  '&:after': {
    content: '""',
    position: 'absolute',
    width: 210,
    height: 210,
    background: theme.palette.primary[800],
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
    background: theme.palette.primary[800],
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

// ==============================|| DASHBOARD - TOTAL ORDER LINE CHART CARD ||============================== //

const Filter2 = ({ isLoading }) => {

  // const [timeValue] = useState(false);

  return (
    <>
      {isLoading ? (
        <SkeletonTotalOrderCard />
      ) : (
        <CardWrapper border={false} content={false}>
          <Box sx={{ p: 2.25 }}>
            <Grid container direction="column">
              <Grid item>
                <Grid container justifyContent="space-between">
                  <Grid item lg={3}>
                   <Aggregate/>
                  </Grid>
                  <Grid item lg={2}>
                    <Groupby/>
                  </Grid>
                  <Grid item lg={2}>
                    <Mertric/>
                  </Grid>
                  <Grid item lg={1}>
                    <Unit/>
                  </Grid>
                  <Grid item lg={2}>
                    <Statistics/>
                  </Grid>
                  <Grid item lg={2}>
                    <Cums/>
                  </Grid>
                </Grid>
              </Grid>
              <br/>
              <Grid item>
                <Grid container justifyContent="space-between">
                  <Grid item lg={3}>
                   <Aggregate2/>
                  </Grid>
                  <Grid item lg={2}>
                    <Groupby2/>
                  </Grid>
                  <Grid item lg={2}>
                    <Mertric2/>
                  </Grid>
                  <Grid item lg={1}>
                    <Unit2/>
                  </Grid>
                  <Grid item lg={2}>
                    <Statistics2/>
                  </Grid>
                  <Grid item lg={2}>
                    <Cums2/>
                  </Grid>
                </Grid>
              </Grid>              
            </Grid>
          </Box>
        </CardWrapper>
      )}
    </>
  );
};

Filter2.propTypes = {
  isLoading: PropTypes.bool
};

export default Filter2;
