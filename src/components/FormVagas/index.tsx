import { FormEvent, useState } from 'react'

import {
  Form as FormStyled,
  SearchButton,
  Input as InputStyled
} from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <FormStyled onSubmit={aoEnviarForm}>
      <InputStyled
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <SearchButton>Pesquisar</SearchButton>
    </FormStyled>
  )
}
export default FormVagas
