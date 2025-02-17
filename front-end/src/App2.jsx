import React from 'react'

const App2 = () => {
  return <div>App2</div>;
}

export default App2

// export default: posso exportar com qualquer nome e sem chaves
// export: só posso importar com o nome importado e entre chaves

// Nomeação de Classes em CSS
// Metodologia BEM
// Blocks
// Elements
// Modifiers
// bloco__elemento--modificador
// header
// header__link
// header__link--small
// Nomes compostos são separados por -
// item-list--small

//Tag vazia em React chama-se fragment

//Componentes recebem "props"

// {items === 5 ? (
//   <>
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//   </>
// ) : (
//   <>
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//   </>
// )}

// {Array(items)
//   .fill()
//   .map((currentValue, index) => (
//     <SingleItem key={`${title}-${index}`} />
//   ))}

// Spread Operator {...}

// Quando oponentes se re-renderizam:
// 1 - Quando uma variável de estado usada por esse componente é atualizada

// Hook - useState