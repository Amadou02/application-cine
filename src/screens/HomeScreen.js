import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import {fetchFilms} from '../services';
import {ActivityIndicator} from 'react-native-paper';
import FilmList from '../components/FilmList';

export default function HomeScreen() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const bootstrapAsync = async () => {
      try {
        const data = await fetchFilms();

        const {results} = data;

        setData(results);
      } catch (err) {
        console.log('erreur', err);
      } finally {
        setLoading(false);
      }
    };

    bootstrapAsync();
  }, []);
  return loading ? (
    <ActivityIndicator size={'large'} />
  ) : (
    <FilmList films={data} />
  );
}
