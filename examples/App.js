/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import { SafeAreaView, ScrollView, StatusBar, StyleSheet } from "react-native";
import DashedCircularIndicator from "dashed-circular-indicator";

const App = () => {
  return (
    <>
      <StatusBar barStyle='dark-content' />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior='automatic' style={styles.scrollView}>
          <DashedCircularIndicator selectedValue={8} />
          <DashedCircularIndicator
            selectedValue={45}
            maxValue={50}
            radius={150}
            activeStrokeColor='#ff0aa0'
            valueFontSize={50}
            withGradient
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
