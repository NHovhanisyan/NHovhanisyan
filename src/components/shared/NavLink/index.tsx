import React from 'react'
import { NavLink } from 'react-router-dom'
import { Box } from '@mui/material'

import styles from './styles.module.scss'

type NavLinkProps = {
  title: string
  path: string
}

export const NavBarLink: React.FC<NavLinkProps> = ({ title, path }) => {
  return (
    <Box className={styles.linkContainer}>
      <NavLink
        className={({ isActive }) =>
          isActive ? styles.linkActive : styles.link
        }
        to={path}
      >
        {title}
      </NavLink>
    </Box>
  )
}
