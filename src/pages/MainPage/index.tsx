import Header from 'components/Header';
import main from 'assets/illustrations/main.png';
import Button from 'components/Button';
import styles from './styles.module.scss';

function MainPage() {
  return (
    <div className="container">
      <Header />

      <div className={styles.root}>
        <div className={styles.leftBlock}>
          <h1 className={styles.h1}>
            <strong>Find</strong>
            {' '}
            all your
            <br />
            {' '}
            favorite
            <br />
            {' '}
            <strong>character</strong>
          </h1>

          <div className={styles.description}>
            You can find out all the information about your favorite characters
          </div>

          <Button to="/characters" text="See more..." />
        </div>

        <div className={styles.rightBlock}>
          <div className={styles.imageContainer}>
            <img
              src={main}
              className={styles.illustration}
              alt="mainIllustration"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
