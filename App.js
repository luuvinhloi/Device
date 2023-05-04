import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import DeviceScreen from '../Device/DeviceScreen';
import { TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


export default function App() {
  return (
    <><View style={styles.header}>
      <TouchableOpacity onPress={goBack} style={styles.backButton}>
        <FontAwesome name="arrow-left" size={25} color="black" />
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Quản lí thiết bị</Text>
      </View>
    </View>
    <View style={styles.container}>
        <DeviceScreen />
        <StatusBar style="auto" />
      </View></>
  );
}

const goBack = () => {
  navigation.goBack();
};

const styles = StyleSheet.create({
  header: {
    height: 65,
    width: '100%',
    backgroundColor: 'rgba(201, 199, 199, 0.8)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButton: {
    marginTop: 10,
  },
});
