import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const Channelcard = ({data}) => {
  return (
    <Card sx={{bgcolor:'inherit',border:'solid', borderColor:'gray',borderWidth:'1px',boxShadow:'none', borderRadius:'10px'}}>
      <CardActionArea sx={{display:'flex', flexDirection:{xs:'column'},alignItems:{xs:'start', sm:'center'},pb:4}}>
      <CardMedia
        component="img"
          sx={{width:{xs:'100%'},objectFit:'contain'}}
          image={data.thumbnails.high.url}
          alt={data.title}
      />
      <CardContent>
          <Typography gutterBottom variant="h5" color='white' component="div">
            {data.title}
          </Typography>
          <Typography variant="body2" color="white">
            {data.description}
          </Typography>
        </CardContent>
        </CardActionArea>
    </Card>
  )
}

export default Channelcard