import { INCREMENT, DECREMENT, RESET } from '../actions/counterActions';

const counterReducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };
    case RESET:
      return { count: 0 };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export default counterReducer;
