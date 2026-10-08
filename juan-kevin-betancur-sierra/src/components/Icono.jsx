import {
  ArrowRight,
  BarChart3,
  Book,
  BookMarked,
  BookOpen,
  Box,
  Calendar,
  Clock,
  FileText,
  Grid,
  Home,
  Landmark,
  Layers,
  LayoutGrid,
  Mail,
  MapPin,
  Moon,
  Phone,
  Search,
  Send,
  Sliders,
  Star,
  Tag,
  Type,
} from "lucide-react";

// Mapa nombre -> componente. Los nombres coinciden con los que usaba
// data-lucide en la versión Vanilla (y con el campo `icono` del mock de datos).
const ICONOS = {
  "arrow-right": ArrowRight,
  "bar-chart-3": BarChart3,
  book: Book,
  "book-marked": BookMarked,
  "book-open": BookOpen,
  box: Box,
  calendar: Calendar,
  clock: Clock,
  "file-text": FileText,
  grid: Grid,
  home: Home,
  landmark: Landmark,
  layers: Layers,
  "layout-grid": LayoutGrid,
  mail: Mail,
  "map-pin": MapPin,
  moon: Moon,
  phone: Phone,
  search: Search,
  send: Send,
  sliders: Sliders,
  star: Star,
  tag: Tag,
  type: Type,
};

function Icono({ nombre, className }) {
  const Componente = ICONOS[nombre];
  if (!Componente) return null;
  return <Componente className={className} />;
}

export default Icono;
