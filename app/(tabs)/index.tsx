import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useEffect, useState } from 'react';
import ProductsTable from '../../components/ProductsTable';

export default function HomeScreen() {

  return (
      <ThemedView style={styles.titleContainer}>
        <ProductsTable></ProductsTable>
      </ThemedView>
    
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    backgroundColor:'none',
    marginTop:30,
    padding:15,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
