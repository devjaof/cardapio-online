import { MainContainer, Logo } from './styles'
import logoExample from '../../assets/logoExample.png'

import { Outlet } from 'react-router-dom';
import { Sidebar } from '../../components/Sidebar'
import { MyOrder } from '../../components/MyOrder';

export default function Main() {
  return (
    <MainContainer>
      <Sidebar />

      <section>
        <Logo src={logoExample} alt="logomarca de exemplo" title="logomarca de exemplo"/>
        <Outlet />
      </section>

      <MyOrder />
    </MainContainer>
  )
}
