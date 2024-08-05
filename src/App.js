import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRouter } from '~/routes';
import { Fragment } from 'react';
import { DefaultLayout } from '~/components/Layout';
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRouter.map((route, index) => {
                        let Layout = DefaultLayout;
                        Layout = route.layout ?? Fragment;
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            ></Route>
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
