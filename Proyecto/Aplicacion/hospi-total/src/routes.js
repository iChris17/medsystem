// @material-ui/icons
import HomeSharp from "@material-ui/icons/HomeSharp";
import CalendaToday from '@material-ui/icons/CalendarToday';
// core components/views for Admin layout
import Home from './views/home';
import Citas from './views/citas';

const dashboardRoutes = [
  {
    path: "/home",
    name: "Inicio",
    rtlName: "لوحة القيادة",
    icon: HomeSharp,
    component: Home,
    layout: "/medsystem"
  },
  {
    path: "/citas",
    name: "Citas",
    rtlName: "لوحة القيادة",
    icon: CalendaToday,
    component: Citas,
    layout: "/medsystem"
  }
];

export default dashboardRoutes;
