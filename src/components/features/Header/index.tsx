import React from 'react'
import { Box } from '@mui/material'
import logo from '../../../assets/Logo/NarTech.png'
import { NavLinks } from '../../../utils/Navbar/constants'
import { NavBarLink } from '../../shared/NavLink'

import styles from './styles.module.scss'

export const Header = () => {
  return (
    <Box className={styles.navbar}>
      <Box className={styles.content}>
        <img className={styles.logo} src={logo} alt="logo" />
        {NavLinks.map((link) => (
          <NavBarLink key={link.path} {...link} />
        ))}
      </Box>
    </Box>
  )
}
