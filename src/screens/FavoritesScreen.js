import {FlatList, View} from 'react-native';
import React from 'react';
import {Divider, IconButton, Text} from 'react-native-paper';
import FilmItem from './../components/FilmItem';
import {useSelector} from 'react-redux';

export default function FavoritesScreen() {
  const films = useSelector(state => state.favorites);
  return films.length === 0 ? (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <Text>
        Vous n'avez aucun film en favoris. Retournez à l'accueil pour ajouter
        des films à votre liste de favoris.
      </Text>
      <IconButton icon="hand-pointing-down" size={30} />
    </View>
  ) : (
    <FlatList
      data={films}
      keyExtractor={item => item.id}
      renderItem={item => <FilmItem film={item} />}
      ItemSeparatorComponent={() => <Divider />}
    />
  );
}
