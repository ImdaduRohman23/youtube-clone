import React from 'react';
import { Box, Stack } from '@mui/material';
import VideoCard from './VideoCard';

const Videos = ({videos, direction, md, sm, loading}) => {
  // if(!videos?.length) return 'Loading...';

  if(videos?.length) { return (
    <Stack direction={direction || 'row'} flexWrap='wrap' justifyContent='center' gap={2} alignContent='center'>
      {
        videos.map((item, idx) => (
          <Box className='videos__box' key={idx} sx={{width: {xs: '100%', sm: sm || '45%',md: md || '32%'}}}>
            {item.id.videoId && <VideoCard video={item} loading={loading}/>}
          </Box>
        ))
      }
    </Stack>
  )
}}

export default Videos
