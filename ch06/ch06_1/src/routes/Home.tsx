import {FC} from 'react'
import {Link} from 'react-router-dom'

type HomeProps = {
  title?: string
}

const Home: FC<HomeProps> = ({title}) => {
  // ?? 왼쪽의 값이 null 또는 undefined인 경우에 오른쪽 값을 반환, 그외에 왼쪽 값 반환
  return (
    <div>
      <div className="flex bg-gray-200 p-4">
        <Link to="/">Home</Link>
        <Link to="/welcome" className="ml-4">
          Welcome
        </Link>
        <Link to="/board" className="ml-4">
          Board
        </Link>
      </div>
      <p>{title ?? 'Home'}</p>
    </div>
  )
}

export default Home
