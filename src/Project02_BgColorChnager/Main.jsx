import React, { useState } from 'react';
import "./css/brchanger.css";


function Main() {
    let [BgColor, SetBgColor] = useState('white')
    return (
        <>
            <section className="Contaienr" style={{ backgroundColor: BgColor }}>
                <h1>Welcome to Background Chnager With React</h1>
                <div className="btn_box">
                    <button type="button" className='btn' onClick={() => { SetBgColor('red') }} style={{ backgroundColor: "red" }}>RED</button>
                    <button type="button" className='btn' onClick={() => { SetBgColor('green') }} style={{ backgroundColor: "green" }}>GREEN</button>
                    <button type="button" className='btn' onClick={() => { SetBgColor('orange') }} style={{ backgroundColor: "orange" }}>ORANGE</button>
                    <button type="button" className='btn' onClick={() => { SetBgColor('pink') }} style={{ backgroundColor: "pink" }}>PINK</button>
                    <button type="button" className='btn' onClick={() => { SetBgColor('yellow') }} style={{ backgroundColor: "yellow" }}>YELLOW</button>
                    <button type="button" className='btn' onClick={() => { SetBgColor('blond') }} style={{ backgroundColor: "blod" }}>BLOD</button>
                    <button type="button" className='btn' onClick={() => { SetBgColor('black') }} style={{ backgroundColor: "black" }}>BLACK</button>
                </div>
            </section>
        </>
    )
}

export default Main
