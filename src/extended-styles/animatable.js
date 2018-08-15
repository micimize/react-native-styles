import React from "react";
import { get as getExtensions } from "./extensions";
import { View as RNView, Text as RNText, StyleSheet } from "react-native";
import { createAnimatableComponent } from "react-native-animatable";

function animatable(Component) {
  const AnimatableComponent = createAnimatableComponent(Component);
  return props => {
    let transitionProps = getExtensions(props.style).transition;
    return transitionProps ? (
      <AnimatableComponent
        {...transitionProps}
        {...props}
        style={StyleSheet.flatten(props.style)}
      />
    ) : (
      <Component {...props} />
    );
  };
}

const View = createComponent(RNView);
const Text = createComponent(RNText);

export { View, Text };

export default animatable;
