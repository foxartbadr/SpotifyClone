import React, { useRef , useEffect , useState} from 'react'
import Playlists from './Playlists'

const Categories = () => {
    const [limiter, setLimiter] = useState(0)
    const mainInnerRef = useRef()
    const dataCategories = [
        {
            id:1,
            name:'Focus',
            tagline: 'Music to help you concentrate'
        },
        {
            id:2,
            name:'Mood',
            tagline: 'Playlist to match your mood'
        },
        {
            id:3,
            name:'Soundtrack your home',
            tagline: ''
        },
        {
            id:4,
            name:'Kick back this Sunday...',
        },
    ]

    useEffect(() => {
        //function
        const handleWindowResize = () => {
            //calculation
            const calculation = Math.floor
            (mainInnerRef.current.getBoundingClientRect().width / 195)
            setLimiter(calculation)
        }

        handleWindowResize()

        //assign event listener
        window.addEventListener('resize', handleWindowResize)

        // remove event
        return () => window.removeEventListener('resize', handleWindowResize)
    }, [])

    return (
        <div className="mainInner" ref={mainInnerRef}>
            {dataCategories.map((category, id) => (

                     <div className="cardsWrap" key={id}>
                        <h2>{category.name}</h2>
                        {/* <span className="seeALL">SEE ALL</span> */}
                        <p className="subText">Music to help you to concentrate.</p>
                        <Playlists category_id={category.id} limiter={limiter}/>
                      </div>

            ))}


        </div>
   
    )
}

export default Categories;
