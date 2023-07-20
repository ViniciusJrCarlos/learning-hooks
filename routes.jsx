import {BrowserRouter, Routes, Route, HashRouter} from 'react-router-dom';
import {HomePage} from './src/pagges/homePage';
import { UseStatePage } from './src/pagges/useStatePage';
import { UseEffectPage } from './src/pagges/useEffectPage';
import { UseCallbackPage } from './src/pagges/useCallback';
import { UseMemoPage } from "./src/pagges/useMemoPage";
import { UseRefPage } from "./src/pagges/useRef";
import {UserContextProvider} from './src/contexts/userContext';
 


export const AppRoutes = () => {


    return (
        <HashRouter>
                <UserContextProvider>
                    <Routes>
                        <Route path="/homePage" element={<HomePage />} />
                        <Route path="/useState" element={<UseStatePage />} />
                        <Route path="/useEffect" element={<UseEffectPage />} />
                        <Route path="/useCallback" element={<UseCallbackPage />} />
                        <Route path="/useMemo" element={<UseMemoPage />} />
                        <Route path="/useRef" element={<UseRefPage />} />
                    </Routes>
                </UserContextProvider>
        </HashRouter>
      
     )

}

//export default AppRoutes;