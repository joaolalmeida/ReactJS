import styles from './Header.module.css' //Precisa dar um nome para o arquivo funcionar

export function Header() {
  return (
    <header className={styles.header}> {/* className para nao confundir com class do js e chaves para puxar o arquivo css */}
      <strong>Ignite Feed</strong>
      </header> 
  );
}