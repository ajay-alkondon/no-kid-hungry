import { ThemedText } from '@/components/ThemedText';
import { useAuthenticator } from "@aws-amplify/ui-react-native";
import MaterialCommunityIcons from '@react-native-vector-icons/material-design-icons';
import { Stack, router } from 'expo-router';
import { TouchableOpacity } from 'react-native';

//import outputs from "@/amplify_outputs.json";
//Amplify.configure(outputs);

const AccountScreenLayout = () => {
  const { user, signOut } = useAuthenticator();

  return (
    <Stack>
      <Stack.Screen name="index" options={{
        headerTitle: 'Account', 
        headerLeft: () => (
          <TouchableOpacity onPress={() => router.back()} style={{flexDirection:'row', marginLeft:-14}}>
            <MaterialCommunityIcons name="chevron-left" size={32} />
            <ThemedText style={{marginTop:4}}>Back</ThemedText>
          </TouchableOpacity> ),
        headerRight: () => (user ?
          <TouchableOpacity onPress={signOut} style={{flexDirection:'row'}}>
            <MaterialCommunityIcons name="logout" size={22} />
          </TouchableOpacity> 
          : null)
      }} />
    </Stack>
  )
}

export default AccountScreenLayout;