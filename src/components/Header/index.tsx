import Image from 'next/image'
import { Content, HeaderContainer, HeaderTitle } from './styles'
export const Header = () => {
  return (
    <HeaderContainer>
      <Content>
        <HeaderTitle href="/">Todo APP</HeaderTitle>
        <Image
          src="https://avatars.githubusercontent.com/u/97490144?v=4"
          alt="Picture of the author"
          width={50}
          height={50}
        />
      </Content>
    </HeaderContainer>
  )
}
