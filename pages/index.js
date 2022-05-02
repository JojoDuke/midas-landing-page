import Image from 'next/image'
import styles from '../styles/Home.module.css'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='App'>
      {/* NAVBAR */}
      <AppBar position="fixed" color="transparent" elevation="0">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems:"center", }}>
          <Image 
            src="/midasLogo.png" 
            width={100}
            height={40}
            style={{ cursor:'pointer' }} />


          <div style={{ display: "flex", gap:"20px", justifyContent: "space-between", alignItems:"center", }}>
            <Link href="/"><a>Home</a></Link>
            <Link href="/"><a>About</a></Link>
            <Link href="/"><a>FAQ</a></Link>
            <Link href="/"><a>Contact Us</a></Link>
            <button>Join waitlist</button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}
