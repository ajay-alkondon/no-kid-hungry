import { LoggedInAccountDetails } from "@/components/account/LoggedInAccountDetails";
import { ThemedView } from "@/components/ThemedView";
import { Authenticator } from "@aws-amplify/ui-react-native";
import { StyleSheet } from "react-native";
//import outputs from "@/amplify_outputs.json";
//Amplify.configure(outputs);

const AccountScreen = () => {
  return (
    <Authenticator socialProviders={['amazon', 'apple', 'facebook', 'google']}>
      <ThemedView style={styles.container}>
        <LoggedInAccountDetails />
      </ThemedView>
    </Authenticator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingHorizontal:15,
  }
});

export default AccountScreen;