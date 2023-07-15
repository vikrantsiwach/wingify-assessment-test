import { useEffect, useState } from 'react';
import LeafComponent from './LeafComponent';
import { ListItem } from '../types/listItem';
import { clonedArray, doCheckRecursively, recursiveSearch } from '../utils/utils';
import ButtonComponent from './ButtonComponent';

interface Props {
  data: ListItem[];
  getCurrentState: boolean;
  printCurrentState: (data: ListItem[]) => void;
}

const TreeComponent: React.FC<Props> = (props: Props) => {

  const [data, setData] = useState(props.data);

  useEffect(() => {
    if (props.getCurrentState) {
      props.printCurrentState(data);
    }
  },[props.getCurrentState])

  const onSelectChange = (item: ListItem) => {
    const updatedData = clonedArray(data)
    const newValue = recursiveSearch(item.id, updatedData)
    if (newValue) {
      newValue.isChecked = !newValue.isChecked;
      if (newValue.items) {
        doCheckRecursively(newValue.items, newValue.isChecked)
      }
      setData(updatedData)
    }
  }

  const handleSelectAllChange = () => setData(() => doCheckRecursively(clonedArray(data), true))
  const handleUnSelectAllChange = () => setData(() => doCheckRecursively(clonedArray(data), false))

  return (
    <div className="flex flex-col justify-center px-6 py-12">
      <div className="flex-row">
        <ButtonComponent text='Select All' handleClick={handleSelectAllChange}/>
        <ButtonComponent text='Unselect All' handleClick={handleUnSelectAllChange}/>
      </div>

      <div className="mt-4 flex flex-col">
        {data.map((d) => {
          return (
            <div className="mt-4" key={d.id}>
              <LeafComponent data={d} onSelectChange={onSelectChange}/>
              <hr className='my-4'/>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TreeComponent;
