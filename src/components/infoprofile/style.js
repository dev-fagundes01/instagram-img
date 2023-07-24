import { styled } from 'styled-components'

export const ContainerInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${(props) => props.theme.textPrimary};
`

export const Link = styled.a`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 5px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
`
