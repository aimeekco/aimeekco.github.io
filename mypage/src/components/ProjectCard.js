import styles from '../styles/Projects.module.css'; 

const ProjectCard = (props) => {
  const { title, description, imageUrl, link } = props;
  return (
    <a href={link} className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={imageUrl} alt={title} width={150} height={150} layout='responsive' />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </a>
  );
};

export default ProjectCard;
