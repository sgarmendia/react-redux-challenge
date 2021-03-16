import React from 'react';
// import {  unmountComponentAtNode } from "react-dom";
import { Provider } from 'react-redux';
import { render, cleanup, fireEvent } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { act } from "react-dom/test-utils";

import App from './App';

const mockStore = configureStore([]);

const mockInitialState = {
  filter:"ALL",
  todos: [
      {
          id: 1,
          task: 'Learn React',
          complete: true,
          edit: false,
      },
      {
          id: 2,
          task: 'Learn Firebase',
          complete: true,
          edit: false,
      },
      {
          id: 3,
          task: 'Learn GraphQL',
          complete: false,
          edit: false,
      },
  ]
};

describe('App', () => {
  let store
  let component

  beforeEach(() => {
    store = mockStore(mockInitialState);

    store.dispatch = jest.fn();

    act(() => { 
      component = render(
        <Provider store={store}>
          <App />
        </Provider>
      );
    })
  });

  afterEach(cleanup);

  it('should render Title as "Redux TODOS"', () => {
    const title = component.getByRole('heading');
    expect(title).toHaveTextContent('Redux TODOS');
  });

  it('should render all 4 buttons', () => {
    const buttons = component.getAllByRole('button');
    expect(buttons).toHaveLength(4);
  });

  it('should render list of TODOS in Redux "initialstate"', () => {
    const todos = component.getAllByRole('listitem');

    expect(todos).toHaveLength(3);
    expect(component.getByText('Learn React')).toBeInTheDocument();
    expect(component.getByText('Learn Firebase')).toBeInTheDocument();
    expect(component.getByText('Learn GraphQL')).toBeInTheDocument();
  });

  it('should dispatch the correct action on "Add todo" button click', () => {
    const inputField = component.getByPlaceholderText('Add todo');
    const submitButton = component.getByTestId('submit');

    fireEvent.change(inputField, { target: { value: 'new task' } });
    fireEvent.click(submitButton);

    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(
      expect.objectContaining(
        { 
          type: 'ADD_TODO', 
          task: 'new task', 
        }
      )
    );
  });
});