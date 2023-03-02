//JSX = JavaScript + XML (HTML)

//import Button from './Post'
import {Post} from './Post';

export function App() {
  return (
    //<h1>Teste</h1>
    <div>
      {/* Mais de um elemento precisa estar dentro de uma div por exemplo */}
      < Post />
      < Post />
      < Post />
    </div>
  )
}

//export default App
