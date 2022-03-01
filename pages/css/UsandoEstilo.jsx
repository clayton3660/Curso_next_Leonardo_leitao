import Estilo from "../../components/Estilo";

export default function UsandoEstilo() {
  return (
    <div>
      <Estilo numero={3} color="#000"/>
      <Estilo numero={-13} color="#fff" direita/>

    </div>
  )
}