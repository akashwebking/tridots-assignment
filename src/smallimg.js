import React from 'react'
import './smallimg.css'

const Smallimg = () => {
  return (
    <div className='smallimg'>
        <div className='smimg'>
            <img src="https://i.pinimg.com/originals/b4/b0/c0/b4b0c03be954f9250c30aa3763e2efb9.jpg" alt="img 1" />
            <div className='inner'>
            <h4 className='inhed'>Hotspot</h4>
            <h4 className='innerhed'>Luxary Hostage: high most expansive high</h4>
            </div>
        </div>
        <div className='smimg'>
            <img src="https://img.etimg.com/thumb/width-640,height-480,imgsize-114280,resizemode-75,msid-98679983/news/how-to/whats-chat-gpt-4-everything-you-should-know-about-ai-that-not-only-answers-but-questions/microsoft-backed-openai-starts-release-of-powerful-ai-known-as-gpt-4.jpg" alt="img 2" />
            <div className='inner'>
            <h4 className='inhed'>AI</h4>
            <h4 className='innerhed'>5 way to leverage the power of ChatGpt in retail</h4>
            </div>
        </div>
        <div className='smimg'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Supermarket_full_of_goods.jpg/220px-Supermarket_full_of_goods.jpg" alt="img 3" />
            <div className='inner'>
            <h4 className='inhed'>Shipping</h4>
            <h4 className='innerhed'>Relaince to open 250 Azorte store in 2-3 Years</h4>
            </div>
        </div>
    </div>
  )
}

export default Smallimg