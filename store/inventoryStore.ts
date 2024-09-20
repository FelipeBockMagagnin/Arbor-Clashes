import { create } from 'zustand'

interface ItemType {
    id: number,
    quantity: number
}

interface InventoryState {
    inventory: Array<ItemType>
    addItem: (id: number, quantity: number) => void,
    removeItem: (id: number, quantity: number) => void
}

const useInventoryStore = create<InventoryState>()((set, get) => ({
    inventory: [],
    addItem: (id: number, quantity: number) => {
        const inventory = get().inventory;
        console.log(inventory)
        if(!inventory.some(item => item.id === id)){
            inventory.push({
                id: id,
                quantity: quantity
            });
            console.log(inventory)
        }

        const updatedInventory = inventory?.map((item: ItemType) => {
            console.log(item)
            if (item.id === id) {
                return {
                    ...item,
                    quantity: item.quantity + quantity,
                };
            }
            return item;
        });

        set(() => ({
            inventory: updatedInventory,
        }));
    },
    removeItem: (id: number, quantity: number) => {
        const inventory = get().inventory;
        const updatedInventory = inventory?.map((item: ItemType) => {
            if (item.id === id) {
                return {
                    ...item,
                    quantity: item.quantity - quantity,
                };
            }

            return item;
        });

        set(() => ({
            inventory: updatedInventory,
        }));
    }
}));

export default useInventoryStore