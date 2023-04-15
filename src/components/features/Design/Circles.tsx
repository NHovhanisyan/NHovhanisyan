import React from 'react'
import { Box } from '@mui/material'

import styles from "./styles.module.scss"

export const Circles = () => {
  return (
    <Box className={styles.firstCircle}>
      <Box className={styles.secondCircle}>
        <Box className={styles.thirdCircle}></Box>
      </Box>
    </Box>
  )
}
