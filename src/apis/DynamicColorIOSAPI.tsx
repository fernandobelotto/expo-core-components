import { DynamicColorIOS, Text } from "react-native";

const customDynamicTextColor = DynamicColorIOS({
  dark: "lightskyblue",
  light: "midnightblue",
});

export default function DynamicColorIOSAPI() {
  return (
    <>
      <Text style={{ color: customDynamicTextColor }}>
        My dynamic text in ios
      </Text>
    </>
  );
}
