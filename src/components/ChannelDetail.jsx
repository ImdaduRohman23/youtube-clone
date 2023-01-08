import React, { useEffect, useState } from 'react';
import ChannelCard from './ChannelCard';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { useParams } from 'react-router-dom';
import Videos from './Videos';
import ChannelCardSkeleton from './ChannelCardSkeleton';

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const {id} = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => {
        setChannelDetail(data?.items[0]);
        setLoading(false);
      });

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => setVideos(data?.items))
  }, [id]);

  return (
    <div>
      {
        loading ? 
        <ChannelCardSkeleton />
        :
        <>
          <ChannelCard channelDetail={channelDetail} />
          <Videos videos={videos}/>
        </>
      }

    </div>
  )
}

export default ChannelDetail
