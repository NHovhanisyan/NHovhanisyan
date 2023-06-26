import React from 'react'
import { Box, Typography } from '@mui/material'

import styles from './styles.module.scss'

type SectionHeaderProps = {
  title: string
  label: string
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  label,
}) => {
  return (
    <Box className={styles.sectionHeader}>
      <Typography className={styles.label}>|| &nbsp; {label}</Typography>
      <Typography className={styles.title}>{title}</Typography>
    </Box>
  )
}
