import React, { ReactNode } from 'react'

import styles from './styles.module.scss'

type ButtonProps = {
  title?: string
  children?: ReactNode
  onClick?: () => void
  style?: React.CSSProperties
}

export const Button: React.FC<ButtonProps> = ({
  style,
  title,
  children,
  onClick,
}) => {
  return (
    <button
      style={style}
      className={styles.button}
      onClick={onClick || undefined}
    >
      {title || children}
    </button>
  )
}
