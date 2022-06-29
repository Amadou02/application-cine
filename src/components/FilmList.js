import {FlatList} from 'react-native';
import React from 'react';
import FilmItem from './FilmItem';
import {Divider} from 'react-native-paper';

export default function FilmList({films}) {
  return (
    <FlatList
      data={films}
      keyExtractor={item => item.id}
      renderItem={item => <FilmItem film={item} />}
      ItemSeparatorComponent={() => <Divider />}
    />
  );
}
