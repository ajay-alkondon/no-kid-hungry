import { ThemedText } from '@/components/ThemedText';
import MaterialCommunityIcons from '@react-native-vector-icons/material-design-icons';
import { Stack, router } from 'expo-router';
import { TouchableOpacity } from 'react-native';

const DonateScreenLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ 
          headerTitle: '', 
          headerStyle:{backgroundColor:'#64BD44'},
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()} style={{flexDirection:'row'}}>
              <MaterialCommunityIcons name="chevron-left" size={32} color={"white"} />
              <ThemedText style={{marginTop:4, color:'#fff'}}>Back</ThemedText>
            </TouchableOpacity> )
        }}
      />
    </Stack>
  )
}

export default DonateScreenLayout;