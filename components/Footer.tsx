import Link from 'next/link';
import { Container } from './Footer.styles';

const Footer = () => (
  <footer>
    <Container>
      <div>
        <Link
          href="https://peter-stuhlmann-webentwicklung.de"
          target="_blank"
          rel="noreferrer noopener"
        >
          Peter R. Stuhlmann Webentwicklung
        </Link>
      </div>
      <div>
        <Link
          href="https://peter-stuhlmann-webentwicklung.de/impressum"
          target="_blank"
          rel="noreferrer noopener"
        >
          Impressum
        </Link>
        <Link
          href="https://peter-stuhlmann-webentwicklung.de/datenschutzerklaerung"
          target="_blank"
          rel="noreferrer noopener"
        >
          Datenschutzerklärung
        </Link>
      </div>
    </Container>
  </footer>
);

export default Footer;
