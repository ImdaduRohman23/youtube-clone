import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react';
import SideBar from './SideBar';

import { fetchFromAPI } from '../utils/fetchFromAPI';
import Videos from './Videos';
import cover from '../asets/cover.png';

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New')
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then(data => setVideos(data.items))
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: {sx: "column", md: "row"}, height: {sx: 'auto', md: '85vh'}}}>
      <Box pb={3} sx={{background:'rgba(250, 250, 250, 0.1)', px: {sx: 0, md: 2}}}>
        <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
        <Typography className="copyright" variant="body2" sx={{mt: 1.5, color: '#fff'}}>
          Copyright 2023 Imdadu Rohman
        </Typography>
      </Box>

      <Box p={2} sx={{overflowY: 'auto', flex: 2}}>
        {
          selectedCategory === 'New' && <img src={cover} alt="" width={'100%'} />
        }
        <Typography variant='h4' fontWeight='bold' mb={2} sx={{color: 'white'}}>
          {selectedCategory} <span style={{color: '#f31503'}}>Videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>

    </Stack>
  )
}

export default Feed
