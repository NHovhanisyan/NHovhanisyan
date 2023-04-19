import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { Box, IconButton } from '@mui/material'
import logo from '../../../assets/Logo/NarTech.png'
import { NavLinks } from '../../../utils/Navbar/constants'
import { NavBarLink } from '../../shared/NavLink'
import DrawerComponent from '../../shared/Drawer'

import styles from './styles.module.scss'

export const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const theme = useTheme()
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'))

  const handleClose = () => setIsDrawerOpen(false)

  return (
    <Box className={styles.navbar}>
      <Box className={styles.content}>
        {!isMediumScreen ? (
          <>
            <img className={styles.logo} src={logo} alt="logo" />
            {NavLinks.map((link) => (
              <NavBarLink key={link.path} {...link} />
            ))}
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
          <NavBarLink
            key={link.path}
            {...link}
            onClick={handleClose}
          />
        ))}
      </DrawerComponent>
    </Box>
  )
}
