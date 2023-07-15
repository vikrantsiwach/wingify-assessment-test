export interface ListItem {
    id: number;
    name: string;
    isChecked: boolean;
    items: ListItem[];
}