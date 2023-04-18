import React, { useState } from 'react'
import emailJs from '@emailjs/browser'
import { Box, Typography } from '@mui/material'
import { Input } from '../../shared/Input'
import { Button } from '../../shared/Button'
import {
  EmailFormInputs,
  InputTitles,
} from '../../../utils/ContactMe/constants'
import { EmailFormTypes, EmailFormInputTypes } from '../../../types/ContactMe'

import styles from './styles.module.scss'
import { SectionHeader } from '../../shared/SectionHeader'

export const EmailForm = () => {
  const [emailForm, setEmailForm] = useState<EmailFormTypes>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    comment: '',
  })

  const handleChange = (value: string, title: InputTitles) => {
    setEmailForm({ ...emailForm, [title]: value })
  }

  const handleSubmit = () => {
    emailJs.init('u-WqWS74VmG1NDY30')
    emailJs
      .send(
        'service_7bwnu6k',
        'template_gvi0ds4',
        {
          name: 'John Doe',
          email: 'n.hovo@bk.ru',
          message: 'This is a test message',
        },
        'u-WqWS74VmG1NDY30'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <Box className={styles.EmailForm}>
      <SectionHeader
        title={'If you have any project or need help. Contact me'}
        label={'Get In Touch'}
      />
      <Box className={styles.FormInputs}>
        {EmailFormInputs.map(({ title, type }: EmailFormInputTypes) => (
          <Input
            key={title}
            placeholder={title}
            type={type}
            handleChange={handleChange}
          />
        ))}
      </Box>

      <Button title="Send Message" onClick={handleSubmit} />
    </Box>
  )
}
