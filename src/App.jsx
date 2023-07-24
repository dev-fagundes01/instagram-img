import { useEffect, useState } from 'react'
import ReactLoading from 'react-loading'

import { ThemeProvider } from 'styled-components'

import { Header } from './components/header'
import { NavBar } from './components/navbar'
import { Publications } from './components/publications'
import { Stories } from './components/stories'
import { getPhotos } from './services/photos'
import { Button, Flex, Screen, Typegraphy } from './style'
import { darkTheme, LightTheme } from './style/theme'

function App() {
  const PHOTOS_PER_PAGE = 8

  const [theme, setTheme] = useState('dark')
  const [photos, setPhotos] = useState([])
  const [photosPerPage, setPhotosPerPage] = useState(PHOTOS_PER_PAGE)
  const [isLoading, setIsLoading] = useState()

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  async function fetchPhotos() {
    setIsLoading(true)
    const data = await getPhotos(photosPerPage, reLeaseLoading)
    setPhotos(data)
  }

  useEffect(() => {
    fetchPhotos()
  }, [photosPerPage])

  const handlePhotosPerPage = () => {
    setPhotosPerPage(photosPerPage + PHOTOS_PER_PAGE)
  }
  console.log(photosPerPage)

  const reLeaseLoading = () => setIsLoading(false)

  return (
    <ThemeProvider theme={theme === 'light' ? LightTheme : darkTheme}>
      <Screen>
        <NavBar themeToggler={themeToggler} theme={theme} />

        <Flex gap="2px">
          <Header />
          <Stories photos={photos} />
          <Publications photos={photos} />

          {isLoading ? (
            <ReactLoading
              type="spokes"
              color={theme.textPrimary}
              height={20}
              width={20}
            />
          ) : (
            <Button onClick={handlePhotosPerPage}>
              <Typegraphy>Ver mais</Typegraphy>
            </Button>
          )}
        </Flex>
      </Screen>
    </ThemeProvider>
  )
}

export default App
