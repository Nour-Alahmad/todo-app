import { useContext } from 'react';
import './list.scss'
import { SettingsContext } from '../context/SettingsProvider.jsx';
import {  Paper, Text, Group, CloseButton } from '@mantine/core';
function List({ items, currentPage, deleteItem }) {
  const settings = useContext(SettingsContext);
  // const [currentPage, setCurrentPage] = useState(1);

  const itemsToDisplay = items.slice(
    (currentPage - 1) * settings.displayItems,
    currentPage * settings.displayItems
  );

 

  return (
    <div>
   
        {itemsToDisplay.map((item) => (
          <> 
           <section className='list-item'>
           <Paper withBorder p="lg" radius="md" shadow="md">
      <Group position="apart" mb="xs">
       
        <Text fz="lg" fw={500}>
          <span className='pendindg'>Pending</span>
       { item?.assignee?.toUpperCase()}
        </Text>
        <CloseButton mr={-9} mt={-9}  onClick={()=> deleteItem(item.id)}/>
      </Group>
      <Text c="dimmed" fz="s">
       {item.text}
      </Text>
      <Group position="right" mt="md">
        <Text  size="s">
        Difficulty :  {item.difficulty}
        </Text>
      </Group>
    </Paper>
          </section>
          </>

        ))}
    
    
    </div>
  );
}

export default List;
