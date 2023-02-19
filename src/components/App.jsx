import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './Navbar/Navbar';
import { UserRoutes } from './UserRoutes';

export const App = () => {
  return (
    <BrowserRouter
      basename="/goit-react-hw-05-movies"
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Navbar />
      <UserRoutes />
    </BrowserRouter>
  );
};
