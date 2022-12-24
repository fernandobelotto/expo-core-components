import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from "react-native";

const DATA = [
  {
    id: "7628c508-4db6-419f-8fd8-fb03ce8b8453",
    title: "Kyra",
  },
  {
    id: "bc384a31-24f9-4110-93d9-6e5610454e5a",
    title: "Karelle",
  },
  {
    id: "870b4498-392a-46ce-8f80-f247a90cc2c8",
    title: "Ruben",
  },
  {
    id: "323ed0ca-6955-4e47-8fa9-652706893f51",
    title: "Karlie",
  },
  {
    id: "027beadd-6041-4f05-a8fe-917e483b2904",
    title: "Gerhard",
  },
  {
    id: "3b0cbf37-8ae6-4cb0-83ab-10bcad96cbca",
    title: "Lola",
  },
  {
    id: "6aa567bd-4392-4c9a-a7b2-a6b1a3837a2d",
    title: "Adrien",
  },
  {
    id: "b2472f98-2d4f-4de9-b162-ea396f461526",
    title: "Carlee",
  },
  {
    id: "563976ee-1707-4b9d-9b4e-f6544e5f3b27",
    title: "Evie",
  },
  {
    id: "5bc1a871-7db2-45da-948f-33d880b684d3",
    title: "Eunice",
  },
  {
    id: "65b082aa-1473-46e6-8951-571d3383d8e5",
    title: "Rowena",
  },
  {
    id: "7c8c542a-8783-4ae7-bf85-0d6b60872c8f",
    title: "Troy",
  },
  {
    id: "dd300b61-9bc3-42ae-83e7-b4e369a914cd",
    title: "Darren",
  },
  {
    id: "71a544f5-c767-4a6d-bbc4-da4685d4fd72",
    title: "Adrain",
  },
  {
    id: "314507c7-e9d5-46ce-847f-9b8fc826df6a",
    title: "Kailee",
  },
  {
    id: "81f49453-c8ed-4781-842a-c439b1bbea6d",
    title: "Lonnie",
  },
  {
    id: "e4a7dc2a-b020-4615-a861-3c4e102948f0",
    title: "Maddison",
  },
  {
    id: "83660421-a372-43ce-9216-0b9ac20d55c3",
    title: "Walker",
  },
  {
    id: "7e33b85b-f3df-4956-9f11-536dd327bb07",
    title: "Perry",
  },
  {
    id: "e4832c00-8902-41b4-9381-e58adf30faa0",
    title: "Alvina",
  },
  {
    id: "a4df5382-fe15-4a32-8bf2-431fa99f7499",
    title: "Yesenia",
  },
  {
    id: "6c356ea6-4fae-45d2-b64c-f7174146565e",
    title: "Maximillian",
  },
];

const Item = ({ title }: any) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default function MyFlatList() {
  const renderItem = ({ item }: any) => <Item title={item.title} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#f9c2ff",
    paddingHorizontal: 25,
    paddingVertical: 5,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
