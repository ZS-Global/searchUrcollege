
import './App.css';
import Contact from './component/contact/Contact';
import FeaturedArticles from './component/featuredarticles/Featuredarticles';
import Footer from './component/footer/Footer';

import Header from './component/header/Header';
import Home from './component/home/Home';
import Navigation from './component/navigation/Navigation';
import QuickLink from './component/quick_link/Quick_link';
import TopBoards from './component/topboards/Topboards';
import TopCollections from './component/topcollection/Topcollections';
import TopExams from './component/topexams/Topexams';
import TrendingColleges from './component/trendingcolleges/Trendingcolleges';
import TrendingCourses from './component/trendingcourses/Trendingcourses';
import Bot from './bot/Chatbot'

function App() {
  return (
    <>
    <Header/>
    <Home/>    
    <Bot />
    <Navigation /> 
    <TopCollections />
    <TopBoards />
    <TrendingCourses />
    <QuickLink />
    <TrendingColleges />
    <FeaturedArticles />
    <TopExams />
    <Contact />
    <Footer />
    </>
  );
}

export default App;
