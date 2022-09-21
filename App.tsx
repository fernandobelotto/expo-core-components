import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MyActivityIndicator from './src/core/MyActivityIndicator';
import MyButton from './src/core/MyButton';
import MyFlatList from './src/core/MyFlatList';
import MyImage from './src/core/MyImage';
import MyImageBackground from './src/core/MyImageBackground';
import MyKeyboardAvoidingView from './src/core/MyKeyboardAvoidingView';
import MyModal from './src/core/MyModal';
import MyPressable from './src/core/MyPressable';
import MyRefreshControl from './src/core/MyRefreshControl';
import MySafeAreaView from './src/core/MySafeAreaView';
import MyScrollView from './src/core/MyScrollView';
import MySectionList from './src/core/MySectionList';
import MyStatusBar from './src/core/MyStatusBar';
import MySwitch from './src/core/MySwitch';
import MyTextInput from './src/core/MyTextInput';
import MyTouchableHighlight from './src/core/MyTouchableHighlight';
import MyTouchableNativeFeedback from './src/core/MyTouchableNativeFeedback';
import MyTouchableOpacity from './src/core/MyTouchableOpacity';
import MyTouchableWithoutFeedback from './src/core/MyTouchableWithoutFeedback';
import MyView from './src/core/MyView';
import MyVirtualizedList from './src/core/MyVirtualizedList';

export default function App() {
  return (
    <View style={styles.container}>

      {/* <MyActivityIndicator /> */}
      {/* <MyButton /> */}
      {/* <MyImage /> */}
      {/* <MyKeyboardAvoidingView /> */}
      {/* <MyModal /> */}
      {/* <MyPressable /> */}
      {/* <MyRefreshControl /> */}
      
      {/* <MySafeAreaView /> */}
      
      {/* <MyScrollView /> */}
      {/* <MySectionList /> */}
      {/* <MyVirtualizedList /> */}
      {/* <MyFlatList/> */}

      {/* <MyStatusBar /> */}
      {/* <MySwitch /> */}
      {/* <MyView /> */}
      {/* <MyTextInput /> */}
      {/* <MyImageBackground /> */}
      {/* <MyTouchableNativeFeedback /> */}
      {/* <MyTouchableHighlight />
      <MyTouchableOpacity />
      <MyTouchableWithoutFeedback /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
