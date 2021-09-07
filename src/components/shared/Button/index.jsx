import * as S from './style'

export const Button = ({title, ...rest}) => {
  return <S.Button {...rest}>{title}</S.Button>
}
