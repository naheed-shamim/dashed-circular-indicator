/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, View } from "react-native";
import { DashedCircularIndicator } from "rn-dashed-circular-indicator";

const App = () => {
  return (
    <>
      <StatusBar barStyle='dark-content' />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior='automatic' style={styles.scrollView}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <DashedCircularIndicator selectedValue={8} />
            <DashedCircularIndicator
              selectedValue={25}
              maxValue={50}
              textColor='#f00'
              activeStrokeColor='#cc6600'
              withGradient
            />
            <DashedCircularIndicator
              selectedValue={75}
              maxValue={100}
              radius={100}
              activeStrokeColor='#0f4fff'
              withGradient
            />
            <DashedCircularIndicator
              selectedValue={55}
              maxValue={90}
              radius={80}
              activeStrokeColor='#cc6633'
              withGradient
              anticlockwise
              containerStyle={{ padding: 0 }}
            />
          </View>
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
