import React from 'react'
import { NavLink } from 'react-router-dom'
import { Box } from '@mui/material'

import styles from './styles.module.scss'

type NavLinkProps = {
  title: string
  path: string
  onClick?: () => void
}

export const NavBarLink: React.FC<NavLinkProps> = ({
  title,
  path,
  onClick,
}) => {
  return (
    <Box className={styles.linkContainer}>
      <NavLink
        className={({ isActive }) =>
          isActive ? styles.linkActive : styles.link
        }
        to={path}
        onClick={onClick}
      >
        {title}
      </NavLink>
    </Box>
  )
}
