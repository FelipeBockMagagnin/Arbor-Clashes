import { Button, Text, View } from 'react-native';
import useInventoryStore from "../../store/inventoryStore";

export default function TabCraftingScreen() {
  const inventoryStore = useInventoryStore();

  function handleAddItem(id: number, quantity: number) {
    inventoryStore.addItem(id, quantity);
  }

  return (
    <View>
      <Text>Crafting</Text>
      <Button title='Craft item 1' onPress={() => handleAddItem(1, 1)} />
      <Button title='Craft item 2' onPress={() => handleAddItem(2, 1)} />
    </View>
  );
}