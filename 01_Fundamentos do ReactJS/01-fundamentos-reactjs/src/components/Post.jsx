import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';


export function Post({ author, publishedAt, content }) { // para nao ficar repetindo props em todos os componentes colocar as propriedades que estao dentro do props e entre {}
  
  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  }) // 11 de Maio às 08:13h (aspas simples nas outras letras que nao sao padrao da biblioteca de data)
  
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })
  
  
  /*const publishedDateFormatted = new Intl.DateTimeFormat('pt-BR', { // trabalhando com data e horario utilizando o Intl do proprios JS
    day: '2-digit',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit',
  }).format(publishedAt) */
  
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder src={author.avatarUrl} />{" "}
          {/* passar a proprierade hasBorder sem o true o react entente que ela é true mesmo assim */}
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
        {/* Colocando title passando o mouse aparece o horario da publicação */}
      </header>
      <div className={styles.content}>  {/* estrutura para pular linha a cada paragrafo do content no app.jsx */}
        {content.map(line => {
          if (line.type === 'paragraph') {
            return <p>{line.content}</p>;
          } else if (line.type === 'link') {
            return <p><a href="">{line.content}</a></p>
          }
        })}
      </div>
      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}