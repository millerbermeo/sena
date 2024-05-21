import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, StickyNote, CircleUserRound, Trash2, ArrowLeftRight, Calendar, Settings } from "lucide-react";
import Sidebar, { SidebarItem } from "./components/Sidebar";
import { LoginPage } from './pages/LoginPage';
import { ProtectedRoute } from './configs/ProtectedRoute';
import { Navbar2 } from './components/Navbar';



// Lazy load the pages
const HomePage = lazy(() => import('./pages/HomePage'));
const ResiduosPage = lazy(() => import('./pages/ResiduosPage'));
const MovimientosPage = lazy(() => import('./pages/MovimientosPage'));
const ActividadesPage = lazy(() => import('./pages/ActividadesPage'));
const UsuariosPage = lazy(() => import('./pages/UsuariosPage'));
const ElementosPage = lazy(() => import('./pages/ElementosPage'));

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={
          <ProtectedRoute>
            <WithSidebar>
              <Suspense fallback={<div>Loading...</div>}>
                <HomePage />
              </Suspense>
            </WithSidebar>
          </ProtectedRoute>
        } />
        <Route path="/residuos" element={
          <ProtectedRoute>
            <WithSidebar>
              <Suspense fallback={<div>Loading...</div>}>
                <ResiduosPage />
              </Suspense>
            </WithSidebar>
          </ProtectedRoute>
        } />
        <Route path="/movimientos" element={
          <ProtectedRoute>
            <WithSidebar>
              <Suspense fallback={<div>Loading...</div>}>
                <MovimientosPage />
              </Suspense>
            </WithSidebar>
          </ProtectedRoute>
        } />
        <Route path="/actividades" element={
          <ProtectedRoute>
            <WithSidebar>
              <Suspense fallback={<div>Loading...</div>}>
                <ActividadesPage />
              </Suspense>
            </WithSidebar>
          </ProtectedRoute>
        } />
        <Route path="/usuarios" element={
          <ProtectedRoute>
            <WithSidebar>
              <Suspense fallback={<div>Loading...</div>}>
                <UsuariosPage />
              </Suspense>
            </WithSidebar>
          </ProtectedRoute>
        } />
        <Route path="/elementos" element={
          <ProtectedRoute>
            <WithSidebar>
              <Suspense fallback={<div>Loading...</div>}>
                <ElementosPage />
              </Suspense>
            </WithSidebar>
          </ProtectedRoute>
        } />
      </Routes>
    </BrowserRouter>
  );
};

const WithSidebar = ({ children }) => (
  <div className="flex">
    <Sidebar>

      <SidebarItem nav="/home" icon={<Home size={20} />} text="Home" />
      <SidebarItem nav="/movimientos" icon={<ArrowLeftRight size={20} />} text="Movimientos" />
      <SidebarItem nav="/elementos" icon={<Settings size={20} />} text="Elementos"/>
      {/* <SidebarItem nav="/categorias" icon={<Calendar size={20} />} text="Categorias"/> */}
      <SidebarItem nav="/usuarios" icon={<CircleUserRound size={20} />} text="Usuarios" />
      {/* <SidebarItem nav="/centros" icon={<Settings size={20} />} text="Centros"/>
      <SidebarItem nav="/sedes" icon={<Settings size={20} />} text="Sedes"/>
      <SidebarItem nav="/sitios" icon={<Settings size={20} />} text="Sitios"/>
      <SidebarItem nav="/tipo_sitios" icon={<Settings size={20} />} text="Tipos Sitios"/>
      <SidebarItem nav="/areas" icon={<Settings size={20} />} text="Areas"/>
      <SidebarItem nav="/programas" icon={<Settings size={20} />} text="Programas"/>
      <SidebarItem nav="/fichas" icon={<Settings size={20} />} text="Fichas"/>
      <SidebarItem nav="/reportes" icon={<Settings size={20} />} text="Reportes"/> */}
    </Sidebar>


<div className='w-full bg-white'>
  <Navbar2/>
{children}
</div>
  </div>
);
