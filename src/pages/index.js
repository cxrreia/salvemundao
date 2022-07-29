import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Groups from '@mui/icons-material/Groups'
import ArrowForward from '@mui/icons-material/ArrowForward'

export default function Home() {
  return (
    <div
      style={{
        padding: '50px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: '0px',

          width: '392px',
          height: '366px',

          /* Primitive/White */

          background: '#FFFFFF',
          boxShadow: '0px 0px 24px rgba(74, 83, 154, 0.06)',
          borderRadius: '8px',

          /* Inside auto layout */

          flex: 'none',
          order: 0,
          flexGrow: 1,
        }}
      >
        {/* header card */}
        <Box
          sx={{
            /* Auto layout */

            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            padding: '24px',
            gap: '8px',

            width: '392px',
            height: '106px',

            /* Brand/Primary/400 */

            background: '#083CA6',

            /* Inside auto layout */

            flex: 'none',
            order: 0,
            alignSelf: 'stretch',
            flexGrow: 0,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              padding: '12px',
              gap: '10px',

              width: '58px',
              height: '58px',

              /* Brand/Primary/50 */

              background: '#F2F5FD',
              borderRadius: '250px',

              /* Inside auto layout */

              flex: 'none',
              order: 0,
              flexGrow: 0,
            }}
          >
            <Groups
              sx={{
                width: '34px',
                height: '34px',
                color: '#154DA6',

                /* Inside auto layout */

                flex: 'none',
                order: 0,
                flexGrow: 0,
              }}
            />
          </Box>
        </Box>

        {/* body card */}
        <Box
          sx={{
            /* Auto layout */

            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            padding: '24px',
            gap: '32px',

            width: '392px',
            height: '260px',

            /* Inside auto layout */

            flex: 'none',
            order: 1,
            alignSelf: 'stretch',
            flexGrow: 0,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              padding: '0px',
              gap: '16px',

              width: '344px',
              height: '102px',

              /* Inside auto layout */

              flex: 'none',
              order: 0,
              alignSelf: 'stretch',
              flexGrow: 0,
            }}
          >
            {/* title */}
            <Box
              sx={{
                /* Heading / MD */

                fontFamily: 'Inter, sans-serif',
                fontStyle: 'normal',
                fontWeight: 500,
                fontSize: '32px',
                lineHeight: '120%',
                /* or 38px */

                letterSpacing: '-0.03em',

                /* Primitive / Black */

                color: '#14161F',
              }}
            >
              Usuários
            </Box>

            {/* text */}
            <Box
              sx={{
                fontFamily: 'Inter, sans-serif',
                fontStyle: 'normal',
                fontweight: 400,
                fontSize: '16px',
                lineHeight: '150%',
                /* or 24px */

                /* Primitive/700 */

                color: '#252833',
              }}
            >
              Gerencie as contas de usuário cadastradas, altere permissões,
              entre outros.
            </Box>
          </Box>

          <Box
            sx={{
              width: '100%',
            }}
          >
            <Button
              variant='outlined'
              color='primary'
              sx={{
                width: '100%',
                height: '40px',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-center',
                padding: '0px',
              }}
            >
              <ArrowForward />
              Ver mais
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  )
}
