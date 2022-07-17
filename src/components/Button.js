import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {COLORS, SIZES} from '../constants/styles';

export function Button({children}) {
  return (
    <Pressable
      style={({pressed}) => [pressed && styles.pressed, styles.button]}
      onPress={() => console.log('pressed')}>
      <Text style={styles.label}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    marginTop: 10,
    width: 130,
    height: 40,
    backgroundColor: COLORS.secondary,
    justifyContent: 'center',
    borderRadius: 10,
  },
  pressed: {
    opacity: 0.7,
  },
  label: {
    color: COLORS.white,
    fontSize: SIZES.medium,
    fontWeight: '600',
    alignSelf: 'center',
  },
});
