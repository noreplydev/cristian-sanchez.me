import easyIP from '../assets/images/projects/easy-ip.png'
import lorpie from '../assets/images/projects/lorpie.png'
import passlock from '../assets/images/projects/passlock.png'

export const projects = [
  {
    name: 'Passlock',
    description: 'Pass manager with shareable workspaces',
    tools: 'React',
    image: passlock,
    link: 'https://pass-manager-nine.vercel.app/'
  },
  {
    name: 'EasyIP',
    description: 'Basic REST API that returns the client IP',
    tools: 'Node, Express & React',
    image: easyIP,
    link: 'https://github.com/sanchez-cristian/easy-ip'
  },
  {
    name: 'Lorpie',
    description: 'Camera color picker for android',
    tools: 'Java',
    image: lorpie,
    link: 'https://play.google.com/store/apps/details?id=ml.cpicontacto.lorpie&hl=es&gl=US'
  }
]
