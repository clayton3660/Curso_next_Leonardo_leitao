import { useRouter } from 'next/router'

export default function codigoENome() {
  const router = useRouter()
  const codigo = router.query.codigo 
  const nome = router.query.nome 

  // console.log(id)
    return (
          <div>
            <h1>Rotas / {codigo} / {nome}</h1>
          </div>
          )

}