import MaterialCommunityIcons from '@react-native-vector-icons/material-design-icons';
import { Stack, useNavigation } from 'expo-router';
import { DrawerActions } from 'expo-router/react-navigation';
import { useLayoutEffect } from 'react';
import { TouchableOpacity } from 'react-native';

const PodcastScreenLayout = () => {
  const navigation = useNavigation();

  // This hook will run after the component mounts and ensure
  // any default or inherited search bar options are removed.
  useLayoutEffect(() => {
    navigation.setOptions({
      headerSearchBarOptions: undefined,
    });
  }, [navigation]);

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: true,
          headerStyle: { backgroundColor: '#fff' },
          headerShadowVisible: false,
          headerTitle: '', // Explicitly remove the title
          headerLeftContainerStyle: {
            paddingLeft: 20,
          },
          headerRightContainerStyle: {
            paddingRight: 20,
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
              <MaterialCommunityIcons name="menu" color={'#000'} size={28} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('account')}>
              <MaterialCommunityIcons name="account-circle-outline" color={'#000'} size={28} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen 
        name="player" 
        options={{ 
          presentation: 'card', 
          gestureEnabled: true, 
          gestureDirection: 'vertical', 
          headerShown: false 
        }} 
      />
    </Stack>
  );
};

export default PodcastScreenLayout;

