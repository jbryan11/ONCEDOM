import  {createMuiTheme} from '@material-ui/core/styles'
import {ThemeProvider} from '@material-ui/styles' 
import React from 'react'
import Nav from '../components/navbar'
const theme = createMuiTheme({
  palette:{
    primary:{
      light:'#6ff9ff',
      main:'#26c6da',
      dark:'#0095a8',
      contrastText:'#880e4f',
    },
    secondary:{
      light: '#ff5c8d',
      main: '#d81b60',
      dark: '#a00037',
      contrastText: '#fff',
    },
   
  },
})

export default()=>{
  return(
    <ThemeProvider theme={theme}>
      <Nav/>
    </ThemeProvider>
  )
}