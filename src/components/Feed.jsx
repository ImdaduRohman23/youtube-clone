import React, { useEffect, useState } from 'react';
import { Box, Skeleton, Stack, Typography } from '@mui/material';
import cover from '../asets/cover.png';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import ReactLoading from 'react-loading';
import SideBar from './SideBar';
import Videos from './Videos';

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then(data => {
        setVideos(data.items)
        setLoading(false)
      })
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: {sx: "column", md: "row"}, height: {sx: 'auto', md: '85vh'}}}>
      <Box pb={3} sx={{background:'rgba(250, 250, 250, 0.1)', px: {sx: 0, md: 2}}}>
        <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
        <Typography className="copyright" variant="body2" sx={{mt: 1.5, color: '#fff'}}>
          Copyright 2023 Imdadu Rohman
        </Typography>
      </Box>

      <Box p={{xs: '0', md: '15px'}} sx={{overflowY: 'auto', flex: 2}}>
        {
          loading ?
          selectedCategory === 'New' && 
          <Skeleton variant="rectangular" sx={{background: '#404040'}}>
            <div className="feed__heroes">
              <img src={cover} alt=""/>
            </div> 
          </Skeleton> 
          :
          selectedCategory === 'New' && 
          <div className="feed__heroes">
            <img src={cover} alt=""/>
          </div> 
        }
        {
          loading ? 
          <Skeleton variant="text" width={250} sx={{ fontSize: '4rem', background: '#404040'}} />
          :
          <Typography variant='h4' fontWeight='bold' mb={2} sx={{color: 'white', marginTop: '20px', paddingLeft: {xs: '10px', md: '0px'}}}>
            {selectedCategory} <span style={{color: '#f31503'}}>Videos</span>
          </Typography>
        }
        {
          loading ?
          <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', paddingTop: '20px'}}>
            <ReactLoading type={'spinningBubbles'} color={'#404040'} height={'30px'} width={'50px'} />
          </div>
          :
          <Videos videos={videos} loading={loading}/>}
      </Box>
    </Stack>
  )
}

export default Feed
