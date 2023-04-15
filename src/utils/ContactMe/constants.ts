import { EmailFormInputTypes, InputType } from '../../types/ContactMe'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import FacebookIcon from '@mui/icons-material/Facebook'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import InstagramIcon from '@mui/icons-material/Instagram'

export enum InputTitles {
  NAME = 'name',
  EMAIL = 'email',
  PHONE = 'phone',
  SUBJECT = 'subject',
  COMMENT = 'comment',
}

export const ContactInfo = [
  { title: 'Phone:', contact: '+37477810019' },
  { title: 'Email:', contact: 'n.hovo@gmail.com' },
  { title: 'Address:', contact: 'Yerevan, Armenia' },
]

export const EmailFormInputs: EmailFormInputTypes[] = [
  { title: 'Name', type: InputType.INPUT },
  { title: 'Email', type: InputType.INPUT },
  { title: 'Phone', type: InputType.INPUT },
  { title: 'Subject', type: InputType.INPUT },
  { title: 'Comment', type: InputType.TEXTAREA },
]

export const socialContacts = [
  {
    linkHref: 'https://www.facebook.com/narek.hovhannisyan.5245961/',
    Icon: FacebookIcon,
  },
  {
    linkHref: 'https://www.instagram.com/narek55_/',
    Icon: InstagramIcon,
  },
  {
    linkHref: 'https://www.linkedin.com/in/narek-hovhannisyann/',
    Icon: LinkedInIcon,
  },
  {
    linkHref: 'https://wa.me/qr/KRJ3KQVTW5FTF1',
    Icon: WhatsAppIcon,
  },
  { linkHref: 'https://github.com/NHovhanisyan', Icon: GitHubIcon },
]
