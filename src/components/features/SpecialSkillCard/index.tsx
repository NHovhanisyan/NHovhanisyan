import React from 'react'
import { Box, Typography } from '@mui/material'
import { LinearProgressWithLabel } from '../LinearProgressWithLabel'

import styles from './styles.module.scss'

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
