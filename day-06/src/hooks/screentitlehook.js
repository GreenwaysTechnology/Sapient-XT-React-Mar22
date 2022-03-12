import { useEffect, useState } from 'react';
//hook is just function , not component
//    //feature-1 update Screen title
//const [screen, setScreen] = useState('Customer Manager App')

function useWindowTitle(title = '') {
    const [screen, setScreen] = useState(title)
    //initalize new screen
    useEffect(() => {
        document.title = screen
    })
    //return screen and setScren
    return { screen, setScreen }
}

export { useWindowTitle };