//JSX = JavaScript + XML (HTML)

//import Button from './Post'
import { Header } from './components/Header';
import {Post} from './Post';

import styles from './App.module.css';

import './global.css';
import { Sidebar } from './components/Sidebar';

export function App() {
  return (
    //<h1>Teste</h1>
    <div>
      <Header />
      {/* Mais de um elemento precisa estar dentro de uma div por exemplo */}

       <div className={styles.wrapper}> {/*Colocar no proprio APP para ficar melhor para incluir os modulos criados */}
        <Sidebar />

        <main>
          <Post
            author="Diego Fernandes"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi porro accusantium iusto repudiandae animi, tempore et perferendis harum recusandae officiis soluta, ratione maiores minus dignissimos non error eum, est reprehenderit."
          />
          <Post
            author="Gabriel Buzzi"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi porro accusantium iusto repudiandae animi, tempore et perferendis harum recusandae officiis soluta, ratione maiores minus dignissimos non error eum, est reprehenderit."
          />
        </main>
      </div>
    </div>
  )
}

//export default App
