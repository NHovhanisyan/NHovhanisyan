import React from 'react'
import { Box, Link, Typography } from '@mui/material'

import styles from './styles.module.scss'

type ServiceCardProps = {
  logo_title: string
  image_path: string
  url: string
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  logo_title,
  image_path,
  url,
}) => {
  return (
    <Box className={styles.serviceCard}>
      <Link className={styles.serviceLink} href={url} target="blank">
        <img className={styles.serviceImg} src={image_path} alt="service" />
        <Typography className={styles.title}>{logo_title}</Typography>
      </Link>
    </Box>
  )
}
