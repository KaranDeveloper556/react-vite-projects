import React, { useCallback, useEffect, useRef, useState } from 'react';
import "./css/main.css";


function Passward_generator() {
    // Variable Required
    let [ActualLength, SetActualLength] = useState(8);
    let [NumberCheck, SetNumberCheck] = useState(false);
    let [SpecialChrac, SetSpecialChrac] = useState(false);
    let [Passward, SetPassward] = useState("");

    //Hooks 
    let Passward_Coping_hook = useRef(null);
    let Passward_generator_Classback = useCallback(() => {
        let Returing_passward = ''
        let Number = "0123456789";
        let SpecialWords = `!"#$%&'()*+,-./:;<=>?@[]^_{|}~`
        let StringUseing = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (NumberCheck == true) { StringUseing += Number };
        if (SpecialChrac == true) { StringUseing += SpecialWords };
        for (let index = 1; index <= ActualLength; index++) {
            let RandomNumebr = Math.floor(Math.random() * StringUseing.length)
            Returing_passward += StringUseing[RandomNumebr];
        }
        return SetPassward(Returing_passward)
    }, [ActualLength, NumberCheck, SpecialChrac, SetPassward]);

    let CopyingPassward = useCallback(
        () => {
            Passward_Coping_hook.current?.select();
            window.navigator.clipboard.writeText(Passward);
        }
    );

    useEffect(() => {
        Passward_generator_Classback()
    }, [ActualLength, NumberCheck, SpecialChrac, SetPassward]);

    return (
        <>
            <section className="Passward_generator_sec">
                <div className="Generator_container">
                    <h1>Passward generater</h1>
                    <div className="input_copyBtn">
                        <input type="text" placeholder='Passward' id='input_pass' readOnly className='input' value={Passward} ref={Passward_Coping_hook} />
                        <button id='copy_btn' className='btn' onClick={CopyingPassward()}>COPY</button>
                    </div>
                    <div className="other">
                        <input type="range" name="Length" id="generator" min={6} max={20} value={ActualLength} onChange={(e) => { SetActualLength(e.target.value) }} />
                        <label htmlFor="generator">Length({ActualLength})</label>
                        <br />
                        <label htmlFor="Number_checkbox">Number</label>
                        <input type="checkbox" name="Number" value="Number" id="Number_checkbox" className='checkbox' onClick={() => { SetNumberCheck(!NumberCheck) }} />
                        <br />
                        <label htmlFor="Special_charac__checkbox">Special Numeber</label>
                        <input type="checkbox" name="Special_chracters" value="Special chracters" id="Special_charac__checkbox" className='checkbox' onClick={() => { SetSpecialChrac(!SpecialChrac) }} />
                    </div>
                </div>
            </section>
        </>
    )

}
export default Passward_generator
