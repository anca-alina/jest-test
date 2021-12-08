import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import { getSortedList } from '../lib/data';

export async function getStaticProps() {
  const allData = getSortedList();
  return {
    props: {
      allData
    }
  }
}
export default function Home({ allData }) {
  return (
    <Layout home>
      <h2>Avaliable Models</h2>
      <p>Please peruse our model list for cars that we currently have parts in stock for. If you do not see your model, call us at <a href="tel:(888)888-8888"></a>(888) 888-8888.</p>
      <div className="list-group">
      {allData ?
            allData.map(({ id, name }) => (
            <Link key={id} href={`/${id}`}>
              <a className="list-group-item list-group-item-action">{name}</a>
            </Link>
          ))
          : null }
      </div>
    </Layout>
  );
}
