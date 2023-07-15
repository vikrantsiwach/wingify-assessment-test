import React from "react";
import { ListItem } from "../types/listItem";

interface Props {
  data: ListItem;
  onSelectChange: (data: ListItem) => void;
}

const LeafComponent: React.FC<Props> = (props: Props) => {
  return (
    <div className="pl-4">
      <span className="pl-4">
        <input
          type="checkbox"
          id={props.data.id.toString()}
          checked={props.data.isChecked}
          onChange={() => {
            props.onSelectChange(props.data);
          }}
        />
        <label
          className="ml-1 cursor-pointer"
          htmlFor={props.data.id.toString()}
        >{`${props.data.name} (${props.data.items.length})`}</label>
      </span>

      {props.data.items &&
        props.data.items.map((d) => {
          return <LeafComponent data={d} key={d.id} onSelectChange={props.onSelectChange}/>;
        })}

    </div>
  );
};

export default React.memo(LeafComponent);
