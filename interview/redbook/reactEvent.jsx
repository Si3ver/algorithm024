import { useRef } from "react"

export function App() {
    const ref = useRef(null);

    document.addEventListener('click', (e) => {
        console.log('document click', e);
    });

    ref.addEventListener('click', (e) => {
        console.log('ref dom click', e);
    });

    return <div>
        <div onClick={(e) => {console.log('react event click', e)}} ref={ref} />
    </div>
}

// react 合成事件有什么好处
