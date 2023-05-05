import style from './gridLine.module.css'

export default function GridLine({ lineType, offset = 'noOffset' }) {
  return (
    <div className={`${style[lineType]} ${offset}`}></div>
  )
}