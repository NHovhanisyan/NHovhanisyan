import { Box } from '@mui/material'
import ServiceCarousel from '../Carousel'
import { SectionHeader } from '../../shared/SectionHeader'

import styles from './styles.module.scss'

const ServicePackets = () => {
  return (
    <Box className={styles.servicePackets}>
      <SectionHeader
        title={'Services Provide For My Clients.'}
        label={'My Services'}
      />
      <ServiceCarousel />
    </Box>
  )
}

export default ServicePackets
