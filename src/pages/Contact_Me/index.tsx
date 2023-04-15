import React from 'react'
import { Box } from '@mui/material'
import { Title } from '../../components/shared/Title'
import { EmailForm } from '../../components/features/EmailForm'
import { ContactCard } from '../../components/features/ContactCard'
import { SocialLinks } from '../../components/features/SocialLinks'
import { ContactInfo } from '../../utils/ContactMe/constants'

import styles from './styles.module.scss'

export const ContactMe = () => {
  return (
    <Box className={styles.ContactMe}>
      <Title title="Contact Me" />
      <Box className={styles.content}>
        <Box className={styles.contactInfoAndForm}>
          <Box className={styles.contactSidebar}>
            <Box className={styles.contactInfo}>
              {ContactInfo.map((contact) => (
                <ContactCard key={contact.title} {...contact} />
              ))}
            </Box>
            <Box className={styles.contactInfo}>
                <Title size={30} title="Follow Me"/>
                <SocialLinks />
            </Box>
          </Box>
          <EmailForm />
        </Box>
      </Box>
    </Box>
  )
}
