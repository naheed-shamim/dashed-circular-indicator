/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import { SafeAreaView, ScrollView, StatusBar, StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import DashedCircularIndicator from "dashed-circular-indicator";

const App = () => {
  return (
    <>
      <StatusBar barStyle='dark-content' />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior='automatic'
          style={styles.scrollView}
        ></ScrollView>
        <DashedCircularIndicator selectedValue={8} />
        <DashedCircularIndicator selectedValue={8} radius={150} valueFontSize={50} />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
});

export default App;
