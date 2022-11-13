import './Meme.css';


const Meme = () => {
  return (
    <main>
        <form>
            <input type='text' placeholder='Top text' className='form--input' />
            <input type='text' placeholder='Bottom text' className='form--input' />
            <button className='form--button'>Get a new meme image 🖼️</button>
        </form>
    </main>
  )
}

export default Meme;
