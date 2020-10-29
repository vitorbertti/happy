import React from 'react';
import { StyleSheet, View, Dimensions, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';

import mapMarkerImg from '../images/map-marker.png';

export default function OrphanagesMap() {
  const navigation = useNavigation();

  function handleNavigateToCreateOrphanage() {
    navigation.navigate('SelectMapPosition');
  }

  function handleNavigateToOrphanageDetails() {
    navigation.navigate('OrphanageDetails');
  }

  return (
    <View style={styles.container}>
      <MapView 
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: -27.2092052,
          longitude: -49.6401092,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }} 
        style={styles.mapStyle}
      >
        <Marker 
          icon={mapMarkerImg}
          calloutAnchor={{ x: 2.7, y: 0.8 }}
          coordinate={{ 
            latitude: -27.2092052,
            longitude: -49.6401092
          }}
        >
          <Callout tooltip={true} onPress={handleNavigateToOrphanageDetails}>
            <View style={styles.calloutContainer}>
              <Text style={styles.calloutText}>Lar das meninas</Text>
            </View>
          </Callout>
        </Marker>
      </MapView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>2 orfanatos encontrados</Text>
        <RectButton style={styles.createOrphanage} onPress={handleNavigateToCreateOrphanage}>
          <Feather name="plus" size={20} color="#FFF" />
        </RectButton>
      </View>
    </View>
  );
}