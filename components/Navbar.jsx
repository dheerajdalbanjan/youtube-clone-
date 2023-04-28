
import { Search } from '@mui/icons-material'
import { FormControl, IconButton, Input, InputAdornment, InputBase, InputLabel, Paper, TextField } from '@mui/material'
import { Stack } from '@mui/system'
import Image from 'next/image.js'
import Link from 'next/link.js'
import React from 'react'
import  logo  from '../public/logo-no-background.png'

const Navbar = () => {
  return (
    <Stack direction={'row'} alignItems='center' p={2} sx={{background:'#0d0620',borderBottom:'solid',borderWidth:1,boxShadow:'1px 8px 5px 0px rgba(246,232,232,0.08)',borderColor:'#B2B2B2', position:'sticky', top:0, justifyContent:'space-between'}}>
        <Link href={'/'} style={{display:'flex', alignItems:'center'}}>
            <Image src={logo} alt='logo' height={'30'} width={120}/>
        </Link>
        <FormControl sx={{ m: 1, width: '25ch',":focus-within":{width:'35ch'},transition:'ease-in',transitionDuration:'400ms' , bgcolor:'inherit', color:'white'}} variant="standard">
          <Input
            id="standard-adornment-password"
            color='secondary'
            placeholder='search...'
            sx={{color:'white', ":focus":{borderColor:'white'}}}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  sx={{color:'white'}}
                >
                  <Search />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
    </Stack>
    
  )
}

export default Navbar