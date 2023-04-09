import React from 'react'
import Layout from '../components/Layout/Layout'
import {Link} from "react-router-dom"
import Banner from '../images/Banner.jpeg'
import '../styles/HomeStyles.css'
import About from './About'

const Home = () => {
  return (
    <>
    
    <Layout>
      <div className="home" style={{backgroundImage:`url(${Banner})`}}>
        <div className="headerContainer">
          <h1>Food Website</h1>
          <p>Best Food In Bangladesh</p>
          <Link to="/menu">
          <button>
            ORDER NOW
          </button>
          </Link>
         
        </div>
      </div>
    </Layout>
    </>
  )
}

export default Home