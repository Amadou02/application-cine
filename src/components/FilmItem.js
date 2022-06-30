import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Image} from 'react-native';
import {List, IconButton, Surface, useTheme} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {toggleFavorite} from '../redux/favoritesSlice';
import {getImagePath} from '../services';

export default function FilmItem({film}) {
  const {item} = film;
  const navigation = useNavigation();
  const {colors} = useTheme();
  // On récupère le state contenant les favoris pour vérifier si l'item est en favori ou non
  const favorites = useSelector(state => state.favorites);
  // dispatch permet d'informer redux que l'on souhaite interagir avec le store en propageant l'action que l'on souhaite performer
  const dispatch = useDispatch();

  // On utilise le coeur plein pour les favoris et le vide pour les autres
  const iconName = favorites.find(element => element.id === item.id)
    ? 'heart'
    : 'heart-outline';
  return (
    <Surface style={{flexDirection: 'row'}}>
      <Image
        source={{
          uri: getImagePath(item.poster_path),
        }}
        style={{
          resizeMode: 'cover',
          flex: 2,
        }}
      />
      <View style={{flex: 5, backgroundColor: colors.elevation}}>
        <List.Item title={item.title} description={item.overview} />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <IconButton
            icon={iconName}
            color="red"
            animated={true}
            size={25}
            onPress={() => {
              dispatch(toggleFavorite(item));
            }}
          />
          <IconButton
            icon="chevron-right-circle-outline"
            size={25}
            onPress={() => {
              navigation.navigate('Details', {
                film: item,
                id: item.id,
              });
            }}
          />
        </View>
      </View>
    </Surface>
  );
}
