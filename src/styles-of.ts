import { StyleProp } from "react-native";

interface Sheet<T> {
  [styleName: string]: StyleProp<T>;
}

type StyleSelectors<Sheet extends { [K: string]: any }> = Partial<
  Record<keyof Sheet, boolean | null | undefined | object>
>;

function stylesOf<T>(styleMap: Sheet<T>, selectors: StyleSelectors<Sheet<T>>) {
  return Object.keys(styleMap)
    .filter(styleName => selectors[styleName])
    .map(styleName => styleMap[styleName]);
}

export default stylesOf;
