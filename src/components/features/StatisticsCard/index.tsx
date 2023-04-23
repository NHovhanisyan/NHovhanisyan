import { FC, useEffect, ReactNode, useState } from 'react'
import { Box, Typography } from '@mui/material'
import styles from './styles.module.scss'

interface IProps {
  title: string
  count: number
  icon: ReactNode
}

const StatisticsCard: FC<IProps> = ({ title, count, icon }) => {
  const [progress, setProgress] = useState(0)
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
  };

  useEffect(() => {
    if(scrollPosition > 550 && progress !== count) {
      let timer = setInterval(() => {
        setProgress((prevProgress) =>
          prevProgress >= count ? prevProgress : prevProgress + 1
        )
      }, 2000 / count)
  
      return () => {
        clearInterval(timer)
      }
    }

  }, [scrollPosition])

useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    setScrollPosition(window.pageYOffset)

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);



  return (
    <Box className={styles.card}>
      <Box className={styles.icon}>{icon}</Box>
      <Box>
        <Typography className={styles.count}>{progress}+</Typography>
        <Typography className={styles.title}>{title}</Typography>
      </Box>
    </Box>
  )
}

export default StatisticsCard
