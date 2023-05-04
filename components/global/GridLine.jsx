import style from './gridLine.module.css'

export default function GridLine({ lineType, offset = 'noOffset' }) {
  const type = {
    'horizontalTop': 'gridLineHorizontalTop',
    'horizontalBottom': 'gridLineHorizontalBottom',
    'verticalLeft': 'gridLineVerticalLeft',
    'verticalRight': 'gridLineVerticalRight'
  }

  return (
    <div className={`${style[type[lineType]]} ${offset}`}></div>
  )
}