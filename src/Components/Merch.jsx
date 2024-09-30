<<<<<<< HEAD
import { useState } from "react";
import "./Info.css";

const Merch = () => {
  // Estado para el término de búsqueda
  const [searchTerm, setSearchTerm] = useState("");
  
  const [isAscending, setIsAscending] = useState(true);

  // Lista completa de productos
  const merchItems = [
    {
      title: "SEASON GREETINGS 2022",
      items: [
        { name: "POB", price1: "10usd", price2: null },
        { name: "Photocard", price1: "5usd", price2: "2usd" },
        { name: "PC Unit", price1: "3.75usd", price2: "3usd" },
        { name: "Astrology Card", price1: "3usd", price2: null },
        { name: "Lenticular", price1: "8usd", price2: "13usd" },
        { name: "Wish pc", price1: "1usd", price2: null }
      ],
      images: [
        "https://external-preview.redd.it/RWs84NAj6sa05f4qqumVlfUPjQgR_SxB1FHg2FLAEAs.jpg?auto=webp&s=fcfa7c36df28adc9a3a85ed044a5616ea18c75af",
        "https://down-my.img.susercontent.com/file/f74b101720207439127d98d2320b2d84"
        
      ]
    },
    {
      title: "MYSTERIOUS MANSION",
      items: [
        { name: "POB", price1: "7usd", price2: "6usd" },
        { name: "Photocard", price1: "3usd", price2: "2usd" },
        { name: "Set por miembro (scary quote + pc + pola + Card)", price1: "7.5usd", price2: "5usd" }
      ],
      images: [
        "https://i.redd.it/y9hs89yft1j71.jpg",
        "https://preview.redd.it/mysterious-mansion-pcs-v0-a3f8i3nikj6c1.jpeg?width=576&format=pjpg&auto=webp&s=988f9e3012ad1959cf0035b6a7aa4733e648192b"
      ]
    },
    {
      title: "DREAMCATCHER MIND",
      items: [
        { name: "Photocard", price1: "3.75usd", price2: "2usd" },
        { name: "Set por miembro", price1: "13usd", price2: "10usd" }
      ],
      images: [
        "https://lightupk.com/cdn/shop/products/DREAMCATCHER-_DREAMCATCHERMIND_SpecialEdition_2VERSIONS_2.png?v=1649909873",
        "https://i.ebayimg.com/images/g/KRsAAOSwdAth8~U0/s-l400.jpg"
      ]
    },
    {
      title: "LOVECATCHER/LOVE STEALER",
      items: [
        { name: "Member set", price1: "10usd", price2: null },
        { name: "Photocard", price1: "3usd", price2: "2usd" },
        { name: "Lenticular", price1: "10usd", price2: "15usd" },
        { name: "Photobook", price1: "15usd", price2: "20usd" }
      ],
      images: [
        "https://pbs.twimg.com/media/FbqtVt9WYAA3hHN.jpg",
        "https://beadsofbullets.com/wp-content/uploads/2022/06/dreamcatcher-md-1024x682.jpg"
      ]
    },
    {
      title: "Pink Monster / Dream Kiss",
      items: [
        { name: "Photocard", price1: "5usd", price2: "7usd" },
        { name: "Photobook", price1: "10usd", price2: "15usd" }
      ],
      images: [
        "https://i.redd.it/dreamcatcher-official-merch-dream-kiss-ver-pink-monster-ver-v0-31o8hii4f9e91.jpg?width=3000&format=pjpg&auto=webp&s=838dda4fb25dc3d954ede303b983b8a216b4e5f2",
        "https://beadsofbullets.com/wp-content/uploads/2022/06/dreamcatcher-md-1024x682.jpg"
      ]
    },
    {
      title: "KHINOS cualquier era",
      items: [
        { name: "Khino", price1: "12usd", price2: null },
        { name: "Set por miembro", price1: "10usd", price2: "5usd" }
      ],
      images: [
        "https://media.karousell.com/media/photos/products/2021/8/20/dreamcatcher_kihno_album_1629435889_3fbaf9e9.jpg"
      ]
    },
    {
      title: "Merch conciertos",
      items: [
        { name: "Apocalypse mini concert pc", price1: "8usd", price2: null },
        { name: "Apocalypse halloween", price1: "6-8usd", price2: null },
        { name: "Apocalypse halloween LD", price1: "35usd", price2: null },
        { name: "Lucky cards 7 doors tours", price1: "5usd", price2: null },
        { name: "7 doors tours set (pc + tarot card+postal)", price1: "8usd", price2: null }
      ],
      images: []
    },
    {
      title: "SEASON GREETINGS 2023",
      items: [
        { name: "Set x miembro (pcs de ambos ssg + postcard + pc calendar + id)", price1: "7usd", price2: null },
        { name: "Outbox + desk calendar + diary", price1: "8usd", price2: null },
        { name: "Mini pb", price1: "5usd", price2: "8usd" },
        { name: "Mini L holder", price1: "1usd", price2: "5usd" },
        { name: "Set stickers", price1: "1usd", price2: "2usd" },
        { name: "Folder poster", price1: "1usd", price2: null }
      ],
      images: [
        "https://pbs.twimg.com/media/FmJhTRJXkAEupZJ?format=jpg&name=4096x4096",
        "https://m.media-amazon.com/images/I/619j7-0rABL.jpg"
      ]
    },
    {
      title: "REASON BOUTIQUE",
      items: [
        { name: "Trading Card", price1: "3usd", price2: "4usd" },
        { name: "Photocard", price1: null, price2: "6usd" },
        { name: "Pc + holder", price1: null, price2: "8usd" },
        { name: "Set x miembro (postcard + pc del holder)", price1: "6usd", price2: "5usd" }
      ],
      images: [
        "https://pbs.twimg.com/media/F4URpYJWEAEksi3?format=jpg&name=4096x4096"
      ]
    },
    {
      title: "DREAMQUEST",
      items: [
        { name: "Set por miembro (pc + postcard)", price1: "5usd", price2: "3.5usd" }
      ],
      images: [
        "https://pbs.twimg.com/media/F7Eb8QyXAAA0VYM?format=jpg&name=large",
        "https://d3tvwjfge35btc.cloudfront.net/Assets/45/810/L_p0198181045.jpg"
      ]
    },
    {
      title: "SEASON GREETINGS 2024",
      items: [
        { name: "Dear my youth set x miembro (pc + miniposter + bookmark + postal)", price1: "5usd", price2: "4usd" },
        { name: "Dream victory set x miembro (pc + player card)", price1: "3usd", price2: "3.5usd" }
      ],
      images: [
        "https://pbs.twimg.com/media/GB6MrXRXQAARoUC.jpg:large",
        "https://media.ktown4u.com/products/resize/thumbnail/2023/10/20/PNFNFw.png"
      ]
    },
    {
      title: "NEOGEN COLLAB JIYOO",
      items: [
        { name: "Photocard", price1: "5usd", price2: null }
      ],
      images: [
        "https://pbs.twimg.com/media/GEpbRgpXgAE9Slp?format=jpg&name=large",
        "https://pbs.twimg.com/media/GEpbP2lWwAAy4wd?format=jpg&name=large"
      ]
    },
    {
      title: "COREELLE",
      items: [
        { name: "Photocard", price1: null, price2: "15usd" }
      ],
      images: [
        "https://media.karousell.com/media/photos/products/2024/6/30/dreamcatcher_bycoreelle_multib_1719728269_039d1c61.jpg"
      ]
    },
    {
      title: "THE STAR",
      items: [
        { name: "Photocard (set: 1 pc de Dreamcatcher + 1 pc de Youngjae GOT7)", price1: null, price2: "12usd" }
      ],
      images: [
        "https://i.ebayimg.com/images/g/noUAAOSwCkRmpHiD/s-l1200.jpg"
      ]
    }
  ];
  
  // Ordenar el array por título de forma alfabética
  const sortedMerchItems = merchItems.sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  // Filtrar los productos según el término de búsqueda
  const filteredItems = sortedMerchItems.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="infoalbumtext">
      <h1 className="title">MERCH</h1>

      <input
        type="text"
        placeholder="Buscar merch..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="buscar"
      />

      <div className="infomerch">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <div key={index} className="infotextal">
              <p className="ver">{item.title}</p>

              {item.items && item.items.map((product, idx) => (
                <p key={idx}>
                  {product.name} = 
                  {product.price1 && <span className="colorunoa"> {product.price1}</span>}
                  {product.price2 && <span className="colordosa"> {product.price2}</span>}
                </p>
              ))}

              <div className="images-container">
                {item.images && item.images.map((img, imgIdx) => (
                  <img key={imgIdx} src={img} alt={`Imagen ${imgIdx + 1} de ${item.title}`} />
                ))}
              </div>
            </div>
          ))
        ) : (
          <p>No se encontraron productos.</p>
        )}
      </div>
    </div>
  );
};
=======
import "./Info.css"

const Merch = ()=>{
    return(
        <div className="infoalbum">
        <h1 className="title">MERCH</h1>
        <div className="infoal">
          <div className="infotext">
          <p>- Pcs 5to aniversario = <span className="colorunoa">6usd</span> <span className="colordosa"> 5 usd</span></p>
            <p  className="ver"> SEASONG GREETINGS 2022</p>
            <p>- POB = <span className="colordosa">10usd</span></p>
            <p>- Photocard =<span className="colorunoa">5usd</span> <span className="colordosa"> 2 usd</span></p>
            <p>- PC Unit = <span className="colorunoa">3.75usd</span> <span className="colordosa"> 3 usd</span></p>
            <p>- Astrology Card = <span className="colorunoa">3usd</span> <span className="colordosa">3usd</span></p>
            <p>- Lenticular =<span className="colorunoa">8usd</span> <span className="colordosa">13usd</span></p>
            <p>- Wish pc = <span className="colorunoa">1usd</span> <span className="colordosa">1usd</span></p>
            
            <p  className="ver"> MYSTERIOUS MANSION</p>
            <p>- POB = <span className="colorunoa">7usd</span> <span className="colordosa">6usd</span></p>
            <p>- Photocard = <span className="colorunoa">3usd</span> <span className="colordosa">2usd</span></p>
            <p>- Set por miembro (scary quote + pc + pola + Card) = <span className="colorunoa">7.5usd</span> <span className="colordosa">5usd</span></p>
            
            <p  className="ver"> DREAMCATCHER MIND</p>
            <p>- Photocard = <span className="colorunoa">3.75usd</span> <span className="colordosa">2usd</span></p>
            <p>- Set por miembro = <span className="colorunoa">13usd</span> <span className="colordosa"> 10 usd</span></p>
           
            <p  className="ver"> LOVECATCHER/LOVE STEALER</p>
            <p>- Member set = <span className="colorunoa">10usd</span> <span className="colordosa">10usd</span></p>
            <p>- Photocard = <span className="colorunoa">3usd</span> <span className="colordosa">2usd</span> </p>
            <p>- Lenticular = <span className="colorunoa">10usd</span> <span className="colordosa"> 15 usd</span></p>
            <p>- Photobook = <span className="colorunoa">15usd</span> <span className="colordosa"> 20 usd</span></p>
            
            <p  className="ver"> Pink Monster / Dream Kiss</p>
            <p>- Photocard =  <span className="colorunoa">5usd</span> <span className="colordosa"> 7 usd</span></p>
            <p>- Photobook = <span className="colorunoa">10usd</span><span className="colordosa"> 15 usd</span></p>
            
            <p  className="ver"> KHINOS cualquier era</p>
            <p>- Khino = <span className="colorunoa">12usd</span></p>
            <p>- Set por miembro = <span className="colorunoa">10usd</span> <span className="colordosa"> 5 usd</span></p>
            
            <p  className="ver"> merch conciertos</p>
            <p>- Apocalypse mini concert pc = <span className="colorunoa">8usd</span> <span className="colordosa">8usd</span> </p>
            <p>- Apocalypse halloween =<span className="colordosa">6-8usd</span> </p>
            <p>- Apocalypse halloween LD = <span className="colordosa">35usd</span> </p>
            <p>- Lucky cards 7 doors tours = <span className="colordosa">5usd</span> </p>
            <p>- 7 doors tours set (pc + tarot card+postal) = <span className="colordosa">8usd</span> </p>
           
            <p  className="ver"> SEASONG GREETINGS 2023</p>
            <p>- Set x miembro (pcs de ambos ssg + postcard + pc calendar + id)= <span className="colordosa">7usd</span></p>
            <p> Sunday Club:</p>
            <p>- Outbox + desk calendar + diary = <span className="colorunoa">8usd</span> <span className="colordosa">8usd</span></p>
            <p>- Mini pb = <span className="colorunoa">5usd</span><span className="colordosa">8usd</span></p>
            <p>- Mini L holder = <span className="colorunoa">1usd</span><span className="colordosa">5usd</span></p>
            <p>- Set stickers = <span className="colorunoa">1usd</span> <span className="colordosa">2usd</span></p>
            <p>- Folder poster = <span className="colorunoa">1usd</span><span className="colordosa">1usd</span></p>
            <p>- Random holo = <span className="colorunoa">10usd</span><span className="colordosa">35usd</span></p>
            <p>- Set x miembro (pc + id) = <span className="colorunoa">5usd</span><span className="colordosa">4usd</span></p>
            <p>Flower Garden:</p>
            <p>- Outbox + wall calendar = <span className="colorunoa">8usd</span> <span className="colordosa">10usd</span></p>
            <p>- Mini pb = <span className="colorunoa">5usd</span><span className="colordosa">8usd</span></p>
            <p>- Pop up card = <span className="colorunoa">1.5usd</span><span className="colordosa">3usd</span></p>
            <p>- Message card = <span className="colorunoa">8usd</span> </p>
            <p>- Pc stand = <span className="colorunoa">1.5usd</span><span className="colordosa">1usd</span></p>
            <p>- Pc Calendar = <span className="colorunoa">1usd</span> <span className="colordosa">5usd el set</span></p>
            <p>- Set x miembro (pc + message + postcard + calendar) =<span className="colorunoa">8usd</span> <span className="colordosa">7usd</span></p>
            
            <p  className="ver"> REASON BOUTIQUE</p>
            <p>- Trading Card = <span className="colorunoa">3usd</span><span className="colordosa">4usd</span></p>
            <p>-Photocard = <span className="colordosa">6usd</span></p>
            <p>- Pc + holder = <span className="colordosa">8usd</span></p>
            <p>- Set x miembro (postcard + pc del holder)= <span className="colorunoa">6usd</span> <span className="colordosa">5usd</span></p> 
            
            <p  className="ver">DREAMQUEST</p>
            <p>- Set por miembro (pc + postcard) = <span className="colorunoa">5usd</span><span className="colordosa"> 3,5usd</span></p>
           
            <p  className="ver"> SSG 2024</p>
            <p>- Dear my youth set x miembro (pc + miniposter + bookmark + postal) = <span className="colorunoa">5usd </span><span className="colordosa">4usd</span></p>
            <p>- Dream victory set x miembro (pc + player card) = <span className="colorunoa">3usd</span><span className="colordosa"> 3,5usd</span></p>

            <p  className="ver">NEOGEN COLLAB JIYOO</p>
            <p>-Photocard = <span className="colorunoa">5usd </span><span className="colordosa">5usd</span></p>

            <p  className="ver">COREELLE</p>
            <p>-Photocard =<span className="colordosa">15usd</span></p>

            <p  className="ver">THE STAR </p>
            <p>-Photocard (set: 1 pc de Dreamcatcher + 1 pc de Youngjae GOT7) =<span className="colordosa">12usd</span></p>
           
          </div>
          <div className="infoalimgmerch">
    <img src="https://external-preview.redd.it/RWs84NAj6sa05f4qqumVlfUPjQgR_SxB1FHg2FLAEAs.jpg?auto=webp&s=fcfa7c36df28adc9a3a85ed044a5616ea18c75af" alt="Album Cover" />
    <p>Season greetings 2022</p>
    <img src="https://i.redd.it/y9hs89yft1j71.jpg" alt="Album Cover" />
    <p>Mysterious Mansion</p>
    <img src="https://lightupk.com/cdn/shop/products/DREAMCATCHER-_DREAMCATCHERMIND_SpecialEdition_2VERSIONS_2.png?v=1649909873" alt="Album Cover" />
    <p>Dreamcatcher Mind</p>
    <img src="https://i.ebayimg.com/images/g/QTkAAOSwK0BjnT7S/s-l400.jpg" alt="Album Cover" />
    <p>Love Catcher/ Love stealer</p>
    <img src="https://beadsofbullets.com/wp-content/uploads/2022/06/dreamcatcher-md-1024x682.jpg" alt="Album Cover" />
    <p>Pink Monster / Dream Kiss</p>
    <img src="https://media.karousell.com/media/photos/products/2021/8/20/dreamcatcher_kihno_album_1629435889_3fbaf9e9.jpg" alt="Album Cover" />
    <p>Khinos</p>
    <img src="https://m.media-amazon.com/images/I/619j7-0rABL.jpg" alt="Album Cover" />
    <p>Season Greetings 2023</p>
    <img src="https://d3tvwjfge35btc.cloudfront.net/Assets/45/810/L_p0198181045.jpg" alt="Album Cover" />
    <p>Dreamquest</p>
    <img src="https://media.ktown4u.com/products/resize/thumbnail/2023/10/20/PNFNFw.png" alt="Album Cover" />
    <p>Season Greetings 2024</p>
    </div>
  </div>
</div>

  )
}
>>>>>>> db2213b96f3ff2252f76c68200deb6fca05f60ca

export default Merch;