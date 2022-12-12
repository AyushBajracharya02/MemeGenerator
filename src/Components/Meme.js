import '../Styles/Meme.css';

export default function Meme({meme}) {
    return (
        <div className="meme">
            <img src={meme.image} alt="memeimage" />
            <div className="text">
                <span className="top-text">
                    {meme.toptext}
                </span>
                <span className="bottom-text">
                    {meme.bottomtext}
                </span>
            </div>
        </div>
    )
}