import React from 'react'
import { Box } from '@mui/material'
import { socialContacts } from '../../../utils/ContactMe/constants'
import { SocialLink } from '../../shared/SocialLink'

import styles from './styles.module.scss'

export const SocialLinks = () => {
  return (
    <Box className={styles.Links}>
      {socialContacts.map((link) => (
        <SocialLink
          key={link.linkHref}
          Icon={<link.Icon color="warning" style={{ width: 40, height: 40 }} />}
          linkHref={link.linkHref}
        />
      ))}
    </Box>
  )
}
