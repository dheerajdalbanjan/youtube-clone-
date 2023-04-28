import { Card, CardActionArea, CardContent, CardMedia, Divider, Typography } from '@mui/material'
import { borderRadius, Stack } from '@mui/system'
import React from 'react'

const Videocard = ({data, id}) => {
  return (
    <Card sx={{bgcolor:'inherit',border:'solid', borderColor:'#6B728E',borderWidth:'1px',boxShadow:'3px 5px 5px 1px rgba(79,68,79,0.15)'}}>
      <CardActionArea sx={{display:'flex', flexDirection:{xs:'column'}, pb:{xs:1,"425px":2,sm:2}}} href={`/video/${id}`}>
      <CardMedia
        component="img"
          sx={{width:{xs:'100%'},":hover":{scale:'105%'},transition:'all',transform:'inherit',transitionDuration:'500ms'}}
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
          <Divider sx={{my:2, bgcolor:'gray'}}/>
          <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
            <Typography sx={{py:'4px',px:'8px', borderRadius:'15px', bgcolor:'#7f0dff'}} variant="body2" color="white">{data.channelTitle}</Typography>
            <Typography  variant="body2" color="white">{data.publishTime.split("T")[0]}</Typography>
          </Stack>
        </CardContent>
        </CardActionArea>
    </Card>
  )
}

export default Videocard