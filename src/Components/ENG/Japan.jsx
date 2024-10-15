import { useState } from "react";
import "./Info.css";
import Button from "./Button";

const Japan= () => {
  // Estado para el término de búsqueda
  const [searchTerm, setSearchTerm] = useState("");
  
  const [isAscending, setIsAscending] = useState(true);

  // Lista completa de productos
  const JapAlbums = [
    {
      title: "PREQUEL(japanese ver.)",	
      items: [
        { name: "sealed", price1: null, price2: "150usd" },
        { name: "unsealed", price1: null, price2: "110usd" },
        { name: "photocard", price1: null, price2: "60usd" }
      ],
      images: [
        "https://i.ebayimg.com/images/g/GkUAAOSwZPhj1COI/s-l1200.jpg"
      ]
    },
    {
      title: "WHAT (japanese ver.)",
      items: [
        { name: "regular sealed", price1: null, price2: "15usd" },
        { name: "regular unsealed", price1: null, price2: "20usd" },
        { name: "limited A/B sealed", price1: null, price2: "25usd" },
        { name: "limited A/B unsealed", price1: null, price2: "20usd" },
        { name: "photocard", price1: null, price2: "20usd" }
        
      ],
      images: [
        "https://media.karousell.com/media/photos/products/2018/12/04/wts_dreamcatcher_what_japanese_album_first_press_1543903968_d893907c_progressive.jpg"
      ]
    },
    {
      title: "PIRI (japanese ver.)",
      items: [
        { name: "regular sealed", price1: null, price2: "15usd" },
        { name: "regular unsealed", price1: null, price2: "20usd" },
        { name: "limited A/B sealed", price1: null, price2: "25usd" },
        { name: "limited A/B unsealed", price1: null, price2: "20usd" },
        { name: "photocard", price1: null, price2: "20usd" }
      ],
      images: [
        "https://i.ebayimg.com/images/g/eQoAAOSwiMteX7RB/s-l1200.webp"
      ]
    },
    {
        title: "The beginning of the end",
        items: [
          { name: "regular sealed", price1: null, price2: "30usd" },
          { name: "regular unsealed", price1: null, price2: "15usd" },
          { name: "limited A/B sealed", price1: null, price2: "50usd" },
          { name: "limited A/B unsealed", price1: null, price2: "40usd" },
          { name: "photocard", price1: null, price2: "20usd" }
        ],
        images: [
          "https://i.ytimg.com/vi/0WJWq8NBTEU/maxresdefault.jpg"
        ]
    },
    {
      title: "ENDLESS NIGHT",
      items: [
        { name: "regular sealed", price1: null, price2: "12Usd" },
        { name: "regular unsealed", price1: null, price2: "10usd" },
        { name: "limited A/B sealed", price1: null, price2: "16usd" },
        { name: "limited A/B unsealed", price1: null, price2: "14usd" },
        { name: "photocard", price1: null, price2: "20usd" }
      ],
      images: [
        "https://i.ebayimg.com/images/g/AjMAAOSwYLVj~Lxl/s-l1200.jpg"
      ]
    },
    {
      title: "ECLIPSE",
      items: [
        { name: "regular sealed", price1: null, price2: "12Usd" },
        { name: "regular unsealed", price1: null, price2: "10usd" },
        { name: "limited sealed", price1: null, price2: "16usd" },
        { name: "limited unsealed", price1: null, price2: "14usd" },
        { name: "photocard", price1: null, price2: "20usd" }
      ],
      images: [
        "https://external-preview.redd.it/3cDCG414k41wR5T-Z7jaW5i2amJRix9o2m7ICyMN8jg.jpg?width=640&crop=smart&auto=webp&s=9d5e6aaaa09f126ab57abdff054976836427006e"
      ]
    },
  ];
  
  // Ordenar el array por título de forma alfabética
  const sortedAlbumsItems = JapAlbums.sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  // Filtrar los productos según el término de búsqueda
  const filteredItems = sortedAlbumsItems.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="infoalbumtext">
      <h1 className="title">JAPANESE ALBUMS</h1>
      <Button/>

      <input
        type="text"
        placeholder="Search Album..."
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
          <p>No Album found.</p>
        )}
      </div>
    </div>
  );
};

export default Japan;