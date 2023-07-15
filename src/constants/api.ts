import { ListItem } from "../types/listItem";

export const treeData: ListItem[] = [
    {
      id: 1,
      name: "Account 1",
      isChecked: false,
      items: [
        {
          id: 2,
          name: "Container 1",
          isChecked: false,
          items: [
            {
              id: 3,
              name: "Draft 1",
              isChecked: false,
              items: [{ id: 4, name: "Campaign 1", isChecked: false, items: [] }],
            },
            { id: 5, name: "Draft 2", isChecked: false, items: [] },
          ],
        },
        { id: 6, name: "Container 2", isChecked: false, items: [] },
      ]
    },
    {
      id: 9,
      name: "Account 2",
      isChecked: false,
      items: [
        {
          id: 10,
          name: "Container 1",
          isChecked: false,
          items: [
            {
              id: 11,
              name: "Draft 1",
              isChecked: false,
              items: [{ id: 12, name: "Campaign 1", isChecked: true, items: [] }],
            },
            { id: 13, name: "Draft 2", isChecked: false, items: [] },
          ],
        },
        { id: 14, name: "Container 2", isChecked: true, items: [] },
        { id: 15, name: "Container 3", isChecked: true, items: [
          {
            id: 16,
            name: "Container 3_1",
            isChecked: false,
            items: [
              {
                id: 17,
                name: "Draft 3",
                isChecked: false,
                items: [{ id: 18, name: "Campaign 3", isChecked: true, items: [] }],
              },
              { id: 19, name: "Draft 4", isChecked: false, items: [] },
            ],
          }
        ] },
      ]
    },
  ];