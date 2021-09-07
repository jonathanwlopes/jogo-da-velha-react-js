import * as S from "./style"

export const Input = ({ children, mb, ...rest }) => {
  return (
    <S.Container mb={mb}>
      <input {...rest} />
      {children}
    </S.Container>
  )
}
