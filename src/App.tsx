import Nav from './components/Nav';
import Header from './components/Header';
import Card from './components/Card';
import db from './db';
import {cardType} from './types';

function App() {

    return (
        <>
            <Nav/>
            <div className="max-w-5xl mx-auto place-items-center mb-3 grid gap-1 grid-cols-2 px-1">
                <Header/>
                {db.map((card: cardType) => (
                    <div className="w-full p-1 transition xl:hover:scale-[1.02]" key={card.title}>
                        <Card {...card} />
                    </div>
                ))}
            </div>
        </>
    )
}

export default App
