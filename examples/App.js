/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, View } from "react-native";
import DashedCircularIndicator from "dashed-circular-indicator";

const App = () => {
  return (
    <>
      <StatusBar barStyle='dark-content' />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior='automatic' style={styles.scrollView}>
          <DashedCircularIndicator selectedValue={8} />
          <DashedCircularIndicator
            selectedValue={25}
            maxValue={50}
            radius={140}
            activeStrokeColor='#ff0aa0'
            backgroundColor='tomato'
            withGradient
            anticlockwise
          />
          <DashedCircularIndicator
            selectedValue={25}
            maxValue={50}
            radius={120}
            activeStrokeColor='#ff0aa0'
            withGradient
            // anticlockwise
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#fff",
  },
});

export default App;
