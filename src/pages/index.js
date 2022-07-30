import ArrowForward from '@mui/icons-material/ArrowForward'
import CardComponent from '../components/CardComponent'

export default function Home() {
  return (
    <div
      style={{
        padding: '50px',
      }}
    >
      <CardComponent
        title='Usuarios'
        text='Aqui você pode gerenciar os usuários do sistema.'
        icon={<ArrowForward />}
      />
    </div>
  )
}
