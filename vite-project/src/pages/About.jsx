import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Typography } from '@mui/material'
const About = () => {
  return (
   <Layout>
    <Box sx={{my:15,
    textAlign:"center",
    p:"2",
    "& h4":{
       fontWeight:"bold",
       my:2,
       fontSize:"2rem"
    },"& p":{
      textAlign:'justify'
    },
    "@media (max-width:600px)":{
      mt:0,
      "& h4":{
        fontSize:'1.5rem',
      }
    }}}>
      <Typography variant='h4'>
        Welcome To My Resturant
      </Typography>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio ad consectetur
         exercitationem repellendus accusamus, quisquam, quae ratione inventore, 
         dignissimos pariatur at alias adipisci ipsum beatae incidunt earum! Quia sit
          ducimus commodi temporibus. Facere non quisquam aliquid, distinctio soluta
           illum accusamus eos dolor ut ducimus quis, quibusdam aliquam, porro a.
            Praesentium eveniet ratione commodi sequi nisi sapiente! Quaerat modi 
            similique exercitationem tempore libero quo? Dolorem repellendus eaque
             quibusdam itaque illum rem iure officiis, ipsa consequatur natus nostrum
              atque facere eveniet voluptatibus totam ratione harum porro asperiores iusto. Iste fuga
               ipsam pariatur qui consequatur. Porro reprehenderit soluta corrupti debitis
                quidem aliquam quam.</p>
                <br/>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio ad consectetur
         exercitationem repellendus accusamus, quisquam, quae ratione inventore, 
         dignissimos pariatur at alias adipisci ipsum beatae incidunt earum! Quia sit
          ducimus commodi temporibus. Facere non quisquam aliquid, distinctio soluta
           illum accusamus eos dolor ut ducimus quis, quibusdam aliquam, porro a.
            Praesentium eveniet ratione commodi sequi nisi sapiente! Quaerat modi 
            similique exercitationem tempore libero quo? Dolorem repellendus eaque
             quibusdam itaque illum rem iure officiis, ipsa consequatur natus nostrum
              atque facere eveniet voluptatibus totam ratione harum porro asperiores iusto. Iste fuga
               ipsam pariatur qui consequatur. Porro reprehenderit soluta corrupti debitis
                quidem aliquam quam.</p>

    </Box>
   </Layout>
  )
}

export default About