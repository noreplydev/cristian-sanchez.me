import Image from "next/image";
import logo from '@/assets/logo.svg'

export default function Footer() {
  return (
    <div className="footer">
      <Image src={logo} className='logo'  alt="Cristian Sánchez logo" />
      <p>© 2023 Cristian Sánchez</p>
      <p>software development with ♥</p>
    </div>
  )
}