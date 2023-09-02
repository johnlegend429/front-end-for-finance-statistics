import PropTypes from 'prop-types';

// material-ui
import { Button, CardActions, CardContent, Divider, Grid, Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SkeletonFilter from 'ui-component/cards/Skeleton/Filter';
import { gridSpacing } from 'store/constant';

// assets
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';

import Range from './Range';
import MonthSelect from './MonthofYear';
import DaySelect from './DaysofWeek';
import DaySelect2 from './DayofMonth';
import TimeRange from './TimeRange'
// ==============================|| DASHBOARD DEFAULT - POPULAR CARD ||============================== //

const Filter = ({ isLoading }) => {
  return (
    <>
      {isLoading ? (
        <SkeletonFilter />
      ) : (
        <MainCard content={false}>
          <CardContent>
            <Grid container spacing={gridSpacing}>              
              <Grid item xs={12}>
                <Grid container direction="column">
                  <Grid item>
                    <Grid container alignItems="center" justifyContent="space-between">
                      <Grid item>
                        <Typography variant="subtitle1" color="inherit">
                          Date Range
                        </Typography>
                      </Grid>                      
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Range/>
                  </Grid>
                </Grid>
                <Divider sx={{ my: 1.5 }} />
                <Grid container direction="column">
                  <Grid item>
                    <Grid container alignItems="center" justifyContent="space-between">
                      <Grid item>
                        <Grid container alignItems="center" justifyContent="space-between">
                          <Grid item>
                          <Typography variant="subtitle1" color="inherit">
                          Months of Year
                          </Typography>
                          <MonthSelect/>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Divider sx={{ my: 1.5 }} />
                <Grid container direction="column">
                  <Grid item>
                    <Grid container alignItems="center" justifyContent="space-between">
                      <Grid item>
                        <Typography variant="subtitle1" color="inherit">
                          Days of Week
                        </Typography>
                        <DaySelect/>
                      </Grid>                     
                    </Grid>
                  </Grid>
                </Grid>
                <Divider sx={{ my: 1.5 }} />
                <Grid container direction="column">
                  <Grid item>
                    <Grid container alignItems="center" justifyContent="space-between">
                      <Grid item>
                        <Typography variant="subtitle1" color="inherit">
                          Days of Month
                        </Typography>
                        <DaySelect2/>
                      </Grid>                     
                    </Grid>
                  </Grid>
                </Grid>
                <Divider sx={{ my: 1.5 }} />
                <Grid container direction="column">
                  <Grid item>
                    <Grid container alignItems="center" justifyContent="space-between">
                      <Grid item>
                        <Typography variant="subtitle1" color="inherit">
                          Time Range
                        </Typography>
                        <TimeRange/>
                      </Grid>                     
                    </Grid>
                  </Grid>
                </Grid>
                <Divider sx={{ my: 1.5 }} />                               
              </Grid>
            </Grid>
          </CardContent>
          <CardActions sx={{ p: 1.25, pt: 0, justifyContent: 'center' }}>
            <Button size="large">
              Run Statistics
              <ChevronRightOutlinedIcon />
            </Button>
          </CardActions>
        </MainCard>
      )}
    </>
  );
};

Filter.propTypes = {
  isLoading: PropTypes.bool
};

export default Filter;
