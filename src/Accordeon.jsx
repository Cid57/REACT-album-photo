import { useState } from "react";


export default function Accordeon() {
    const [show, setShow] = useState(true);


    return (
        <div>
            <div>
                <div>
                    <input
                        type="checkbox"
                        checked={show}
                        onChange={() => setShow(!show)}
                    />
                    <span>Show?</span>
                </div>
                <button onClick={() => setShow(true)}>Show</button>
                <button onClick={() => setShow(false)}>Hide</button>
            </div>
            {show && (
                <div>
                    Lorem ipsum....
                </div>
            )}
        </div>
    )
}
