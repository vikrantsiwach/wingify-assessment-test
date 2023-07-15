import { ListItem } from "../types/listItem";

export const doCheckRecursively = (data: ListItem[], childCheck: boolean) => {
  for (const d of data) {
    d.isChecked = childCheck;
    if (d.items) {
      doCheckRecursively(d.items, childCheck);
    }
  }
  return data;
};

export const recursiveSearch = (
  id: number,
  data: ListItem[]
): ListItem | undefined => {
  for (const item of data) {
    if (item.id === id) {
      return item;
    }
    if (item.items) {
      const childItem = recursiveSearch(id, item.items);
      if (childItem) {
        return childItem;
      }
    }
  }
};

export const clonedArray = (data: ListItem[]) => JSON.parse(JSON.stringify(data))
