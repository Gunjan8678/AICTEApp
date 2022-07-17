import {View, Text, TextInput, StyleSheet, Platform} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../constants/styles';

const Inputs = ({label, keyboardType, value, maxLength, onChangeText}) => {
  return (
    <View>
      {/* <Text>Inputs</Text> */}
      <TextInput
        placeholderTextColor={COLORS.dark}
        placeholder={label}
        keyboardType={keyboardType}
        value={value}
        maxLength={maxLength}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={onChangeText}
        // secureTextEntry={!show && secure}
        style={styles.input}
      />
    </View>
  );
};

export default Inputs;
const styles = StyleSheet.create({
  input: {
    minWidth: '80%',
    marginHorizontal: SIZES.large,
    marginVertical: Platform.OS === 'ios' ? SIZES.medium : SIZES.small,
    backgroundColor: COLORS.white,
    // paddingLeft: SIZES.small,
    paddingBottom: 2,
    borderBottomColor: COLORS.dark,
    borderBottomWidth: 1,
  },
});
