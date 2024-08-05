import { Grid, Skeleton } from '@mui/material';
import React from 'react';

const Loader = () => {
  return (
    <Grid container height={'calc(100vh - 4rem)'}>
      <Grid
        item
        sm={4}
        md={3}
        sx={{
          display: { xs: 'none', sm: 'block' },
        }}
        lg={3}
      >
        <Skeleton
          animation='wave'
          variant='rectangular'
          width={'95%'}
          height={'100vh'}
        />
      </Grid>
      <Grid item xs={12} sm={8} md={5} lg={6}>
        <Skeleton variant='rectangular' width={'95%'} height={'100vh'} />
      </Grid>
      <Grid
        item
        sm={8}
        md={4}
        lg={3}
        sx={{ display: { xs: 'none', md: 'block' } }}
      >
        <Skeleton variant='rectangular' width={'95%'} height={'100vh'} />
      </Grid>
    </Grid>
  );
};

export default Loader;
