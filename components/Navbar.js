import Image from 'next/image'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import styles from '../styles/Navbar.module.css'
import Link from 'next/link'

const Navbar = () => {
  return (
    <AppBar position="fixed" color="transparent" elevation={4}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems:"center", marginX:"150px", }}>
          <Image 
            src="/midasLogo.png" 
            width={100}
            height={40}
            style={{ cursor:'pointer' }} />


          <div style={{ display: "flex", gap:"20px", justifyContent: "space-between", alignItems:"center", fontWeight:700, color: "#000000", fontSize: "19px", }}>
            <Link href="/"><a>Home</a></Link>
            <Link href="/"><a>About</a></Link>
            <Link href="/"><a>FAQ</a></Link>
            <Link href="/"><a>Contact Us</a></Link>
            <button className={styles.waitlistBtn}>Join waitlist</button>
          </div>
        </Toolbar>
      </AppBar>
  )
}

export default Navbar;