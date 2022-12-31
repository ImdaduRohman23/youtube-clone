import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

import { demoThumbnailUrl, demoVideoUrl, demoChannelUrl, demoChannelTitle, demoVideoTitle } from '../utils/constants';

const VideoCard = ({video: {id: {videoId}, snippet}}) => {
  
  return (
    <Card sx={{width: {xs: '100%', sm: '100%',md: '100%'}, boxShadow: 'none', borderRaduis: 0}}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia 
          image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          alt={snippet?.title}
          sx={{width: {xs: '100%', sm: '100%', md: '100%'}, height: 180}}
        />
      </Link>
      <CardContent sx={{backgroundColor: '#1e1e1e', height: '106px'}}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant='subtile1' fontWeight='bold' color='#fff' >
            {snippet?.title.slice(0, 50) || demoVideoTitle.slice(0, 50) }
            {snippet?.title.length > 50 && <span>...</span>}
          </Typography>
        </Link> <br />
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
          <Typography variant='subtile2' fontWeight='bold' color='gray'>
            {snippet?.channelTitle || demoChannelTitle}
          </Typography>
        </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard
