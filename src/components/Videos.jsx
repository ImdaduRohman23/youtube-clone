import { Box, Stack } from '@mui/material';
import React from 'react';
import VideoCard from './VideoCard';

const Videos = ({videos, direction, md}) => {
  if(!videos?.length) return 'Loading...';

  return (
    <Stack direction={direction || 'row'} flexWrap='wrap' justifyContent='center' gap={2} alignContent='center'>
      {
        videos.map((item, idx) => (
          <Box key={idx} sx={{width: {xs: '100%', sm: '358px',md: md || '32%'}}}>
            {item.id.videoId && <VideoCard video={item} />}
          </Box>
        ))
      }
    </Stack>
  )
}

export default Videos
