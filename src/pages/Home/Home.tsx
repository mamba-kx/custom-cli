import './Home.scss'
import { useNavigate } from 'react-router-dom'
interface IProps {
  name: string
}
const Home: React.FC<IProps> = ({ name }) => {
  const navigate = useNavigate()
  return (
    <div className="wrapper" onClick={() => navigate('/demo')}>
      {name}组件
    </div>
  )
} 

export default Home
