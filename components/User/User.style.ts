import { styled } from '@css/theme.config'

export const Wrapper = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '100px 0',
  width: '100vw',
  '@iPhonePlus': {
    flexDirection: 'column',
  },
})

export const UserWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: 100,
  '@iPad': {
    margin: '0 0 30px 0',
  },
})

export const InfoWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
})

export const Avatar = styled('img', {
  width: 120,
  height: 120,
  borderRadius: '100%',
  border: '5px $secondry solid',
  transition: '0.2s linear',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0px 0px 50px 10px #00000030',
  },
})

export const Name = styled('h1', {
  color: '$light',
  fontSize: '$5',
  marginBottom: 20,
  '@iPhone': {
    marginBottom: 5,
  },
})

export const Bio = styled('p', {
  color: '$secondry',
  fontSize: '$2',
  width: '10vw',
  minWidth: 280,
  textAlign: 'center',
  '@iPad': {
    width: '90%',
  },
})

export const SocialsWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 30,
})

export const SocialLink = styled('a', {
  color: '$secondry',
  margin: '0 10px',
  '&:hover': {
    color: '$light',
  },
})

export const ReposContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

export const ReposGrid = styled('div', {
  display: 'grid',
  gap: 30,
  width: '90vw',
  gridTemplateColumns: 'repeat(auto-fill, minmax(30%, 1fr))',
  '@iPad': {
    display: 'flex',
    gridTemplateColumns: 'inherit',
    flexDirection: 'column',
  },
})

export const RepoBox = styled('a', {
  display: 'flex',
  gridRow: 'span 1 / auto',
  flexDirection: 'column',
  overflow: 'hidden',
  minHeight: 200,
  background: '#111129',
  padding: 20,
  borderRadius: 5,
  textDecoration: 'none',
  boxShadow: '0px 0px 50px 5px #00000050',
  transition: '0.1s linear all',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
})

export const RepoName = styled('h1', {
  color: '$secondry',
  fontSize: '$4',
})

export const RepoDesc = styled('h1', {
  color: '$light',
  fontSize: '$1',
  width: '70%',
  margin: '20px 0',
})

export const RepoInfoContainer = styled('div', {
  display: 'flex',
  marginTop: 'auto',
})

export const RepoInfo = styled('p', {
  color: '$secondry',
  fontSize: '$1',
  marginRight: 20,
  display: 'flex',
  alignItems: 'center',
  textAlign: 'center',
  svg: {
    marginRight: 5,
  },
  variants: {
    right: {
      true: {
        marginLeft: 'auto',
      },
    },
  },
  '@iPadPro': {
    marginRight: 10,
    fontSize: 12,
  },
  '@iPhonePlus': {
    fontSize: 12,
  },
})

export const LanguageColour = styled('div', {
  height: 10,
  width: 10,
  borderRadius: '100%',
  background: '$light',
  marginRight: 5,
})
