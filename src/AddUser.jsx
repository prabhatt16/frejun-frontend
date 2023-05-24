import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import InputComponent from './InputComponent';
import {useState} from 'react';
import {addUser} from './server';
import {useNavigation} from '@react-navigation/native';

const AddUser = () => {
  const [data, setData] = useState({});
  const navigation = useNavigation();
  const handleChange = (type, val) => {
    setData({...data, [type]: val});
  };

  const submitData = async () => {
    if (
      // data === {} &&
      data.name !== undefined &&
      data.age !== 0 &&
      data.mobile !== 0 &&
      data.country !== undefined &&
      data.name !== ' ' &&
      data.age !== ' ' &&
      data.mobile !== ' ' &&
      data.country !== ' '
    ) {
      await addUser(data);
      setData({});
      navigation.navigate('TableScreen');
    } else {
      console.log('error', data);
    }
  };

  return (
    <View className="flex-1 bg-white ">
      <View className="px-3 mt-5">
        <InputComponent
          value={data?.name}
          handleChange={e => handleChange('name', e)}
          keyboardType={'name-phone-pad'}
          type={'name'}
          placeholder={'Full Name'}
        />
        <InputComponent
          value={data?.age}
          handleChange={e => handleChange('age', e)}
          keyboardType={'phone-pad'}
          type={'age'}
          placeholder={'Age'}
        />
        <InputComponent
          value={data?.mobile}
          handleChange={e => handleChange('mobile', e)}
          keyboardType={'phone-pad'}
          type={'mobile'}
          isMobile={true}
          placeholder={'Mobile Number'}
        />
        <InputComponent
          value={data?.country}
          handleChange={e => handleChange('country', e)}
          keyboardType={'name-phone-pad'}
          type={'country'}
          placeholder={'Country'}
        />
        <TouchableOpacity
          onPress={submitData}
          className="bg-black rounded-md py-3 mt-4">
          <Text className="text-lg font-bold text-white text-center">Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddUser;
