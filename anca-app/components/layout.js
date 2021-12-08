import Head from 'next/head';
import Link from 'next/link';

export default function Layout( { children, home } ) {
  return (
    <div>
      <Head>
        <title>Anca Next.JS App</title>
      </Head>
      <header>
        <nav>
          <a href="https://santarosa.edu">Vintage Car Supply</a>
        </nav>
      </header>
      <main>{children}</main>
      {!home && (
          <Link href="/">
            <a class="btn btn-primary mt-3">← Return to model list</a>
          </Link>
        )
      }
      <footer>
        <p><small>© Car Supply</small></p>
      </footer>
    </div>
  );
}