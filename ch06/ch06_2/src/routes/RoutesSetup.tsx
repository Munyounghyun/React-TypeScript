import {Routes, Route} from 'react-router-dom'
import NoMatch from './NoMatch'
import Board from '../pages/Board'
import Layout from './Layout'
import LandingPage from './LandingPage'

export default function RoutesSetup() {
  return (
    <Routes>
      {/* 기본레이아웃 설정 하고 안에 내용 바뀌는것은 outlet으로 */}
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="/board" element={<Board />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  )
}
