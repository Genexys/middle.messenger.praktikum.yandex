import '../src/styles/main.scss';
import { LoginPage } from './pages/login';
import { RegistrationPage } from './pages/registration';
import { Profile } from './pages/profile';
import { ChatPage } from './pages/chat';
import { renderDOM } from './utils/renderDOM';

window.addEventListener('DOMContentLoaded', () => {
  const page = new Profile();

  renderDOM('#root', page);
});