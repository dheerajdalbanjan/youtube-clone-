import { Badge, Divider, IconButton, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import Navbar from '../../components/Navbar'
import fetchFromApi from '../../utils/fetchFromApi'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';

const videoDetails = ({data}) => {
    const [like, setlike] = useState(0)
    const [dis, setdis] = useState(0)
    const vdata = data.items[0]
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter()
    const {slug} = router.query
    console.log(data)
  return (
    <div>
      <Head>
        <title>{vdata.snippet.title}</title>
      </Head>
      <main>
      <Box sx={{background:'#0d0620',minHeight:'100vh'}}>
          <Navbar />
          <Stack sx={{display:'flex',flexDirection:{xs:'column', md:'row'}}}>
            <Box sx={{p:{xs:3, md:8}, width:{xs:'100%', md:'60%'}, minHeight:'100vh'}}>
              <Box sx={{width:'90%',height:{xs:'250px',sm:'360px', md:'420px', lg:'520px'}}}>
                <ReactPlayer url={`https://www.youtube.com/watch?v=${slug}`}  width={'100%'} height={'100%'}/>
              </Box>
              <Typography variant='h5' fontWeight={'bold'} sx={{width:'90%',my:3, textOverflow:'unset'}} color={'gray'}>{vdata.snippet.title}</Typography>
              <Box sx={{display:'flex', flexDirection:'row',width:'90%', alignItems:'center', justifyContent:'space-between'}}>
                <Stack bgcolor={'gray'} flex flexDirection={'row'} alignItems={'center'} borderRadius='30px' width={'fit-content'}  px={2} >
                  <Typography fontWeight={'bold'} color='whitesmoke'>{vdata.snippet.channelTitle}</Typography>
                  <IconButton sx={{color:'whitesmoke'}}><NotificationsActiveIcon color='white'/></IconButton>
                </Stack>
                <Stack bgcolor={'gray'} flex flexDirection={'row'} alignItems={'center'} borderRadius='30px' width={'fit-content'} px={1} sx={{transition:'ease-in-out', transitionDuration:500}}>
                  <Box onClick={()=>setlike(!like)} sx={{color:'whitesmoke', display:'flex',alignItems:'center',transition:'ease-in-out', transitionDuration:500}}>
                    <IconButton sx={{color:'whitesmoke'}}>{!like?<ThumbUpOffAltIcon />:<ThumbUpAltIcon/>}</IconButton>
                    {like?<Typography>{vdata.statistics.likeCount}</Typography>:null}
                  </Box>
                  <Divider orientation='vertical' textAlign='left' sx={{color:'white'}}>|</Divider>
                  <Box sx={{color:'whitesmoke', display:'flex',alignItems:'center'}}>
                    <IconButton onClick={()=>setdis(!dis)} sx={{color:'whitesmoke'}}>{dis?<ThumbDownIcon/>:<ThumbDownOffAltIcon />}</IconButton>
                  </Box>
                </Stack>
              </Box>
            </Box>
            <Divider sx={{width:'1px'}}/>
            <Box>suggestedvides</Box>
          </Stack>
        </Box>
      </main>
    </div>
  )
}


export default videoDetails


export async function getServerSideProps(context){
    const {slug} = context.query
    const data  = await fetchFromApi(`videos?id=${slug}`)
    return {
      props: {data}, // will be passed to the page component as props
    }
}