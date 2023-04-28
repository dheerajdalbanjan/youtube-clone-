import { Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React, { useState } from 'react'
import fetchFromApi from '../utils/fetchFromApi'
import Sidebar from './Sidebar'
import Videos from './Videos'

const Feed = (props) => {
    console.log(props.initial)
    const ini = props.initial != undefined?props.initial:"New"
    const [selected, setselected] = useState(ini)
    function handleChange(name){
        setselected(name)
        props.give(name)
    }
  return (
    <Stack sx={{flexDirection:{sm:'column',lg:'row'},justifyContent:'space-around'}}>
        <Box sx={{height:{sm:'auto', md:'88vh'}, borderRight:'1px solid gray', px:2, pt:1.5}}>
            <Sidebar change={handleChange} current={selected}/>
            <Typography variant='Body2' className='copyright' sx={{color:'white', m:2, display:{xs:'none', md:'block'}}}>
                copyright 2022 retube
            </Typography>
        </Box>
        <Box sx={{px:3,overflowY:'auto',height:'93vh' ,  '&::-webkit-scrollbar':{width:{xs:'0.3rem', sm:'0.7rem'}},'&::-webkit-scrollbar-thumb':{borderRadius:'16px',bgcolor:'gray'},mr:1}}>
            <Typography variant='h4' fontWeight='bold' sx={{color:'white', mb:3,mt:2 }}>
            {selected}
            <span style={{color:'#7f0dff'}}> Videos</span>
            </Typography>
            <Videos data={props.data.items}/>
        </Box>
    </Stack>
  )
}

export default Feed

