import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography, } from '@mui/material'
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
const Contace = () => {
  return (                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
    <Layout>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
      <Box sx={{my:10,ml:10,"& h4":{fontWeight:"bold", mb:2}}}>
        <Typography variant='h4'>
          Contact My Resturant
        </Typography>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, commodi dicta veritatis minus ab dolore nemo aperiam aliquid maxime nulla architecto quaerat reiciendis voluptate? Et voluptatem minima quidem commodi veritatis.</p>
          
      </Box>
      <Box sx={{m:3,width:'600px',ml:10,"@media (max-width:600px)":{width:"300px"}}}>
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
             <TableHead>
              <TableRow>
                <TableCell sx={{bgcolor:'black',color:'white'}}
                align='center'>
                  Contact details.
                </TableCell>
              </TableRow>
             </TableHead>
             <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{color:'red',pt:1}}/> 0123456789 (tollfree)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                </TableCell>
               
              </TableRow>
              <TableRow>
              <TableCell>
                  <MailIcon sx={{color:'skyblue',pt:1}}/> mahi@gmail.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                </TableCell>
              </TableRow>
              <TableRow>
              <TableCell>
                  <CallIcon sx={{color:'green',pt:1}}/> 01700000000
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                </TableCell>
              </TableRow>
             </TableBody>
          </Table>
        </TableContainer>

      </Box>
    </Layout>
  )
}

export default Contace