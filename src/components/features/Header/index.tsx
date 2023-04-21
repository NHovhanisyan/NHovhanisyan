import { useState } from 'react'
import { useNavigate } from 'react-router'
import MenuIcon from '@mui/icons-material/Menu'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { Typography } from '@material-ui/core'
import { Box, IconButton } from '@mui/material'
import KeyboardDoubleArrowRightRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowRightRounded'
import logo from '../../../assets/Logo/NarTech.png'
import { Button } from '../../shared/Button'
import { NavLinks } from '../../../utils/Navbar/constants'
import { NavBarLink } from '../../shared/NavLink'
import DrawerComponent from '../../shared/Drawer'

import styles from './styles.module.scss'

export const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const navigate = useNavigate()
  const theme = useTheme()
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'))

  const handleClose = () => setIsDrawerOpen(false)

  return (
    <Box className={styles.navbar}>
      <Box className={styles.content}>
        {!isMediumScreen ? (
          <>
            <img
              className={styles.logo}
              src={logo}
              alt="logo"
              onClick={() => navigate('/')}
            />
            {NavLinks.map((link) => (
              <NavBarLink key={link.path} {...link} />
            ))}
            <Button
              style={{ marginTop: 0, padding: '8px 25px' }}
              onClick={() => navigate('contact-me')}
            >
              <Typography>Hire Me&nbsp;</Typography>
              <KeyboardDoubleArrowRightRoundedIcon />
            </Button>
          </>
        ) : (
          <IconButton onClick={() => setIsDrawerOpen(true)}>
            <MenuIcon sx={{ color: 'white' }} />
          </IconButton>
        )}
      </Box>

      <DrawerComponent
        isOpen={isDrawerOpen}
        onClose={handleClose}
        anchor="right"
        variant="persistent"
      >
        {NavLinks.map((link) => (
          <NavBarLink key={link.path} {...link} onClick={handleClose} />
        ))}
      </DrawerComponent>
    </Box>
  )
}
