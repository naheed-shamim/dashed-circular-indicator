import React from "react";
import PropTypes from "prop-types";

import { Path, Svg, Circle, Text } from "react-native-svg";
import { StyleSheet, View } from "react-native";
/* ------------------------ CONSTANTS ------------------------  */
const DEFAULT_RADIUS = 60;
const MAX_VALUE = 10;
const INITIAL_ANGLE_DISPLACEMENT = -30;

const DashedCircularIndicator = ({
  maxValue = MAX_VALUE,
  selectedValue = 2,
  radius = DEFAULT_RADIUS,
  strokeWidth = 10,
  valueUnits = "%",
  activeStrokeColor = "#05a168",
  inactiveStrokeColor = "#ddd",
  unitFontSize = 20,
  valueFontSize = 35,
  withGradient = false,
}) => {
  // ----  PIE calculation funciton --------
  const generatePie = (value) => {
    const x = radius - Math.cos((2 * Math.PI) / (100 / value)) * radius;
    const y = radius + Math.sin((2 * Math.PI) / (100 / value)) * radius;
    const long = value <= 50 ? 0 : 1;
    const d = `M${radius},${radius} L${radius},${0}, A${radius},${radius} 0 ${long},1 ${y},${x} Z`;

    return d;
  };

  //----  PIE Area calculation  --------
  const calculatePieValue = (numberOfBars) => {
    const angle = 360 / numberOfBars;
    const pieValue = Math.floor(angle / 4);
    return pieValue < 1 ? 1 : Math.floor(angle / 4);
  };

  // ----  PIE render funciton --------
  const renderPie = (i) => {
    //Rotation Calculation
    const primaryRotationAngle = (maxValue - 1) * (360 / maxValue);
    const rotationAngle = INITIAL_ANGLE_DISPLACEMENT + i * primaryRotationAngle;
    const rotationTransformation = `rotate(${rotationAngle}, ${radius}, ${radius})`;

    const pieValue = calculatePieValue(maxValue);
    const dValue = generatePie(pieValue);

    const activeColor = withGradient
      ? shadeColor(activeStrokeColor, (i + 1) * 5)
      : activeStrokeColor;

    const fillColor = i <= selectedValue ? activeColor : inactiveStrokeColor;

    return <Path key={i} d={dValue} fill={fillColor} transform={rotationTransformation} />;
  };

  // ----  Creates a circle by combining the Pie(s) --------
  const renderOuterCircle = () => {
    return [...Array(maxValue + 1)].map((e, i) => renderPie(i));
  };

  const unitsTextView = (
    <Text
      fill='#000'
      fontSize={unitFontSize}
      x={radius}
      y={radius + unitFontSize}
      textAnchor='middle'
    >
      {valueUnits}
    </Text>
  );

  const textValueY = !!valueUnits ? radius : radius + valueFontSize / 3;
  const unitValueY = !!valueUnits ? radius : radius + valueFontSize / 3;

  // --------  MAIN Render --------
  return (
    <View style={styles.container}>
      <Svg width={radius * 2} height={radius * 2}>
        {renderOuterCircle()}

        {/* This is the overlay circle */}
        <Circle r={radius - strokeWidth} cx={radius} cy={radius} fill={"#fff"} />

        <Text
          fill='#000'
          fontSize={valueFontSize}
          fontWeight='bold'
          x={radius}
          y={textValueY}
          textAnchor='middle'
        >
          {selectedValue}
        </Text>
        {!!valueUnits.length && unitsTextView}
      </Svg>
    </View>
  );
};

DashedCircularIndicator.propTypes = {
  maxValue: PropTypes.number,
  selectedValue: PropTypes.number,
  radius: PropTypes.number,
  strokeWidth: PropTypes.number,
  valueUnits: PropTypes.string,
  activeStrokeColor: PropTypes.string,
  inactiveStrokeColor: PropTypes.string,
  unitFontSize: PropTypes.number,
  valueFontSize: PropTypes.number,
  withGradient: PropTypes.bool,
};

export default React.memo(DashedCircularIndicator);

const styles = StyleSheet.create({
  container: { padding: 10 },
});

// ------------------------ UTILITY FUNCTION ------------------------

function shadeColor(color, percent) {
  var R = parseInt(color.substring(1, 3), 16);
  var G = parseInt(color.substring(3, 5), 16);
  var B = parseInt(color.substring(5, 7), 16);

  R = parseInt((R * (100 + percent)) / 100);
  G = parseInt((G * (100 + percent)) / 100);
  B = parseInt((B * (100 + percent)) / 100);

  R = R < 255 ? R : 255;
  G = G < 255 ? G : 255;
  B = B < 255 ? B : 255;

  var RR = R.toString(16).length === 1 ? "0" + R.toString(16) : R.toString(16);
  var GG = G.toString(16).length === 1 ? "0" + G.toString(16) : G.toString(16);
  var BB = B.toString(16).length === 1 ? "0" + B.toString(16) : B.toString(16);

  return "#" + RR + GG + BB;
}
