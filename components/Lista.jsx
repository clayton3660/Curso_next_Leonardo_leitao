export default function Lista(props) {
  return (
    <ul>
      <div>
        <h1>Lista de algo</h1>
        <ul style={{ 
          listStyle: "none",
          padding: "0"
        }}>
          {props.children}
        </ul>
      </div>
    </ul>
  )
}