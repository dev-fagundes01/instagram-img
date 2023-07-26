import { AiOutlineHome } from 'react-icons/ai'
import { BiExit, BiMoon } from 'react-icons/bi'
import { BsSun, BsGear } from 'react-icons/bs'
import { FiSend } from 'react-icons/fi'
import { MdMonitor } from 'react-icons/md'
import { RiGlobalLine } from 'react-icons/ri'

import Logoinstagram from '../../assets/logo-instagram.svg'

import { Flex, Spacer, Typegraphy } from '../../style'
import * as C from './styles'

const InfoNav = [
  {
    icon: <AiOutlineHome />,
    navName: 'Inicio'
  },
  {
    icon: <RiGlobalLine />,
    navName: 'Explorar'
  },
  {
    icon: <FiSend />,
    navName: 'Direct'
  },
  {
    icon: <MdMonitor />,
    navName: 'IGTV'
  },
  {
    icon: <BsGear />,
    navName: 'Ajustes'
  }
]
export function NavBar({ themeToggler, theme }) {
  function GroupText({ title, subTitle }) {
    return (
      <Flex>
        <Typegraphy>{title}</Typegraphy>
        <Typegraphy weight="300" size="12px" height="14px">
          {subTitle}
        </Typegraphy>
      </Flex>
    )
  }
  return (
    <C.Container>
      <Flex>
        <C.BtnTheme onClick={themeToggler}>
          {theme === 'light' ? <BiMoon /> : <BsSun />}
        </C.BtnTheme>
      </Flex>

      <img src={Logoinstagram} alt="logo instagram" />

      <Flex>
        <C.Profile>
          <img
            src="https://github.com/DiegoSilva1919.png"
            alt="img do perfil do github"
          />
        </C.Profile>
        <GroupText title="Diego Fagundes" subTitle="@DiegoSilvaS" />
      </Flex>

      <Spacer />

      <Flex direction="row" justify="space-between">
        <GroupText title="148" subTitle="Publicações" />
        <GroupText title="15K" subTitle="Seguidores" />
        <GroupText title="1k" subTitle="Seguindo" />
      </Flex>

      <Spacer />

      <Flex align="start" gap="16px">
        {InfoNav.map((Info) => (
          <C.ListIcon key={Info.navName}>
            {Info.icon}
            <Typegraphy>{Info.navName}</Typegraphy>
          </C.ListIcon>
        ))}
      </Flex>

      <Spacer />
      <C.Divider />
      <Spacer />

      <Flex align="start">
        <C.ListIcon>
          <BiExit />
          <Typegraphy>Sair</Typegraphy>
        </C.ListIcon>
      </Flex>
    </C.Container>
  )
}
