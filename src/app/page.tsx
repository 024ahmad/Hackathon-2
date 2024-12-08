import { Roboto } from 'next/font/google';
import {Poppins} from 'next/font/google';
import {Inter} from 'next/font/google';
import Header from './components/Header';
import Footer from "./components/footer"
import Hero from './components/hero';

// import Cards from './components/Card';
// import Image1 from "./pics/Image1.png"
// import Image2 from "./pics/Image2.png"


const roboto = Roboto({
  subsets: ['latin'], 
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['normal', 'italic']
})

const poppins = Poppins({
  subsets: ['latin'], 
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['normal', 'italic']
});

const inter = Inter({
  subsets: ['latin'], 
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['normal', 'italic']
});


export default function Home () {
  return (
    // h-[5925.36px]
    // h-auto
      <div className='w-[1440px] h-[5925.36px] bg-[#F5F5F5]  text-[#111111]  absolute top-10 left-10'>
        <Header />

        <Footer />

        <Hero />
    </div>
  )
}










// const cardArray = [
//   {
//     id : '1',
//     parentSyle : "absolute left-[48px]",
//     imageSrc : Image1 ,
//     textBoxStyle : "absolute top-[462.36px] ",
//     para : "₹ 13 995"
//    },
//   {
//     id : '2',
//     parentSyle : "absolute left-[501px]",
//     imageSrc : Image1,
//     textBoxStyle : 'absolute top-[462.36px]' ,
//     para : "₹ 13 995"
//    },
//   {
//     id : '3',
//     parentSyle : "absolute left-[954px]",
//     imageSrc : Image2,
//     textBoxStyle : 'absolute top-[462.36px]' ,
//     para : "₹ 16 995"
//    },
// ]


// export default function Home () {
//   return (
//     <div className='w-[1440px] h-[540px] absolute top-10 left-10 border-[2px] border-black'>
//       {cardArray.map ((elem) => {
//         return (
//         <Cards 
//           key={elem.id}
//           parentSyle={elem.parentSyle}
//           imageSrc={elem.imageSrc}
//           textBoxStyle={elem.textBoxStyle}
//           para={elem.para}
//         />
//       )
//       })}
      

//     </div>
    
//   )
// }