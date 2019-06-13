import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

import * as TaskActionCreators from '../actions/task';
import * as UiActionCreators from '../actions/ui';
import Header from '../components/Header.jsx';
import AddTask from '../components/AddTask.jsx';
import Task from '../components/Task.jsx';
import Modal from '../components/Modal.jsx';
import Footer from '../components/Footer.jsx';
import colors from '../colors';



export const GlobalStyle = createGlobalStyle`
  html, body, #root {
     background: ${colors.appBg};
     background: linear-gradient(0deg, rgba(232,127,223,1) 14%, rgba(220,24,112,1) 100%);
     background-repeat: no-repeat;
     background-attachment: fixed;
     margin: 0;
     padding: 0;
     height: 100%;
     color: ${colors.text};
     font-family: "Segoe UI", "Helvetica Neue";
  }
`

const AppWrapper = styled.div`
  min-height: 100%;
  position: relative;
`

const MainContent = styled.div`
  padding-bottom: 160px;
  min-height: 100vh;
`

const ListWrapper = styled.div`
  padding: 10px;
  border-radius: 10px;
  max-width: 500px;
  width: 70%;
  margin: 0 auto;
  @media(max-width: 550px) {
    width: 85%;
  }
  @media(max-width: 350px) {
    width: 95%;
  }
`

class App extends Component {

  componentDidMount() {
    this.props.readTasks();
  }

  render() {

    let selectedTaskDesc;
    this.props.tasks.map((task) => {
      if(task.id === this.props.selectedTaskId){
        selectedTaskDesc = task.task;
      }
    });
  
    const taskComponents = this.props.tasks.map((task, index) => (
      <Task
        index={index}
        id={task.id}
        desc={task.task}
        key={task.id.toString()}
        selectTask={this.props.selectTask}
        deleteTask={this.props.deleteTask}
        toggleModal={this.props.toggleModalVisibility}
      />
    ));

    return (
      <AppWrapper>
      <GlobalStyle />
        <Header />
        <MainContent>
          {
            this.props.modalIsOpen &&
            <Modal
              selectedTaskDesc={selectedTaskDesc}
              selectedTaskId={this.props.selectedTaskId}
              updateTask={this.props.updateTask}
              deleteTask={this.props.deleteTask}
              toggleModal={this.props.toggleModalVisibility}
              showModalInput={this.props.showModalInput}
            />
          }
          <ListWrapper>
            <AddTask createTask={this.props.createTask}/>
            { taskComponents }
          </ListWrapper>
        </MainContent>
        <Footer />
      </AppWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.Task.tasks,
    selectedTaskId: state.Task.selectedTaskId,
    modalIsOpen: state.Ui.modalIsOpen,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createTask: (task) => {
      dispatch(TaskActionCreators.createTask(task))
    },
    selectTask: (id) => {
      dispatch(TaskActionCreators.selectTask(id))
    },
    updateTask: (id, task) => {
      dispatch(TaskActionCreators.updateTask(id, task))
    },
    deleteTask: (id) => {
      dispatch(TaskActionCreators.deleteTask(id))
    },
    readTasks: (taskList) => {
      dispatch(TaskActionCreators.readTasks(taskList))
    },
    toggleModalVisibility: () => {
      dispatch(UiActionCreators.toggleModalVisibility())
    }
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
