import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {deleteUser, getUser} from './server';
import axios from 'axios';

const TableDetails = () => {
  const userId = useSelector(state => state.StateReducer.crrUserId);
  const userDataSelector = useSelector(state => state.StateReducer);
  const [userData, setUserData] = useState(null);
  const dispatch = useDispatch();

  const deleteUserData = async () => {
    await deleteUser(userId);
    navigation.navigate('TableScreen');
  };
  useEffect(() => {
    axios
      .get(`https://lime-kind-whale.cyclic.app/user/${userId}`)
      .then(e => {
        dispatch({type: 'get_user_data', payload: e.data}),
          setUserData(e.data['0']);
      })
      .catch(e => console.log(e));
  }, [userId]);

  const navigation = useNavigation();
  return (
    userData !== null && (
      <SafeAreaView className="flex-1 bg-white">
        <View className="px-6">
          <View className="flex-row justify-start items-center py-1">
            <Text className="text-lg font-bold text-black">Name : </Text>
            <Text className="text-base text-gray-700">{userData['name']}</Text>
          </View>
          <View className="flex-row justify-start items-center py-1">
            <Text className="text-lg font-bold text-black">Age : </Text>
            <Text className="text-base text-gray-700">{userData['age']}</Text>
          </View>
          <View className="flex-row justify-start items-center py-1">
            <Text className="text-lg font-bold text-black">Mobile : </Text>
            <Text className="text-base text-gray-700">
              {userData['mobile']}
            </Text>
          </View>
          <View className="flex-row justify-start items-center py-1">
            <Text className="text-lg font-bold text-black">Country : </Text>
            <Text className="text-base text-gray-700">
              {userData['country']}
            </Text>
          </View>
          <View className="flex-row justify-start items-center py-4">
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('EditDetails');
              }}
              className="bg-black rounded-md px-5 py-2 w-24 mr-3">
              <Text className="text-base font-bold text-white text-center">
                Edit
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={deleteUserData}
              className="bg-black rounded-md px-5 py-2 w-24">
              <Text className="text-base font-bold text-white text-center">
                Delete
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    )
  );
};

export default TableDetails;
