import React from 'react'
import { Box } from '@mui/material'
import { Title } from '../../components/shared/Title'
import { ServiceCard } from '../../components/features/Service_Card/index'
import { Services } from '../../utils/My_Services/constants'

import styles from './styles.module.scss'

export const MyServices = () => {
  return (
    <Box className={styles.myServices}>
      <Box className={styles.header}>
        <img
          className={styles.logo}
          src="https://htmldemo.net/lendex/lendex/assets/images/icon/service-icon-2.png"
          alt="service"
        />
        <Title title="My Services" />
      </Box>
      <Box className={styles.content}>
        {Services.map((service) => (
          <ServiceCard key={service.logo_title} {...service} />
        ))}
      </Box>
    </Box>
  )
}
