import Header from "./components/Header";
import Card from "./components/Card";

import data from "./data";
import "./App.css";

function App() {
    const cards = data.map((item) => {
        return (
            <Card
                title={item.title}
                location={item.location}
                googleMapsUrl={item.googleMapsUrl}
                startDate={item.startDate}
                endDate={item.endDate}
                description={item.description}
                imageUrl={item.imageUrl}
            />
        );
    });

    return (
        <div className="App">
            <Header />
            <div className="cards">{cards}</div>
        </div>
    );
}

export default App;
