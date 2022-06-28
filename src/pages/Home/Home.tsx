import { useNavigate } from 'react-router-dom'
import style from './Home.module.less'

interface IProps {
  name: string
}
const Home: React.FC<IProps> = ({ name }) => {
  const navigate = useNavigate()
  return (
    <div className={style.wrapper} onClick={() => navigate('/demo')}>
      {name}组件
    </div>
  )
}

export default Home
