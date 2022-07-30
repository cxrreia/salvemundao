import ArrowForward from '@mui/icons-material/ArrowForward'
import CardComponent from '../components/CardComponent'
import Slide from '@mui/material/Slide'
import { Box } from '@mui/material'
import Image from 'next/image'

export default function Home() {
  return (
    <div
      style={{
        padding: '50px',
      }}
    >
      <Slide
        direction='left'
        in={true}
        mountOnEnter
        unmountOnExit
        timeout={3000}
      >
        <Box>
          <CardComponent
            title='Usuarios'
            text='Aqui você pode gerenciar os usuários do sistema.'
            icon={<ArrowForward />}
          />
        </Box>
      </Slide>
    </div>
  )
}
