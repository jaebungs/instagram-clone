// import React, {useEffect, useRef} from 'react'

// const Intersection = () => {
//     const testContainer = useRef(null);
//     const boxContainer = useRef(null);

//     let options = {
//         root: null,
//         rootMargin: '0px',
//       threshold: 0.5
//     }
//     const callback = (entries, observer) => {
//         entries.forEach(e => {
//          console.log(testContainer.current)

//             console.log(e.isIntersecting, e, observer)
//         })
//       console.log('testing intersection')
//   }
//     useEffect(() => {
  
//       let observer = new IntersectionObserver(callback, options);
//       console.log(boxContainer, boxContainer.current)
//       if(testContainer.current) {
            
//         observer.observe(testContainer.current);
//       }
  
//       return () => {
//         if(testContainer.current) {
//           observer.unobserve(testContainer.current)
//         }
//       }
      
//     }, [testContainer, options])
  

//     return (
//         <div className="flex" ref={testContainer}>
//             <div className="box" ></div>
//             <div className="box"></div>
//             <div className="box"></div>
//             <div className="box"></div>
//             <div className="box"></div>
//             <div className="box"ref={boxContainer}></div>
//             <div className="box"></div>
//             <div className="box"></div>
//             <div className="box"></div>
//             <div className="box"></div>
//             <div className="box"></div>
//             <div className="box"></div>

//         </div>
//     )
// }

// export default Intersection
