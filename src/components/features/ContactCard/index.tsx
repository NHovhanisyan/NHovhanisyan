import React from 'react'
import { Box, Typography } from '@mui/material'

import styles from './styles.module.scss'

type ContactCardProps = {
  title: string
  contact: string
}

export const ContactCard: React.FC<ContactCardProps> = ({ title, contact }) => {
  return (
    <Box className={styles.ContactCard}>
      <Typography className={styles.title}>{title}</Typography>
      <Typography className={styles.contact}>{contact}</Typography>
    </Box>
  )
}
