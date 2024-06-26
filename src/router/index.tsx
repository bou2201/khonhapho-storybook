import { ADMIN_ROUTE } from '@/constants/menu';
import { Consignment, Management, Referral, SettingCompany, Users } from '@/pages/Admin';
import { AreaRange, DataConsignment, LegalStatus, PriceRange } from '@/pages/Admin/Data';
import { ForgotPassword, Login, SignUp } from '@/pages/Auth';
import { Home, Urgently, Warehouse } from '@/pages/Dashboard';
import { CompanyPage } from '@/pages/Dashboard/Company';

import {
  FeedAll,
  FeedBranch,
  FeedDeal,
  FeedDepartment,
  FeedGroup,
  FeedRegulation,
} from '@/pages/Dashboard/Feeds';

import {
  LibraryAssistant,
  LibraryKnowledge,
  LibraryManager,
  LibraryOwner,
  LibraryShareSkills,
} from '@/pages/Dashboard/Library';
import {
  StocksAppointment,
  StocksConsignment,
  StocksNovendors,
  StocksOwn,
  StocksReview,
} from '@/pages/Dashboard/Stocks';
import {
  UserAppointment,
  UserCollection,
  UserCustomers,
  UserProfile,
  UserReview,
} from '@/pages/Dashboard/User';
import WarehouseForm from '@/pages/Dashboard/Warehouse/Form';
import { AdminLayout, AuthLayout, NoAuthLayout } from '@/pages/Layout';
import { MessagePage } from '@/pages/Message';
import { RouteObject, createBrowserRouter } from 'react-router-dom';

const noAuthRoutes: RouteObject[] = [
  {
    element: <NoAuthLayout />,
    children: [
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'sign-up',
        element: <SignUp />,
      },
      {
        path: 'forgot-password',
        element: <ForgotPassword />,
      },
    ],
  },
];

const authRoutes: RouteObject[] = [
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'warehouse',
        children: [
          {
            index: true,
            element: <Warehouse />,
          },
          {
            path: 'add',
            element: <WarehouseForm />,
          },
        ],
      },
      {
        path: 'urgently',
        element: <Urgently />,
      },
      {
        path: 'library',
        children: [
          {
            path: 'knowledge',
            element: <LibraryKnowledge />,
          },
          {
            path: 'share-skills',
            element: <LibraryShareSkills />,
          },
          {
            path: 'manager',
            element: <LibraryManager />,
          },
          {
            path: 'owner',
            element: <LibraryOwner />,
          },
          {
            path: 'assistant',
            element: <LibraryAssistant />,
          },
        ],
      },
      {
        path: 'user',
        children: [
          {
            index: true,
            element: <Warehouse />,
          },
          {
            path: 'customers',
            element: <UserCustomers />,
          },
          {
            path: ':id',
            element: <UserProfile />,
          },
          {
            path: 'collection',
            element: <UserCollection />,
          },
          {
            path: 'appointment',
            element: <UserAppointment />,
          },
          {
            path: 'review',
            element: <UserReview />,
          },
        ],
      },
      {
        path: 'stocks',
        children: [
          {
            path: 'own',
            element: <StocksOwn />,
          },
          {
            path: 'consignment',
            element: <StocksConsignment />,
          },
          {
            path: 'novendors',
            element: <StocksNovendors />,
          },
          {
            path: 'appointment',
            element: <StocksAppointment />,
          },
          {
            path: 'review',
            element: <StocksReview />,
          },
          {
            path: 'feeds',
            children: [
              {
                index: true,
                element: <></>,
              },
              {
                path: 'deal',
                element: <FeedDeal />,
              },
              {
                path: 'all',
                element: <FeedAll />,
              },
              {
                path: 'branch',
                element: <FeedBranch />,
              },
              {
                path: 'department',
                element: <FeedDepartment />,
              },
              {
                path: 'group',
                element: <FeedGroup />,
              },
            ],
          },
        ],
      },
      {
        path: 'feeds',
        children: [
          {
            index: true,
            element: <></>,
          },
          {
            path: 'deal',
            element: <FeedDeal />,
          },
          {
            path: 'all',
            element: <FeedAll />,
          },
          {
            path: 'branch',
            element: <FeedBranch />,
          },
          {
            path: 'department',
            element: <FeedDepartment />,
          },
          {
            path: 'group',
            element: <FeedGroup />,
          },
          {
            path: 'regulation',
            element: <FeedRegulation />,
          },
        ],
      },
      {
        path: 'message',
        element: <MessagePage />,
      },
      {
        path: 'company',
        element: <CompanyPage />,
      },
    ],
  },
];

const adminRoutes: RouteObject[] = [
  {
    element: <AdminLayout />,
    path: ADMIN_ROUTE,
    children: [
      {
        path: '',
        element: <Management />,
      },
      {
        path: 'company-setting',
        element: <SettingCompany />,
      },
      {
        path: 'consignment',
        element: <Consignment />,
      },
      {
        path: 'referral',
        element: <Referral />,
      },
      {
        path: 'users',
        element: <Users />,
      },
      {
        path: 'data',
        children: [
          {
            index: true,
            element: <></>,
          },
          {
            path: 'legal-status',
            element: <LegalStatus />,
          },
          {
            path: 'price-range',
            element: <PriceRange />,
          },
          {
            path: 'area-range',
            element: <AreaRange />,
          },
          {
            path: 'sale-status',
            element: <>Trạng thái mua bán</>,
          },
          {
            path: 'contract-type',
            element: <>Loại hợp đồng</>,
          },
          {
            path: 'property-type',
            element: <>Loại hình BĐS</>,
          },
          {
            path: 'purposes',
            element: <>Mục đích sử dụng</>,
          },
          {
            path: 'property-feature',
            element: <>Đặc điểm BĐS</>,
          },
          {
            path: 'project',
            element: <>Dự án</>,
          },
          {
            path: 'cities',
            element: <>TỈnh / thành phố</>,
          },
          {
            path: 'districts',
            element: <>Quận/huyệnn</>,
          },
          {
            path: 'streets',
            element: <>Đường</>,
          },
          {
            path: 'consignment',
            element: <DataConsignment />,
          },
        ],
      },
    ],
  },
];

export const router = createBrowserRouter([...noAuthRoutes, ...authRoutes, ...adminRoutes]);
