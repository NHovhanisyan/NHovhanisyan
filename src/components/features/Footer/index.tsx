import { Box, Typography, useMediaQuery } from '@mui/material'
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded'
import { useTheme } from '@material-ui/core'
import logo from '../../../assets/Logo/NarTech.png'

import styles from './styles.module.scss'

const Footer = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down(800))

  return (
    <Box className={styles.footer}>
      <Box className={styles.info}>
        <Typography className={styles.dark}>© 2023 Made </Typography>
        <Typography className={styles.light}>&nbsp;NarTech</Typography>
        <Typography className={styles.dark}>&nbsp;with&nbsp;</Typography>
        <FavoriteRoundedIcon
          sx={
            isMobile
              ? { color: 'white', width: 15, height: 15 }
              : { color: 'white' }
          }
        />
        <Typography className={styles.dark}>
          &nbsp;by Narek Hovhannisyan
        </Typography>
      </Box>
      <img className={styles.logo} src={logo} alt="logo" />
    </Box>
  )
}

export default Footer
