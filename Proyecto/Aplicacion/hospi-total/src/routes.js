// @material-ui/icons
import HomeSharp from "@material-ui/icons/HomeSharp";
import CalendaToday from '@material-ui/icons/CalendarToday';
import PeopleIcon from '@material-ui/icons/People';
import HotelIcon from '@material-ui/icons/Hotel';
// core components/views for Admin layout
import Home from './views/home';
import Citas from './views/citas';
import Personal from './views/personal';
import Consultorio from './views/consultorio';

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
  },
  {
    path: "/personal",
    name: "Personal",
    rtlName: "لوحة القيادة",
    icon: PeopleIcon,
    component: Personal,
    layout: "/medsystem"
  },
  {
    path: "/consultorio",
    name: "Consultorios",
    rtlName: "لوحة القيادة",
    icon: HotelIcon,
    component: Consultorio,
    layout: "/medsystem"
  }
];

export default dashboardRoutes;
