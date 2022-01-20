import React from 'react'
import { styled } from '@css/theme.config'

import * as Icons from 'react-feather'

const Wrapper = styled('div', {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  color: 'white',
  margin: '150px 0 50px 0',
  width: '100vw',
  '@iPhonePlus': {
    flexDirection: 'column',
  },
})

const FooterWrapper = styled('div', {
  display: 'flex',
  variants: {
    container: {
      true: {
        marginTop: 20,
      },
    },
  },
})

const FooterText = styled('p', {
  fontSize: '$3',
  margin: '0 10px',
  '@iPhoneSE': {
    fontSize: '$2',
  },
})

const FooterLink = styled('a', {
  color: '$secondry',
  textDecoration: 'none',
  '&:hover': {
    color: 'white',
  },
  variants: {
    text: {
      true: {
        margin: 0,
      },
    },
  },
  margin: '0 7px',
})

const Footer: React.FC = () => {
  return (
    <Wrapper>
      <FooterWrapper container>
        <FooterText>
          © 2021{' '}
          <FooterLink href='https://thekaranchauhan.com' target='_blank' text>
            Karan Chauhan
          </FooterLink>
        </FooterText>
        <FooterWrapper>
          <FooterLink href='https://github.com/thekaranchauhan' target='_blank'>
            <Icons.GitHub />
          </FooterLink>
          <FooterLink href='https://instagram.com/thekaranchauhan' target='_blank'>
            <Icons.Instagram />
          </FooterLink>
          <FooterLink href='https://codepen.io/thekaranchauhan' target='_blank'>
            <Icons.Codepen />
          </FooterLink>
        </FooterWrapper>
      </FooterWrapper>
    </Wrapper>
  )
}

export default Footer
