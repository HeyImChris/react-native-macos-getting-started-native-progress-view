/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';
import React, { useState } from 'react';

import MAPNativeProgressView from './MAPNativeProgressView';

import {
  Header,
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {

  const [progressValue, setProgressValue] = useState(0);

  function onIncrementPress() {
    if (progressValue.toFixed() < 100) {
      setProgressValue(progressValue + 10)
    }
  }

  function onDecrementPress() {
    if (progressValue > 0) {
      setProgressValue(progressValue - 10)
    }
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>ProgressView Awesome Demo!</Text>
              <Text style={styles.sectionDescription}>
                Watching the <Text style={styles.highlight}>ProgressView</Text>...{progressValue.toFixed()}%{"\n"}
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Button
                onPress={() => onIncrementPress()}
                title="Increment Progress"
              />
              <Button
                onPress={() => onDecrementPress()}
                title="Decrement Progress"
              />
              <MAPNativeProgressView
                progressValue={progressValue}
              />
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionDescription}>
                {"\n"}You control basic properties including colors and progress percentage. {"\n"}
              </Text>
            </View>
          </View>
        </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
    color: "orange",
  },
});

export default App;
