import Slider from 'react-slick'
import { useTheme } from '@material-ui/core'
import { useMediaQuery } from '@mui/material'
import Slide from '../Slide'
import { servicePackets } from '../../../utils/Carousel/constants'

import styles from './styles.module.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const ServiceCarousel = ({}) => {
  const theme = useTheme()
  const tablet = useMediaQuery(theme.breakpoints.down(1400))
  const isMobile = useMediaQuery(theme.breakpoints.down(700))

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: tablet && !isMobile ? 2 : isMobile ? 1 : 3,
    slidesToScroll: 1,
  }

  return (
    <Slider className={styles.slider} {...settings} autoplay>
      {servicePackets.map((servicePacket) => (
        <Slide key={servicePacket.title} {...servicePacket} />
      ))}
    </Slider>
  )
}

export default ServiceCarousel
