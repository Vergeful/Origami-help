import { createBrowserRouter } from "react-router-dom";
import LoginRegister from "../layout/LoginRegister";
import App from "../layout/App";
import { LoginPage } from "../../features/LoginPage";
import RegisterPage from "../../features/RegisterPage";
import Header from "../layout/Header";
import PosterHomePage from "../../features/poster/PosterHomePage";
import PosterNewModelPage from "../../features/poster/PosterNewModelPage";
import PosterRecentModelsPage from "../../features/poster/PosterRecentModelsPage";
import PosterViewModelPage from "../../features/poster/PosterViewModelPage";
import AdminHomePage from "../../features/admin/AdminHomePage";
import AdminVideoPage from "../../features/admin/AdminVideoPage";
import AdminVideosPage from "../../features/admin/AdminVideosPage";
import NotFoundPage from "../../features/NotFoundPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children : [
            {   path: '', 
                element: <LoginRegister />,
                children: [
                    {path: '', element: <LoginPage />},
                    {path: 'register', element: <RegisterPage />}
                ]
            },
            {   path: '',
                element: <Header />,
                children: [
                    {path: 'home', element: <PosterHomePage />},
                    {path: 'new-model', element: <PosterNewModelPage />},
                    {path: 'recent-models', element: <PosterRecentModelsPage />},
                    {path: 'model/:id', element: <PosterViewModelPage />},

                    {path: 'admin/',
                     children: [
                        {path: '', element: <AdminHomePage />},
                        {path: 'video/:id', element: <AdminVideoPage />},
                        {path: 'videos', element: <AdminVideosPage />},
                     ]  
                    }
                ]
            },
            {path: '*', element: <NotFoundPage />}
        ]
    }
])