import Head from 'next/head';
import Image from 'next/image';
import RestaurantList from '../components/RestauranList';

export default function Home({ restaurants }) {
  return (
    <div className="container">
      <RestaurantList restaurants={restaurants}></RestaurantList>
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch('https://restaurant-api.dicoding.dev/list');
  const { restaurants } = await response.json();
  return {
    props: {
      restaurants,
    },
  };
}
