import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout ";

import AllQuotes from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuote";
import NotFound from "./pages/NotFound ";
import QuoteDetail from "./pages/QuoteDetail";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllQuotes />} exact />
        <Route path="/quotes" element={<AllQuotes />} exact />
        <Route path="/quotes/:quoteId" element={<QuoteDetail />} exact />
        <Route path="/new-quote" element={<NewQuote />} exact />
        <Route path="*" element={<NotFound/>} exact />
      </Routes>
    </Layout>
  );
};

export default App;
