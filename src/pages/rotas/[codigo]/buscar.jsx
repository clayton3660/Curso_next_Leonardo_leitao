import { useRouter } from 'next/router'

export default function buscar() {
  const router = useRouter()
  const codigo = router.query.codigo 

  // console.log(id)
    return (
          <div>
            <h1>Rotas / {codigo} / Buscar!!</h1>
          </div>
          )

}