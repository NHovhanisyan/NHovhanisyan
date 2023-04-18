import React from 'react'
import { Box, Typography } from '@mui/material'

import styles from './styles.module.scss'
import { LinearProgressWithLabel } from '../LinearProgressWithLabel'

type SpecialSkillCardProps = {
  title: string
  value: number
}

export const SpecialSkillCard: React.FC<SpecialSkillCardProps> = ({
  title,
  value,
}) => {
  return (
    <Box className={styles.card}>
      <Typography className={styles.title}>{title}</Typography>
      <LinearProgressWithLabel value={value} />
    </Box>
  )
}
