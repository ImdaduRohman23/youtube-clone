import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import { demoThumbnailUrl, demoVideoUrl, demoChannelUrl, demoChannelTitle, demoVideoTitle } from '../utils/constants';

const VideoCard = ({video: {id: {videoId}, snippet}}) => {
  
  return (
    <Card sx={{width: '100%', boxShadow: 'none', borderRadius: 0}}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia 
          image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          alt={snippet?.title}
          sx={{width: '100%', height: {xs: '300px', md: '180px'}, paddingBottom: '20px'}}
        />
      </Link>
      <CardContent sx={{backgroundColor: 'black', padding: {xs: 1, md: 0}}}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant='subtile1' fontWeight='bold' color='#fff'>
            {snippet?.title.slice(0, 50) || demoVideoTitle.slice(0, 50) }
            {snippet?.title.length > 50 && <span>...</span>}
          </Typography>
        </Link>
        <div style={{height: '5px'}}></div>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
          <Typography variant='subtile2' fontWeight='bold' color='gray'>
            {snippet?.channelTitle || demoChannelTitle} 
            <LiveTvIcon sx={{fontSize: 15, color: 'red', ml:'5px'}}/>
          </Typography>
        </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard
