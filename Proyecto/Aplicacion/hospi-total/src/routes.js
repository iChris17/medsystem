// @material-ui/icons
import HomeSharp from "@material-ui/icons/HomeSharp";
import CalendaToday from '@material-ui/icons/CalendarToday';
// core components/views for Admin layout
import Home from './views/home';
import Citas from './views/citas';
import Pacientes from './views/PacienteComponente';
import PersonIcon from '@material-ui/icons/Person';

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
    path:"/pacient",
    name:"Pacientes",
    rtlName:"لوحة القيادة",
    icon:PersonIcon,
    component:Pacientes,
    layout:"/medsystem"
  }
];

export default dashboardRoutes;
