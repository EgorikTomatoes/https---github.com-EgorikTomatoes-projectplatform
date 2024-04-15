import logo from './logo.svg';
import './App.css';
import {
	Form,
} from 'react-router-dom'


function App() {
  return (
    <div>
      <div>
        Это сайт о проектах!<br/>
        Здесь вы можете опубликовать свой проект, либо найти идею для нового проекта!<br/>
        Создавайте свое портфолио!<br/>
        <b>Быстрый и удобный</b> способ работодателю узнать все проекты соискателя!!!
      </div>
      <div>
        <Form action='login'>
          <button>Войти</button>
        </Form>
        <Form action='/profile'>
          <button>Профиль</button>
        </Form>
      </div>
    </div>
  );
}

export default App;
