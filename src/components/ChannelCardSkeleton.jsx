import React from 'react';
import ReactLoading from 'react-loading';
import { Skeleton, Stack } from '@mui/material';

const ChannelCardSkeleton = () => {
  return (
    <Stack alignItems="center" sx={{height: '100vh'}}>
      <Skeleton variant="rectangular" width={'100%'} sx={{background: '#404040', height: '200px'}} /> 
      <Skeleton variant="circular" width={200} height={200} sx={{background: '#404040', marginTop: '-100px'}}/>
      <Skeleton variant="text" width={250} sx={{ fontSize: '3rem', background: '#404040'}} />
      <Skeleton variant="text" width={250} sx={{ fontSize: '2rem', background: '#404040', marginBottom: '30px'}} />
      <ReactLoading type={'spinningBubbles'} color={'#404040'} height={'30px'} width={'50px'} />
  </Stack>
  )
}

export default ChannelCardSkeleton
