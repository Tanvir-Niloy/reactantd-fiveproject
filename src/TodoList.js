import { Button, Col, Input, Row, Modal } from "antd";
import React, { useState } from "react";
import Dashboard from "./Dashboard";

function TodoList() {
  const [inputValue, setInputValue] = useState("");
  const [todoItems, setTodoItems] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editIndex, setEditIndex] = useState('');
  const [editInputValue, setEditInputValue] = useState('');


  function addTodoItem(e) {
    e.preventDefault();
    setTodoItems([...todoItems, inputValue]);
  }

    const showModal = (index) => {
      
        setEditInputValue(todoItems[index])
        setEditIndex(index)
    setIsModalVisible(true);
  };

  const editTodoItem = () => {

      var dupitems = [...todoItems]
      
      dupitems[editIndex] = editInputValue
      setTodoItems(dupitems)
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    };
    

    const deleteTodoItem = (index) => {
      
        var dupitems = [...todoItems];
        dupitems.splice(index, 1);

        setTodoItems(dupitems)
  }   

  return (
    <Dashboard>
      <h3 style={{ textAlign: "center" }}>
        <b>Todo List</b>
      </h3>
          <div className='todolist'>
          <Row justify="center" >
        <Col lg={10} sm={24}>
          <div className="flex">
            <Input
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
              placeholder="enter items.."
            />
            <Button
              onClick={addTodoItem}
              type="primary"
              style={{ marginLeft: 20 }}
            >
              ADD
            </Button>
          </div>
        </Col>
      </Row>
      <Row justify="center">
        <Col lg={10} sm={24}>
          {todoItems.map((item, index) => {
            return (
              <div
                className="flex"
                style={{ justifyContent: "space-between", margin: 30 }}
              >
                <h2>{item}</h2>
                <div>
                  <Button type="primary" style={{ marginRight: 10 }} onClick={(e)=>{showModal(index)}}>
                    Edit
                  </Button>
                  <Button type="danger" onClick={(e)=>{deleteTodoItem(index)}}>Delete</Button>
                </div>
              </div>
            );
          })}
        </Col>
      </Row>
     </div>
      <Modal
        title="Edit Todo"
        visible={isModalVisible}
        onOk={editTodoItem}
        onCancel={handleCancel}
        okText='edit'
      >
        
              <Input value={editInputValue}
            onChange={(e) => { setEditInputValue(e.target.value) }} />
      </Modal>
    </Dashboard>
  );
}

export default TodoList;
