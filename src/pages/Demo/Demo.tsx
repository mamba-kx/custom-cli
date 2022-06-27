import { useNavigate } from 'react-router-dom'
import './Demo.scss'
interface IProps {
  name: string
}

const Demo: React.FC<IProps> = ({ name }) => {
  const navigate = useNavigate()
  return (
    <div
      className="wrapper"
      onClick={() => {
        navigate('/')
      }}
    >
      {name}组件
    </div>
  )
}

export default Demo
