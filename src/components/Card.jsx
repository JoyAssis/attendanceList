import * as S from "../styles/CardStyle"
export default function Card(props)
// export default function Card({name, time}) podemos desestruturar com chaves e o nome da propriedade assim não há nescessidade de usar a palavra-chave props nas linhas 6 e 7
{
  return(
    <S.Container>
    <h3>{props.name}</h3>
    <p>{props.time}</p>
    </S.Container>
  )
}
/** as propriedades dentro de um componente o tornam dinâmicos, ou seja, quando o componente é renderizado podemos passar dados 
diferentes para cada vez que chamamos porém mantendo a mesma estrutura. */ 