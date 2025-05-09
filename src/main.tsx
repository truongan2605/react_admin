import React from 'react';
import ReactDOM from 'react-dom/client';
import { Admin, Resource } from 'react-admin';
import { BrowserRouter } from 'react-router-dom';
import dataProvider from './dataProvider';
import { UserList } from './UserList';
import UserEdit from './UserEdit';
import UserCreate from './UserCreate';
import { ProductList } from './ProductList';
import ProductEdit from './ProductEdit';
import ProductCreate from './ProductCreate';
import Dashboard from './Dashboard';
import UserShow from './UserShow';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <BrowserRouter>

        <Admin
          dataProvider={dataProvider}
          dashboard={Dashboard}
        >
          <Resource
            name="users"
            list={UserList}
            edit={UserEdit}
            create={UserCreate}
            show={UserShow}
          />
          <Resource
            name="products"
            list={ProductList}
            edit={ProductEdit}
            create={ProductCreate}
          />
          
        </Admin>
      </BrowserRouter>
  </React.StrictMode>
  // test thử tí 2
);
