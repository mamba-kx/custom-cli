import { useNavigate } from 'react-router-dom'
import style from './Demo.module.less'
interface IProps {
  name: string
}

const Demo: React.FC<IProps> = ({ name }) => {
  const navigate = useNavigate()
  return (
    <div
      className={style.wrapper}
      onClick={() => {
        navigate('/')
      }}
    >
      {name}组件
    </div>
  )
}

export default Demo
