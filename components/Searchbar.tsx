import React from 'react'
import { styled } from '@css/theme.config'

const ContentWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: 100,
})

const Title = styled('h1', {
  color: '$light',
  fontSize: '$6',
})

const Description = styled('p', {
  color: '$light',
  margin: '20px 0',
  textAlign: 'center',
})

const SearchForm = styled('form', {
  display: 'flex',
  justifyContent: 'center',
})

const SearchInput = styled('input', {
  background: '#111129',
  outline: 'none',
  border: 'none',
  padding: 30,
  borderRadius: 5,
  textAlign: 'center',
  color: '$light',
  width: '50vw',
  maxWidth: 500,
  minWidth: 280,
  fontFamily: '$main',
  fontSize: '$3',
  margin: '100px 0',
})

type SearchbarProps = {
  handleSubmitFunction: (e: React.FormEvent<HTMLFormElement>) => void
  handleSearchFunction: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Searchbar: React.FC<SearchbarProps> = (props: SearchbarProps) => {
  return (
    <ContentWrapper>
      <Title>Gitkard</Title>
      <Description>
        😍 Stunning Github portfolio card instantly with Gitkard
      </Description>
      <SearchForm onSubmit={props.handleSubmitFunction}>
        <SearchInput
          placeholder="GitHub Username..."
          onChange={props.handleSearchFunction}
        />
      </SearchForm>
    </ContentWrapper>
  )
}

export default Searchbar
