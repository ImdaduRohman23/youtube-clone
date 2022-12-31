import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { demoProfilePicture } from '../utils/constants'

const ChannelCard = ({channelDetail}) => {
  console.log(channelDetail)
  return (
    <Box sx={{
      boxShadow: 'none',
      borderRadius: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: {xs: '365px', md: '320px'},
      height: '326px',
      margin: 'auto'
    }}>
      <CardContent sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#fff'
    }}>
        <CardMedia 
          image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
          alt={channelDetail?.snippet?.title}
          sx={{height: '180px', width: '180px', borderRadius: '50%',mb: 2, border: '1px solid #eaeaea'}}
        />
        <Typography variant='h6'>
          {channelDetail?.snippet?.title}
        </Typography>
        <Typography>
          {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
        </Typography>
      </CardContent>
    </Box>
  )
}

export default ChannelCard
