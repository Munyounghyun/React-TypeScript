import {Routes, Route} from 'react-router-dom'
import NoMatch from './NoMatch'
import Board from '../pages/Board'
import Layout from './Layout'
import LandingPage from './LandingPage'
import Signup from './Auth/Signup'
import Login from './Auth/Login'
import Logout from './Auth/Logout'
import RestTest from './RestTest'

export default function RoutesSetup() {
  return (
    <Routes>
      {/*중복 라우터 - 기본레이아웃 설정 하고 안에 내용 바뀌는것은 outlet으로 */}
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="/rest" element={<RestTest />} />
        <Route path="/board" element={<Board />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  )
}
