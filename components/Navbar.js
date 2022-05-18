import React from 'react'
import Image from 'next/image'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import styles from '../styles/Navbar.module.css'
import Link from 'next/link'
import { useScrollTrigger } from '@mui/material'
import PropTypes from 'prop-types';

const Navbar = (props) => {
  function ElevationScroll(props) {
    const { children, window } = props;

    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }
  
  ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };

  return (
    <ElevationScroll {...props}>
      <AppBar position="fixed" sx={{ backgroundColor: "#FFFFFF", }} elevation={0}>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems:"center", marginX:"150px", }}>
            <Image 
              src="/midasLogo.png" 
              width={100}
              height={40}
              style={{ cursor:'pointer' }} />


            <div style={{ display: "flex", gap:"20px", justifyContent: "space-between", alignItems:"center", fontWeight:700, color: "#000000", fontSize: "19px", }}>
              <Link href="/"><a>Home</a></Link>
              <Link href="/"><a>FAQ</a></Link>
              <Link href="/"><a>Contact Us</a></Link>
              <button className={styles.waitlistBtn}>Join waitlist</button>
            </div>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
  )
}

export default Navbar;