import { Routes, Route, HashRouter} from 'react-router-dom';
//import {HomePage} from "./src/pagges/homePage";
import { HomePage } from "./homePage";
//import { HomePage } from "homePage";
//import {HomePage} from './src/pagges/homePage';
import { UseStatePage } from './useStatePage';
import { UseEffectPage } from './useEffectPage';
import { UseCallbackPage } from './useCallback';
import { UseMemoPage } from "./useMemoPage";
import { UseRefPage } from "./useRef";
//import {UserContextProvider} from './contexts/userContext';
 


export const AppRoutes = () => {


    return (
        <HashRouter>
            
                    <Routes>
                        <Route path="/home" element={<HomePage />} />
                        <Route path="/useState" element={<UseStatePage />} />
                        <Route path="/useEffect" element={<UseEffectPage />} />
                        <Route path="/useCallback" element={<UseCallbackPage />} />
                        <Route path="/useMemo" element={<UseMemoPage />} />
                        <Route path="/useRef" element={<UseRefPage />} />
                    </Routes>
               
        </HashRouter>
      
     )

}

//export default AppRoutes;