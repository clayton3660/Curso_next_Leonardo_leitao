import { useState } from "react"
import ContadorDisplay from "../../components/contadorDisplay"

export default function contador() {
  const [number, setNumber] = useState(0)
  

  const adiciona = () =>  setNumber(number + 1)

  const remove = () => {
    setNumber(number - 1)
  }
  const estilo = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#222",
    color: "#fff",
    height: "100vh"
}
    return (
            <div style={estilo}>
              <h1>Contador</h1>
              <ContadorDisplay number={number} />
              {/* <div>Valor: {number}</div> */}
              <div>
                <button onClick={adiciona}>+</button>
                <button onClick={remove}>-</button>
              </div>
            </div>
          )

}