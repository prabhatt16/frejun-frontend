import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import * as Actions from './actions/index';
import axios from 'axios';
import {getUsers} from './server';

const TableScreen = () => {
  const navigation = useNavigation();
  const selector = useSelector(state => state.StateReducer.usersData);
  const [usersData, setUsersData] = useState([]);
  const [showIndicator, setShowIndicator] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      axios
        .get('https://lime-kind-whale.cyclic.app/users')
        .then(e => {
          dispatch({type: 'get_users_details', payload: e.data}),
            setUsersData(e.data.data);
          setShowIndicator(false);
        })
        .catch(e => console.log(e));
    }, 3000);
    return () => clearTimeout(timer);
  });

  useEffect(() => {
    // console.log('data==>', usersData);
  }, [selector]);

  return (
    <SafeAreaView className="flex-1 w-full bg-white">
      {showIndicator ? (
        <View className="flex-1 h-full mt-9 ">
          <ActivityIndicator size="large" color="blue" />
        </View>
      ) : (
        <>
          <View className=" flex-row justify-between items-center border border-black px-3 py-3 bg-cyan-100">
            <Text className=" text-center font-bold text-black text-sm w-fit">
              Id
            </Text>
            <Text className="font-bold text-center text-black text-sm w-1/3">
              Name
            </Text>
            <Text className="font-bold text-center text-black text-sm w-fit">
              Age
            </Text>
            <Text className="font-bold text-center text-black text-sm w-1/4">
              Mobile
            </Text>
            <Text className="font-bold text-center text-black text-sm w-fit">
              Country
            </Text>
          </View>
          <View className="border border-black ">
            {usersData?.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={async () => {
                    {
                      await dispatch({type: 'curr_user_id', payload: item.id}),
                        navigation.navigate('TableDetails');
                    }
                  }}
                  className="flex-row justify-between items-center border-b border-b-black px-3 py-3">
                  <Text className=" text-center text-black text-sm w-fit">
                    {item.id}
                  </Text>
                  <Text className=" text-center text-black text-sm w-1/4">
                    {item.name}
                  </Text>
                  <Text className=" text-center text-black text-sm w-fit">
                    {item.age}
                  </Text>
                  <Text className=" text-center text-black text-sm w-1/4">
                    {item.mobile}
                  </Text>
                  <Text className=" text-center text-black text-sm w-fit">
                    {item.country}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('AddUser');
            }}
            className="bg-black rounded-md py-2 m-4 w-fit">
            <Text className="text-lg font-bold text-white text-center">
              Add New
            </Text>
          </TouchableOpacity>
        </>
      )}
    </SafeAreaView>
  );
};

export default TableScreen;
