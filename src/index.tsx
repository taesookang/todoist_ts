import ReactDOM from 'react-dom';
import App from './App';
import './scss/base.scss'

ReactDOM.render(
    <App darkModeDefault={false} />,
  document.getElementById('root')
);

export {}