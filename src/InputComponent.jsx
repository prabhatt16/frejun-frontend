import {View, Text, TextInput} from 'react-native';
import React from 'react';

const InputComponent = ({
  value,
  isMobile,
  handleChange,
  placeholder,
  keyboardType,
}) => {
  return (
    <View className="border border-gray-400 rounded-md p-1 my-3">
      <TextInput
        value={value}
        onChangeText={handleChange}
        keyboardType={keyboardType}
        placeholder={placeholder}
        placeholderTextColor={'grey'}
        className="text-base text-black"
        maxLength={isMobile ? 10 : 100}
      />
    </View>
  );
};

export default InputComponent;
