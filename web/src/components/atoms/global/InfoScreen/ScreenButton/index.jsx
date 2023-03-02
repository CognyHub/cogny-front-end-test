import * as S from './styles'

export default function ScreenButton({ name, link }) {
  return <S.ScreenButtonStyled to={link}>{name}</S.ScreenButtonStyled>
}
