// props:{ author: "", content: ''}

export function Post(props) {
  //console.log(props);
  return (
  <div>
    <strong>{props.author}</strong>
    <p>{props.content}</p>
  </div>
  ) //Colocando chaves vai aparecer o conteudo 
}
//export default Button


//Default Exports vs Named Exports

//Default Exports pode mudar o nome na hora da importação
//Named exports é dada a exportacao junto com a funcao
