import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import { Input } from '../../shared/Input'
import { Button } from '../../shared/Button'
import {
  EmailFormInputs,
  InputTitles,
} from '../../../utils/ContactMe/constants'
import { EmailFormTypes, EmailFormInputTypes } from '../../../types/ContactMe'

import styles from './styles.module.scss'

export const EmailForm = () => {
  const [emailForm, setEmailForm] = useState<EmailFormTypes>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    comment: '',
  })

  console.log(emailForm, 'huvbbjb')

  const handleChange = (value: string, title: InputTitles) => {
    setEmailForm({ ...emailForm, [title]: value })
  }

  const handleSubmit = () => {
  }

  return (
    <Box className={styles.EmailForm}>
      <Typography className={styles.getInTouch}>
        || &nbsp; Get In Touch
      </Typography>
      <Typography className={styles.hint}>
        If you have any project or need help. Contact me
      </Typography>
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
