import React, {useEffect, useState} from 'react';
import {ScrollView, View} from 'react-native';
import {useIsFocused, useRoute} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {
  Card,
  Paragraph,
  IconButton,
  Text,
  Title,
  Button,
  ActivityIndicator,
} from 'react-native-paper';
import {fetchOneFilm, getImagePath} from '../services';
import {toggleFavorite} from '../redux/favoritesSlice';

export default function DetailsScreen() {
  const route = useRoute();
  const id = route.params.id;
  // state pour stocker les informations correspondantes à l'id reçu en paramètre de route
  const [film, setFilm] = useState(null);
  const [loading, setLoading] = useState(true);
  // On récupère le state contenant les favoris pour vérifier si l'item est en favori ou non
  const favorites = useSelector(state => state.favorites);
  // dispatch permet d'informer redux que l'on souhaite interagir avec le store en propageant l'action que l'on souhaite performer
  const dispatch = useDispatch();

  // On utilise le coeur plein pour les favoris et le vide pour les autres
  const iconName = favorites.find(element => element.id === id)
    ? 'heart'
    : 'heart-outline';
  const isFocused = useIsFocused();

  useEffect(() => {
    try {
      const bootstrapAsync = async () => {
        /**
         * GET film à l'aide de son id
         */
        const data = await fetchOneFilm(id);
        /**
         * Mise à jour du state avec les données de l'API
         */
        setFilm(data);
      };
      bootstrapAsync();
    } catch (error) {
      console.log(error);
    } finally {
      // On change le status du chargement des données, une fois le traitement de la requête API est terminée.
      setLoading(false);
    }
  }, [isFocused]); // isFocused est true si l'écran prend le focus et false sinon, ici on exécute le hook à chaque focus sur l'écran

  return loading ? (
    <ActivityIndicator size="large" />
  ) : (
    film && (
      <Card style={{flex: 1}}>
        <ScrollView>
          <Card.Content>
            <Title numberOfLines={1} style={{fontSize: 22}}>
              {film.title}
            </Title>
            <Text>Titre original : {film.original_title}</Text>
            <Text>
              Date de sortie :{' '}
              {film.release_date.split('-').reverse().join('/')}
            </Text>
          </Card.Content>
          <Card.Cover source={{uri: getImagePath(film.backdrop_path)}} />
          <Card.Actions
            style={{justifyContent: 'space-between', paddingHorizontal: 10}}>
            <IconButton
              icon={iconName}
              size={25}
              color="red"
              onPress={() => dispatch(toggleFavorite(film))}
            />
            <Text> {film.vote_average} </Text>
          </Card.Actions>
          <Card.Content>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly',
              }}>
              {film.genres.map((genre, index) => (
                <Button
                  mode="outlined"
                  compact
                  key={index}
                  style={{marginHorizontal: 2, borderRadius: 20}}
                  theme={{roundness: 3}}>
                  {genre.name}
                </Button>
              ))}
            </View>
            <Paragraph
              numberOfLines={5}
              style={{textAlign: 'justify', lineHeight: 25}}>
              {film.overview}
            </Paragraph>
          </Card.Content>
        </ScrollView>
      </Card>
    )
  );
}
