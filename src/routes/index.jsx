import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../hooks/auth";

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export function Routes() {
   const { user } = useAuth();

   return (
      <BrowserRouter
         future={{
            v7_relativeSplatPath: true,
            v7_startTransition: true, // Adiciona a flag sugerida para evitar o aviso
         }}
      >
         {user ? <AppRoutes /> : <AuthRoutes />}
      </BrowserRouter>
   );
}
