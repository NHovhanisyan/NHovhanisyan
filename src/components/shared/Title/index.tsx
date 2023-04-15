import React from 'react'

import styles from "./styles.module.scss"

type TitleProps = {
  title: string;
  size?: number;
}

export const Title: React.FC<TitleProps> = ({ title, size }) => {
  return <p style={{fontSize: size}} className={styles.title}>{title}</p>
}
