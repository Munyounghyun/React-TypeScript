import {Outlet} from 'react-router-dom'
import NavigationBar from './NavigationBar'
import Footer from './Footer'

//기본 테두리 설정
//Outlet에 바뀌는 컴포넌트들이 들어감
export default function Layout() {
  return (
    <>
      <NavigationBar />
      <Outlet />
      <Footer />
    </>
  )
}
