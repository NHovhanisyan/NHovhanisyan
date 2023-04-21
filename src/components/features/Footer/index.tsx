import { Box, Typography } from '@mui/material'
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import logo from '../../../assets/Logo/NarTech.png'

import styles from './styles.module.scss'

const Footer = () => {
  return (
    <Box className={styles.footer}>
      <Box className={styles.info}>
        <Typography className={styles.dark}>© 2023 Made</Typography>
        <Typography className={styles.light}>&nbsp;NarTech</Typography>
        <Typography className={styles.dark}>&nbsp;with&nbsp;</Typography>
        <FavoriteRoundedIcon sx={{color: "white"}}/>
        <Typography className={styles.dark}> &nbsp;by Narek Hovhannisyan</Typography>
      </Box>
      <img className={styles.logo} src={logo} alt="logo" />
    </Box>
  )
}

export default Footer
