import { Tabs, useNavigation } from 'expo-router';
import { createContext, useState } from 'react';
import { View } from "react-native";

import DonationModal from '@/components/modals/DonationModal';
import ThankYouModal from '@/components/modals/ThankYouModal';
import CustomTabBar from '@/components/navigation/CustomTabBar';
import { FloatingPlayer } from "@/components/podcast/FloatingPlayer";

// Create a context to share the modal toggle function
export const DonationModalContext = createContext(null);

export default function TabLayout() {
  const navigation = useNavigation();
  const [thankYouVisible, setThankYouVisible] = useState(false);
  const [donationModalVisible, setDonationModalVisible] = useState(false);

  const toggleThankYouModal = () => {
    setThankYouVisible(!thankYouVisible);
  };

  const toggleDonationModal = () => {
    setDonationModalVisible(!donationModalVisible);
  };

  return (
    <DonationModalContext.Provider value={toggleDonationModal}>
      <View style={{ flex: 1 }}>
        <Tabs
          tabBar={(props) => <CustomTabBar {...props} />}
          screenOptions={{
            headerShown: false, 
          }}
        >
          <Tabs.Screen name="(home)" options={{ title: 'Events' }} />
          <Tabs.Screen name="events" options={{ title: 'Events' }} />
          <Tabs.Screen
            name="donate"
            options={{ title: 'Donate' }}
            listeners={{
              tabPress: (e) => {
                e.preventDefault();
                toggleDonationModal();
              },
            }}
          />
           <Tabs.Screen name="fundraise" options={{ title: 'Fundraise' }} />
          <Tabs.Screen name="podcast" options={{ title: 'Podcast' }} />
      </Tabs>

      <FloatingPlayer style={{
        position:'absolute',
        // Match the tab bar's horizontal positioning
        left: 20,
        right: 20,
        bottom: 100,
        backgroundColor:'rgba(242,118,34,0.9)',
        // Match the tab bar's pill shape
        borderRadius: 32.5, 
      }} />

      {donationModalVisible && <DonationModal visible={donationModalVisible} onClose={toggleDonationModal} />}
      <ThankYouModal visible={thankYouVisible} onClose={toggleThankYouModal} />
    </View>
  </DonationModalContext.Provider>
  );
}

