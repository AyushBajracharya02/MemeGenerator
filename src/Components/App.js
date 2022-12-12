import '../Styles/App.css';
import Header from './Header';
import Main from './Main';

export default function App({props}) {
    return (
        <div className="meme-generator">
            <Header />
            <Main />
        </div>
    )
}