import React, { ChangeEvent } from 'react'
import { InputTitles } from '../../../utils/ContactMe/constants'

import styles from './styles.module.scss'

type InputProps = {
  placeholder: string
  handleChange: (value: string, title: InputTitles) => void
  type: 'input' | 'textarea'
}

export const Input: React.FC<InputProps> = ({
  placeholder,
  handleChange,
  type,
}) => {
  return (
    <>
      {type === 'input' ? (
        <input
          className={styles.input}
          onChange={(evt: ChangeEvent<HTMLInputElement>) =>
            handleChange(
              evt.target.value,
              placeholder.toLocaleLowerCase() as InputTitles
            )
          }
          placeholder={placeholder}
        />
      ) : (
        <textarea
          className={styles.textarea}
          onChange={(evt: ChangeEvent<HTMLTextAreaElement>) =>
            handleChange(
              evt.target.value,
              placeholder.toLocaleLowerCase() as InputTitles
            )
          }
          placeholder={placeholder}
        />
      )}
    </>
  )
}
