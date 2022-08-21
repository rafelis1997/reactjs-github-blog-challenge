import styled from 'styled-components'

export const HeaderBackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -3;
  background: ${(props) =>
    'radial-gradient(at top,' +
    `${props.theme['base-profile']}` +
    ' 15%,' +
    `${props.theme.blue}` +
    ' 90%)'};
  width: 100%;
  height: 100%;
  opacity: 0.3;
`

export const HeaderBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -2;
  width: 100%;
  padding-top: 4.375rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1024px) {
    padding-top: 1.375rem;
  }
`

export const HeaderBackgroundEffect = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;

  svg:nth-child(2) {
    transform: rotateY(180deg);
  }

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    align-items: flex-start;

    svg {
      width: 100%;
    }

    svg:nth-child(2) {
      display: none;
    }
  }
`

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 4rem;
  margin-bottom: 8.5rem;
`
export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: fit-content;
  position: relative;
`
