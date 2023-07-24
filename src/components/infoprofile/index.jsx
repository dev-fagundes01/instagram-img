import { BsHeart } from 'react-icons/bs'
import { TbMessageCircle } from 'react-icons/tb'

import { Flex, Typegraphy } from '../../style'
import { ramdomNumber } from '../../utils/randomNumbers'
import * as C from './style'

export function InfoProfile({ name, photo, link }) {
  return (
    <Flex direction="row" justify="space-between">
      <C.ContainerInfo>
        <C.Link href={link} target="_blank">
          <img src={photo} />
          <Typegraphy weight="300" size="13px" height="15px">
            {name}
          </Typegraphy>
        </C.Link>
      </C.ContainerInfo>
      <C.ContainerInfo>
        <BsHeart />
        <Typegraphy weight="300" size="13px" height="15px">
          {ramdomNumber()}
        </Typegraphy>
        <TbMessageCircle />
        <Typegraphy weight="300" size="13px" height="15px">
          {ramdomNumber()}
        </Typegraphy>
      </C.ContainerInfo>
    </Flex>
  )
}
