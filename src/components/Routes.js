import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
// import ProfilePage from './pages/ProfilePage';
import TablesPage from './pages/TablesPage';
// import MapsPage from './pages/MapsPage';
// import NotFoundPage from './pages/NotFoundPage';

import ProductPage from './pages/Product/ProductPage';
import PurchasePage from './pages/Purchase/PurchasePage';
import SalePage from './pages/Sale/SalePage';
import ExpensePage from './pages/Expense/ExpensePage';
import QuotationPage from './pages/Quotation/QuotationPage';
import TransferPage from './pages/Transfer/TransferPage';
import ReturnPage from './pages/Return/ReturnPage';
import AccountingPage from './pages/Accounting/AccountingPage';
import HRMPage from './pages/HRM/HRMPage';
import PeoplePage from './pages/People/PeoplePage';
import UsersPage from './pages/Settings/Users/UsersPage';
import RolesPage from './pages/Settings/RolesPage';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        {/* <Route path='/' exact component={DashboardPage} />
        <Route path='/dashboard' component={DashboardPage} />
        <Route path='/profile' component={ProfilePage} />
        <Route path='/tables' component={TablesPage} />
        <Route path='/maps' component={MapsPage} />
        <Route path='/404' component={NotFoundPage} /> */}


        <Route path='/' exact component={DashboardPage} />
        <Route path='/dashboard' component={DashboardPage} />
        <Route path='/product' component={ProductPage} />
        <Route path='/purchase' component={PurchasePage} />
        <Route path='/sale' component={SalePage} />
        <Route path='/expense' component={ExpensePage} />
        <Route path='/quotation' component={QuotationPage} />
        <Route path='/transfer' component={TransferPage} />
        <Route path='/return' component={ReturnPage} />
        <Route path='/accounting' component={AccountingPage} />
        <Route path='/hrm' component={HRMPage} />
        <Route path='/people' component={PeoplePage} />
        <Route path='/tables' component={TablesPage} />
        <Route path='/users' component={UsersPage} />
        <Route path='/roles' component={RolesPage} />


      </Switch>
    );
  }
}

export default Routes;
