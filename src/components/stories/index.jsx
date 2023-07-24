import { useState } from 'react'

import { Button, Flex, Typegraphy } from '../../style'
import * as C from './style'

export function Stories({ photos }) {
  const [showAll, setShowAll] = useState(false)

  photos = showAll ? photos : photos?.slice(0, 10)

  function handLeShowAll() {
    setShowAll(!showAll)
  }

  return (
    <Flex padding="8px 20px" align="start" gap="4px">
      <Typegraphy margin-left="40px" weight="400" size="18px" height="21px">
        Stories
      </Typegraphy>

      <Flex align="end">
        <Button onClick={() => handLeShowAll()}>
          <Typegraphy size="14px">
            {showAll ? 'Ver menos' : 'Ver mais'}
          </Typegraphy>
        </Button>
      </Flex>

      <C.Container>
        {photos.map((photo) => (
          <C.Profile key={photo.id}>
            <img src={photo?.src?.medium} alt="fotografia" />
          </C.Profile>
        ))}
      </C.Container>
    </Flex>
  )
}
