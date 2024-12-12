import React from 'react'
import { Grid, Box } from '@mui/material';
export default function GridComponent() {
  return (
    <>
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={4}>
        <Box sx={{ bgcolor: 'primary.main', color: 'white', p: 2 }}>
          Responsive Box 1
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <Box sx={{ bgcolor: 'secondary.main', color: 'white', p: 2 }}>
          Responsive Box 2
        </Box>
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <Box sx={{ bgcolor: 'error.main', color: 'white', p: 2 }}>
          Responsive Box 3
        </Box>
      </Grid>
    </Grid>


    
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ height: '100vh', bgcolor: 'background.default' }}
    >
      <Grid xs={12} sm={12} md={4} item>
        <Box
          sx={{
            p: 4,
            bgcolor: 'primary.main',
            color: 'white',
            borderRadius: 2,
            textAlign: 'center',
          }}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque earum quod molestiae est nisi ipsa unde aspernatur, temporibus non nobis sed iure, repudiandae modi! Porro consequatur mollitia quos consectetur dolores.
        </Box>
      </Grid>
    </Grid>

    </>
  )
}
