import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

import styles from './Header.module.scss';
import Container from '../Container';

const Header = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.headerContainer}>
        <p className={styles.headerTitle}>
          <Link href="/">
            Next.js Leaflet Starter
          </Link>
        </p>
        <ul className={styles.headerLinks}>
          <li>
            <a href="https://github.com/colbyfayock/next-leaflet-starter" rel="noreferrer">
              <FaGithub />
            </a>
          </li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;
