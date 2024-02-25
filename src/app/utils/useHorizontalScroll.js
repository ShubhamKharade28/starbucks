import { useRef, useEffect } from 'react';

export function useHorinzontalScroll() {
    const elRef = useRef();
    useEffect(() => {
        const el = elRef.current;
        if(el){
            const onWheel = e => {
                if(e.deltaY == 0) return;
                e.preventDefault();
                el.scrollTo({
                    left: el.scrollLeft + 2*e.deltaY,
                    behaviour: "smooth",
                });
            };
            el.addEventListener("wheel", onWheel);
            return () => el.removeEventListener("wheel", onWheel);
        }
    },[])
    return elRef;
}