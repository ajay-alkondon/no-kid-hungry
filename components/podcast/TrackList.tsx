import { TrackListItem } from '@/components/podcast/TrackListItem';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import MaterialCommunityIcons from '@react-native-vector-icons/material-design-icons';
import { Dimensions, FlatList, StyleSheet, View } from 'react-native';
import TrackPlayer, { Track } from 'react-native-track-player';

export type TrackListProps = Partial<FlatListProps<Track>> & {
  tracks: Track[]
}

const ItemDivider = () => {
  return <View style={{marginVertical: 9, marginLeft:60}} />
}

export const TrackList = ({tracks, ...flatlistProps}: TrackListProps) => {

  const handleTrackSelect = async (track: Track) => {
    // We need to reset the player before loading a new track
    await TrackPlayer.reset();
    await TrackPlayer.add(track);
    await TrackPlayer.play();
  }

  return (
    <FlatList 
      data={tracks}
      contentContainerStyle={{ paddingTop: 0, paddingBottom: 128 }}
      ItemSeparatorComponent={ItemDivider}
      // Update the ListEmptyComponent to show a message instead of a loader
      ListEmptyComponent={
        <ThemedView style={styles.emptyContainer}>
          <MaterialCommunityIcons name="podcast" size={80} color="#ccc" style={{marginBottom: 20}}/>
          <ThemedText style={styles.emptyContainerText}>No Episodes Found</ThemedText>
          <ThemedText style={{color: '#888'}}>Could not fetch episodes at this time.</ThemedText>
        </ThemedView>
      }
      renderItem={({item: track}) => (
        <TrackListItem 
          track={track}
          onTrackSelect={handleTrackSelect}
        /> 
      )}
      {...flatlistProps}
    />
  )
}

const styles = StyleSheet.create({
  emptyContainer: {
    flex:1,
    height: Dimensions.get('window').height * 0.7,
    backgroundColor:"#fff",
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyContainerText: {
    backgroundColor:"#fff",
    fontSize: 24,
    fontWeight:'bold',
    color:"#000",
    textAlign:'center',
  },
})
