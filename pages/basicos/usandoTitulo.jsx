import Titulo from '../../components/Titulo'

export default function usandoTitulo() {
  return (
    <div>
      <Titulo 
        principal = "Página de Cadastro"
        secundario = "Incluir, alterar e excluir coisas!" 
      />
      <Titulo 
        principal = "Página de Login"
        secundario = "Informe seu email e senha" 
        pequeno
        // pode ser apenas o nome da condição, ele entende que se tem é verdadeiro, assim não preciasando colocar = {true}
      />
    </div>
  )
}