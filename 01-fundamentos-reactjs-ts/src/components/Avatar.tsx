import styles from "./Avatar.module.css";

interface AvatarProps {
  hasBorder?: boolean // o ? é usado quando algo é opcional
  src: string
  alt?: string
}

export function Avatar({hasBorder = true, src, alt}: AvatarProps) {
 // const hasBorder = props.hasBorder != false; //fazendo sempre que for true a propriedade ela aplicar o stilo
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src} // se tiver a propriedade hasBorder mostrar .avatarWithBorder se nao tiver mostrar .avatar
      alt={alt}
    />
  )
}