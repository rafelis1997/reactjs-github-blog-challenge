import {
  HeaderBackground,
  HeaderBackgroundContainer,
  HeaderBackgroundEffect,
  HeaderContainer,
  LogoContainer,
} from './styles'
import { Effect } from '../../components/Effect'
import { useRef, useState, useEffect } from 'react'
import { Logo } from '../Logo'

export function Header() {
  const ref = useRef(null)

  const [width, setWidth] = useState(0)

  useEffect(() => {
    if (ref !== null) {
      setWidth(ref.current.offsetWidth)
    }
  }, [ref])

  return (
    <HeaderContainer>
      <HeaderBackgroundContainer />
      <HeaderBackgroundEffect>
        <HeaderBackground ref={ref}>
          <Effect width={width < 768 ? width : width / 2} />
          <Effect width={width < 768 ? width : width / 2} />
        </HeaderBackground>
      </HeaderBackgroundEffect>
      <LogoContainer>
        <Logo />
      </LogoContainer>
    </HeaderContainer>
  )
}
