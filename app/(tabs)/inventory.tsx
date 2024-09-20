import useInventoryStore from '@/store/inventoryStore';
import { Text, View } from 'react-native';

export default function TabInventoryScreen() {
  const inventoryStore = useInventoryStore();

  return (
    <View>
      <Text>Inventory</Text>
      
      {inventoryStore.inventory?.map((item) => {
        return (
          <View>
            <Text>Item: {item.id}</Text>
            <Text>Quantity: {item.quantity}</Text>
          </View>
        )
      })}
    </View>
  );
}