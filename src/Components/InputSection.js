import image from '../Images/image-solid.svg';
import '../Styles/InputSection.css';

export default function InputSection({toptext, bottomtext, handleChange}) {
    return (
        <div className="input-section">
            <input type="text" placeholder="Top Text" value={toptext} name="toptext" onChange={handleChange}/>
            <input type="text" placeholder="Bottom Text" value={bottomtext} name="bottomtext" onChange={handleChange}/>
            <button name="image" onClick={handleChange}>Get a new meme image<img src={image} alt="imagelogo" /></button>
        </div>
    )
}