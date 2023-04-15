import React, { ReactNode } from 'react'

import styles from './styles.module.scss'

type ButtonProps = {
  title?: string
  children?: ReactNode
  onClick?: () => void
}

export const Button: React.FC<ButtonProps> = ({ title, children, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick || undefined}>
      {title || children}
    </button>
  )
}
