import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { HomePage, About,GalleryPage,TeamsPage, EventPage, ProjectPage } from "../pages"
import Team_2023_24 from "../pages/Team_2023_24"
import ScrollToTop from '../hooks/useScrollToTop';
import ErrorBoundary from '../components/ErrorBoundary';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import REDetails from "../components/EventPageComponents/RecentEvent/REDetails";
import PEDetails from "../components/EventPageComponents/InfoCard/PEDetails";

const index = () => {

    const routes = [
        {
            path: "/",
            element: <HomePage />,
        },
        {
            path: "/about",
            element: <About />
        },
        {
            path: "*",
            element: <h1>Not Found</h1>
        },
        {
            path: "/gallery",
            element: <GalleryPage />
        },
        {
            path: "/teams",
            element: <TeamsPage year = {"2024-25"}/>
        },
        {
            path: "/teams2023_2024",
            element: <TeamsPage year = {"2023-24"}/>
        },
        {
            path: "/events",
            element: <EventPage />
        },
        {
            path: "/projects",
            element: <ProjectPage />
        },
        {
            path: "/redetails/:cardId",
            element:<REDetails/>
        },
        {
            path: "/pedetails/:cardId",
            element:<PEDetails/>
        }


    ]



    return (
        <Router>
            <ErrorBoundary>
                <ScrollToTop />
                <NavBar />
                <Routes>
                    {routes.map((route, idx) =>
                        <Route
                            key={idx}
                            path={route.path}
                            element={route.element}
                        />
                    )}
                </Routes>
                <Footer />
            </ErrorBoundary>
        </Router>
    )
}

export default index