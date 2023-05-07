import style from './gridLine.module.css'

export default function GridLine({ lineType, position = 'topLeft', offset = 'noOffset' }) {
  return (
    <div className={`${style[lineType]} ${style[offset]} ${style[position]}`}></div>
  )
}