import { Grid, Skeleton, Stack } from '@mui/material'
import React from 'react'
import fetchFromApi from '../utils/fetchFromApi'
import Channelcard from './Channelcard'
import Videocard from './Videocard'

const Videos = ({data}) => {
  return (
    <Grid container spacing={3} sx={{pb:8}}>
        {
           data && data.map((e, i )=>(
            <Grid key={i} item xs= {12} sm ={ 6 } md= {4 }>
            {e?e.id.videoId?<Videocard data={e.snippet} id={e.id.videoId}/>:
            <Channelcard data={e.snippet} id = {e.id.channelId}/>:<Stack spacing={1} key={i} sx={{width:'100%'}}>
              <Skeleton variant="rectangular" height={240} />
              <Skeleton variant="text" fontSize={60} sx={{fontSize:40}} />
              <Skeleton variant="text"  fontSize={60} sx={{fontSize:30}} />
            </Stack>}
            </Grid>)
           )
        }
    </Grid>
  )
}

export default Videos


