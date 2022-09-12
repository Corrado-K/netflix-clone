import Header from "../components/Header";
import NavBar from "../components/Navbar";
import Row from "../components/Row";
import '../index.css';
const Home = () => {
    return ( 
        <>
            <div className="bg-[#111]">
                <NavBar />
                <Header />
                {/* <Row title="Action" /> */}
                {/* <Row title="Sci-fi" />
                <Row title="Horror" />
                <Row title="Romance" /> */}

                <Row title="Netflix Originals" movieType="netflix-originals" />
                <Row title="Trending Now" movieType="trending-now" />
                <Row title="Top Rated" movieType="top-rated" />
                <Row title="Action Movies" movieType="action-movies" />
                <Row title="Horror Movies" movieType="horror-movies" />
                <Row title="Romance Movies" movieType="romance-movies" />
                <Row title="Documentaries Movies" movieType="documentaries-movies" />
            </div>
        </>
     );
}
 
export default Home;