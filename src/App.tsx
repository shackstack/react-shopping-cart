import { Outlet } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { styled } from 'styled-components';
import CartTextButton from './components/CartTextButton/CartTextButton';
import Header from './components/Header/Header';

const App = ({ children }: React.PropsWithChildren) => {
  return (
    <RecoilRoot>
      <Header>
        <CartTextButton />
      </Header>
      <Layout>
        <Outlet />
      </Layout>
    </RecoilRoot>
  );
};

export default App;

const Layout = styled.div`
  display: flex;
  justify-content: center;

  padding: 64px 0px;

  width: 100%;
`;
