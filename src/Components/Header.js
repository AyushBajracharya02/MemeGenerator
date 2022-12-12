import '../Styles/Header.css';
import trollface from '../Images/troll-face-meme-png.png';

export default function Header({props}) {
    return (
        <header>
            <img src={trollface} alt='trollface' />
            <span>Meme Generator</span>
        </header>
    )
}