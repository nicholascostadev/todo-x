import Link from 'next/link'
import styled from 'styled-components'

export const HeaderTitle = styled(Link)`
  font-size: 2rem;
  color: white;
  text-decoration: none;
`

export const HeaderContainer = styled.header``

export const Content = styled.div`
  width: 1200px;
  max-width: 100%;
  height: 70px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h1 {
    color: white;
  }
  img {
    border-radius: 9999999999999px;
  }
`
