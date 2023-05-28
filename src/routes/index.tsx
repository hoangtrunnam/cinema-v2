import { IRouteType } from '../components/Types';
import Contact from '../pages/testRouter/Contact';
import Home from '../pages/testRouter/Home';
import News from '../pages/testRouter/News';

export const publicRoutes: IRouteType[] = [
  { path: '', component: Home },
  { path: '/contact', component: Contact },
  { path: '/news', component: News, layout: null },
];
export const privateRoutes = [];
