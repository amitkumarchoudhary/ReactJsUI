import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js'


ReactDOM.render(<App/>, document.getElementById('root'));

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware, combineReducers } from 'redux';
// import thunk from 'redux-thunk';
// import registerServiceWorker from './registerServiceWorker';

// import  { selectedDivision, divisionBranchDropdown, selectedBranch } from './reducers/divisionReducer';
// import { userProfile } from './reducers/userProfileReducer';
// import { reportType } from './reducers/reportTypeReducer';
// import { fiscalYear } from './reducers/fiscalYearReducer';
// import { languageList } from './reducers/languageListReducer';


// const rootReducer = combineReducers({
    
// });

// const store = createStore(rootReducer, 
//     applyMiddleware(thunk)
// );

// const app = (
//     <Provider store={store}>
//         <App />
//     </Provider>
// );

// ReactDOM.render(app, document.getElementById('root'));
// registerServiceWorker();
