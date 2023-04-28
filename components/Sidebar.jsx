import { Category } from '@mui/icons-material'
import { Button, IconButton, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { categories } from '../utils/constant'

const Sidebar = (props) => {
  return (
    <Stack sx={{display:'flex', flexDirection:{xs:'row', md:'column'}, '&::-webkit-scrollbar':{width:{xs:'0.1rem', md:'0.7rem', height:'0.2rem'}},'&::-webkit-scrollbar-thumb':{borderRadius:'16px',bgcolor:'gray'},overflowX:{xs:'auto', md:'hidden'}, overflowY:{xs:'hidden', md:'auto'},pr:3, height:{xs:'4rem', md:'90%'},}}>
        {categories.map((catergory)=>(
            <IconButton key={catergory.name} onClick={()=>props.change(catergory.name)} sx={{display:'flex',alignItems:'center', justifyContent:'start',pr:{xs:2,md:4}, pl:1,gap:{xs:1, md:2},my:1,width:{xs:'auto', md:'12rem'},  color:"white !important", borderRadius:"3px", ":hover":{bgcolor:'#7f0dff',"& .MuiBox-root":{color:'white'}, boxShadow:"1px -2px rgb(0 0 0 / 12%)"} , bgcolor:props.current === catergory.name && "#7f0dff"}}>
                <Box  sx={{color:props.current === catergory.name?'white':'#7f0dff', p:0 ,display:'flex' ,alignItems:'center',  ':hover':{color:'white'}}}>{catergory.icon}</Box>
                <Typography sx={{display:"inline-flex"}}>{catergory.name}</Typography>
            </IconButton>
        ))}
    </Stack>
  )
}

export default Sidebar