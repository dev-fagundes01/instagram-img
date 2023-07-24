import { Typegraphy } from '../../style'
import { InfoProfile } from '../infoprofile'
import * as C from './style'

export function Publications({ photos }) {
  return (
    <C.Container>
      <Typegraphy>Publicações</Typegraphy>

      <C.ContainerPublications>
        {photos.map((photo) => (
          <C.Content key={photo.id}>
            <C.Image src={photo?.src?.medium} alt="fotografia" />
            <InfoProfile
              name={photo?.photographer}
              photo={photo?.src?.small}
              link={photo?.photographer_url}
            />
          </C.Content>
        ))}
      </C.ContainerPublications>
    </C.Container>
  )
}
