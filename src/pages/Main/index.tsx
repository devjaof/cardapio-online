import { MainContainer, Logo } from './styles'

import { Outlet } from 'react-router-dom';
import { Sidebar } from '../../components/Sidebar'

import logoExample from './logoExample.png';

export default function Main() {
  return (
    <MainContainer>
      <Sidebar />

      <section>
        <Logo src={logoExample} alt="logomarca de exemplo" title="logomarca de exemplo"/>
        <Outlet />
      </section>
    </MainContainer>
  )
}
