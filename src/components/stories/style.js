import { styled } from 'styled-components'

export const Container = styled.div`
  width: 1010px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
  overflow-x: scroll;
  padding: 8px 12px;
  margin-left: 20px;

  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.textPrimary};
    border-radius: 20px;
  }
`

export const Profile = styled.div`
  position: relative;
  width: 78px;
  height: 78px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  background: linear-gradient(
    45deg,
    #f09433 0%,
    #e6683c 25%,
    #dc2743 50%,
    #cc2366 75%,
    #bc1888 100%
  );

  img {
    width: 72px;
    height: 72px;
    border-radius: 50%;
  }
`
