import image404 from 'assets/illustrations/image404.png';
import Button from 'components/Button';
import styles from './styles.module.scss';

function NotFound404Page() {
  return (
    <div className="container">
      <div className={styles.root}>
        <div className={styles.content}>
          404
          <img src={image404} alt="404" className={styles.image} />
        </div>

        <Button text="Return" to="/" center />
      </div>
    </div>
  );
}
export default NotFound404Page;
