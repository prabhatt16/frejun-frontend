import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import InputComponent from './InputComponent';
import {useState} from 'react';
import {useSelector} from 'react-redux';
import {editUserDetails} from './server';
import {useNavigation} from '@react-navigation/native';

const EditItem = () => {
  const selector = useSelector(state => state.StateReducer.userData);
  const userIdSelector = useSelector(state => state.StateReducer.crrUserId);
  const [data, setData] = useState({});
  const navigation = useNavigation();

  const editUserData = async () => {
    const resultData = {
      name:
        data.name !== undefined && data.name !== ' '
          ? data.name
          : selector['0'].name,
      age:
        data.age === undefined &&
        selector['0'].age !== undefined &&
        data.age === undefined
          ? selector['0'].age.toString()
          : data.age,
      mobile:
        data.mobile === undefined &&
        selector['0'].mobile !== undefined &&
        data.mobile === undefined
          ? selector['0'].mobile.toString()
          : data.mobile,
      country:
        data.country !== undefined && data.country !== ' '
          ? data.country
          : selector['0'].country,
    };
    await editUserDetails(userIdSelector, resultData);
    navigation.navigate('TableScreen');
  };
  useEffect(() => {
    // console.log(selector['0']);
  }, [selector]);
  const handleChange = (type, val) => {
    setData({...data, [type]: val});
  };
  return (
    <View className="flex-1 bg-white ">
      <View className="px-3 mt-5">
        <InputComponent
          value={data.name === undefined ? selector['0'].name : data?.name}
          handleChange={e => handleChange('name', e)}
          keyboardType={'name-phone-pad'}
          type={'name'}
          placeholder={'Full Name'}
        />
        <InputComponent
          value={
            data.age === undefined ? selector['0'].age.toString() : data?.age
          }
          handleChange={e => handleChange('age', e)}
          keyboardType={'phone-pad'}
          type={'age'}
          placeholder={'Age'}
        />
        <InputComponent
          value={
            data.mobile === undefined
              ? selector['0'].mobile.toString()
              : data?.mobile
          }
          handleChange={e => handleChange('mobile', e)}
          keyboardType={'phone-pad'}
          type={'mobile'}
          isMobile={true}
          placeholder={'Mobile Number'}
        />
        <InputComponent
          value={
            data.country === undefined ? selector['0'].country : data?.country
          }
          handleChange={e => handleChange('country', e)}
          keyboardType={'name-phone-pad'}
          type={'country'}
          placeholder={'Country'}
        />
        <TouchableOpacity
          onPress={editUserData}
          className="bg-black rounded-md py-3 mt-4">
          <Text className="text-lg font-bold text-white text-center">SAVE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EditItem;
