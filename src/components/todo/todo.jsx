import { useEffect, useState, useContext } from "react";
import useForm from "../../hooks/form.jsx";
import "./todo.scss";
import { v4 as uuid } from "uuid";
import List from "../List/list.jsx";
import { Button, Pagination } from "@mantine/core";

// import { SettingsProvider } from "../context/SettingsProvider.jsx";
import { useSettings } from '../context/SettingsProvider';
import Navbar from "../Navbar/navbar.jsx";


const ToDo = () => {
  // const settings = useContext(SettingsProvider);
  const { settings, updateSettings } = useSettings();



  const [currentPage, setCurrentPage] = useState(1);
  // const settings = useContext(SettingsProvider);

  const [defaultValues] = useState({
    difficulty: 4,
  });


  const [list, setList] = useState([]);

  useEffect(() => {
    const saveditems = JSON.parse(localStorage.getItem('items'));
    if (saveditems) {
      setList(saveditems.slice());
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(list));
  }, [list]);


  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem, defaultValues);

  function addItem(item) {
    item.id = uuid();
    item.complete = false;
    console.log(item);
    setList([...list, item]);
  }

  function deleteItem(id) {
    const items = list.filter((item) => item.id !== id);
    setList(items);
  }

  function toggleComplete(id) {
    const items = list.map((item) => {
      if (item.id == id) {
        item.complete = !item.complete;
      }
      return item;
    });

    setList(items);
  }
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  useEffect(() => {
    let incompleteCount = list.filter((item) => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
    console.log(incompleteCount)

  }, [list]);

  return (
    <>
    <Navbar/>
      <section className='todo-body'>
        <header className='todo-header'>
          <h1>To Do List: {incomplete} items pending</h1>
        </header>

        <section className='todo-sections'>
          <form onSubmit={handleSubmit} className='todo-form'>
            <h2>Add To Do Item</h2>

            <label>
              <span>To Do Item</span>
              <br />
              <input
                onChange={handleChange}
                name='text'
                type='text'
                placeholder='Item Details'
              />
            </label>

            <label>
              <span>Assigned To</span>
              <br />
              <input
                onChange={handleChange}
                name='assignee'
                type='text'
                placeholder='Assignee Name'
              />
            </label>

            <label>
              <span>Difficulty</span>
              <br />
              <input
                onChange={handleChange}
                defaultValue={defaultValues.difficulty}
                type='range'
                min={1}
                max={5}
                name='difficulty'
              />
            </label>

            <label>
              <Button type='submit'>Add Item</Button>
            </label>
          </form>

          <section className='todo-list'>
            {list.length ? (
              <div className='todo-empty'>
                <List
                  items={list}
                  currentPage={currentPage}
                  deleteItem={deleteItem}
                  toggleComplete={toggleComplete}
                />
              </div>
            ) : (
              <div className='todo-empty'>
                <p>Empty To Do List: O_O</p>
              </div>
            )}
            <Pagination
              total={
                list.length ? Math.ceil(list.length / settings.displayItems) : 1
              }
              value={currentPage}
              onChange={handlePageChange}
            />
          </section>
        </section>
      </section>

      {/* {list.map(item => (
        <div key={item.id}>
          <p>{item.text}</p>
          <p><small>Assigned to: {item.assignee}</small></p>
          <p><small>Difficulty: {item.difficulty}</small></p>
          <div onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
          <hr />
        </div>
      ))} */}
    </>
  );
};

export default ToDo;
