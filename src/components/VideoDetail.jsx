import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { Link, useParams } from 'react-router-dom';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import Videos from './Videos';

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const {id} = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchFromAPI(`videos?part=snippet,statistic&id=${id}`)
      .then((data) => {
        setVideoDetail(data.items[0]);
        setLoading(false);
      });

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items));
  }, [id]);

  if(!videoDetail?.snippet) return 'Loading . . .';

  const {snippet: {title, channelId, channelTitle}, statistics: {viewCount, likeCount}} = videoDetail;


  return (
    <Box minHeight= '95vh' bgcolor={'black'} >
      <Stack direction={{xs: 'column', md: 'row'}}>
        <Box py={{sx: 0, md: 3}} px={{sx: 0, md: 3}} sx={{width: {xs: '100%', md: '85%'}}} >
          <div className="video-wrapper">
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className='react-player' controls width='100%' height='100%'/>
          </div>
          <Typography color='#fff' variant='h5' fontWeight='bold' py={2} px={1} borderBottom='1px solid rgb(140, 140, 140)'>
            {title}
          </Typography>
          <Stack direction='row' justifyContent='space-between' sx={{color: '#fff',}} py={1} borderBottom='1px double rgb(140, 140, 140)'>
            <Link to={`/channel/${channelId}`} >
              <Typography variant={{sm: 'subtitle1', md: 'h6'}} color='#fff' px={1}>
                {channelTitle}
              </Typography>
            </Link>
            <Stack direction='row' gap='20px' alignItems='center'>
              <Typography variant='body1' sx={{opacity: 0.7}}>
                {parseInt(viewCount).toLocaleString()} views
              </Typography>
              <Typography variant='body1' sx={{opacity: 0.7}}>
                {parseInt(likeCount).toLocaleString()} likes
              </Typography>
            </Stack>
          </Stack>
        </Box>
        <Box px={2} py={{md: 1, xs: 5}} justifyContent='center' alignItems='center' sx={{overflowY: 'auto', height: '95vh' }} marginTop={3}>
          <Videos videos={videos} direction='column' md= '95%' sm='100%'/>
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail
