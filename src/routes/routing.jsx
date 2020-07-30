import Starter from '../views/starter/starter.jsx';
// ui components
import Alerts from '../views/ui-components/alert.jsx';
import Badges from '../views/ui-components/badge.jsx';

var ThemeRoutes = [
  { 
    path: '/dashboard', 
    name: 'Overview', 
    icon: 'ti-loop', 
    component: Starter 
  },
  {
    path: '/alert',
    name: 'Risk Assessment',
    icon: 'mdi mdi-comment-processing-outline',
    component: Alerts
  },
  {
    path: '/badge',
    name: 'Business Impact',
    icon: 'mdi mdi-arrange-send-backward',
    component: Badges
  },
  { path: '/', pathTo: '/dashboard', name: 'Dashboard', redirect: true }
];
export default ThemeRoutes;
