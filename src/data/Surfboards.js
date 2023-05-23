const surfboards = [
  
      {
        "id": 1,
        "title": "CI Pro",
        "categoria": "Shortboard",
        "dimensiones": "6'0'' x 18 5/8'' x 2 5/16''",
        "stock": 7,
        "imagen": "/src/assets/tabla1-imagen2.jpg",
        "precio": 849.99,
        "descripcion": "La CI Pro es una tabla de alto rendimiento diseñada para surfistas experimentados. Con su construcción de calidad y diseño aerodinámico, esta tabla te brindará velocidad y fluidez en cualquier tipo de ola. Su forma versátil te permite realizar maniobras precisas y mantener el control incluso en condiciones desafiantes. Es la elección perfecta para aquellos que buscan llevar su surf al siguiente nivel."
      },
      {
        "id": 2,
        "title": "CI Mid",
        "categoria": "Shortboard",
        "dimensiones": "7'0'' x 22'' x 3''",
        "stock": 15,
        "imagen": "/src/assets/tabla2.jpg",
        "precio": 999.99,
        "descripcion": "La CI Mid es una tabla de longitud intermedia diseñada para aquellos que buscan un equilibrio entre rendimiento y estabilidad. Su diseño más largo y ancho te proporciona una mayor flotación y facilita el remado, lo que la hace ideal para surfistas de nivel intermedio. Con su construcción duradera y capacidad de respuesta, te permitirá disfrutar de sesiones divertidas en una amplia variedad de condiciones de olas."
      },
      {
        "id": 3,
        "title": "CI Fish",
        "categoria": "Fishboard",
        "dimensiones": "5'8'' x 20 3/4'' x 2 5/8''",
        "stock": 3,
        "imagen": "/src/assets/tabla3.jpg",
        "precio": 649.99,
        "descripcion": "El CI Fish es una tabla de estilo retro diseñada para capturar la esencia del surf clásico. Con su forma ancha y corta, esta tabla te brinda una gran flotación y velocidad en olas más pequeñas. Su diseño de doble quilla te permite realizar giros suaves y rápidos, brindándote una sensación única en el agua. Si buscas una experiencia de surf divertida y nostálgica, el CI Fish es la elección perfecta."
      },
      {
        "id": 4,
        "title": "BOA Longboard",
        "categoria": "Longboard",
        "dimensiones": "9'0'' x 23'' x 3 1/4''",
        "stock": 11,
        "imagen": "/src/assets/tabla4.jpg",
        "precio": 1399.99,
        "descripcion": "El BOA Longboard es una tabla clásica diseñada para aquellos que disfrutan del estilo suave y fluido del surf de longitud. Con su forma larga y estable, te brinda una gran estabilidad y facilidad para atrapar olas. Su construcción de alta calidad y acabado elegante hacen que esta tabla sea duradera y resistente. Si buscas disfrutar de largos paseos y realizar maniobras clásicas en el agua, el BOA Longboard es la elección perfecta."
      },
      {
        "id": 5,
        "title": "BOA Shortboard",
        "categoria": "Shortboard",
        "dimensiones": "6'4'' x 19 3/4'' x 2 3/8''",
        "stock": 8,
        "imagen": "/src/assets/tabla5.jpg",
        "precio": 799.99,
        "descripcion": "La BOA Shortboard es una tabla de alto rendimiento diseñada para surfistas avanzados que buscan velocidad y maniobrabilidad en olas de tamaño mediano a grande. Su forma compacta y estilizada te permite realizar giros rápidos y precisos, mientras que su construcción duradera garantiza un rendimiento excepcional en condiciones desafiantes. Si quieres llevar tu surf al límite y conquistar olas poderosas, la BOA Shortboard es la elección perfecta."
      },
      {
        "id": 6,
        "title": "BOA Funboard",
        "categoria": "Longboard",
        "dimensiones": "7'0'' x 21'' x 2 5/8''",
        "stock": 18,
        "imagen": "/src/assets/tabla6.jpg",
        "precio": 1099.99,
        "descripcion": "La BOA Funboard es una tabla versátil diseñada para brindarte diversión en el agua sin comprometer el rendimiento. Con su forma híbrida entre una tabla corta y un longboard, te ofrece estabilidad y facilidad de remado, junto con la capacidad de realizar maniobras más agresivas. Ya sea que estés aprendiendo a surfear o busques una tabla para todo tipo de condiciones, la UVA Funboard te brindará horas de diversión en el agua."
      },
      {
        "id": 7,
        "title": "Channel Islands Fever",
        "categoria": "Shortboard",
        "dimensiones": "6'4'' x 19 3/4'' x 2 5/8''",
        "stock": 2,
        "imagen": "/src/assets/tabla7-imagen2.jpg",
        "precio": 725.00,
        "descripcion": "La Channel Islands Fever es una tabla de alto rendimiento diseñada para surfistas exigentes que buscan velocidad y control en todo tipo de olas. Con su construcción de calidad y diseño aerodinámico, esta tabla te brindará un rendimiento excepcional en condiciones desafiantes. Su forma versátil te permite realizar maniobras precisas y mantener el control incluso a alta velocidad. Si quieres llevar tu surf al siguiente nivel, la Channel Islands Fever es la elección perfecta."
      },
      {
        "id": 8,
        "title": "Channel Islands Rocket Wide",
        "categoria": "Fishboard",
        "dimensiones": "5'11'' x 20'' x 2 9/16''",
        "stock": 15,
        "imagen": "/src/assets/tabla8.jpg",
        "precio": 749.99,
        "descripcion": "La Channel Islands Rocket Wide es una tabla de estilo fish diseñada para brindarte velocidad y diversión en olas más pequeñas y suaves. Con su forma ancha y corta, esta tabla te brinda una gran flotación y facilita el remado, permitiéndote atrapar más olas. Su diseño de doble quilla te proporciona giros rápidos y radicales, brindándote una sensación única en el agua. Si buscas una tabla ágil esta es la indicada."
      },
      {
        "id": 9,
        "title": "Channel Islands Black & White",
        "categoria": "Shortboard",
        "dimensiones": "6'2'' x 19 1/4'' x 2 1/2''",
        "stock": 8,
        "imagen": "/src/assets/tabla9.jpg",
        "precio": 699.99,
        "descripcion": "La Channel Islands Black & White es una tabla de alto rendimiento diseñada para surfistas que buscan versatilidad y control en diferentes condiciones de olas. Su diseño refinado y su construcción de alta calidad te brindan una combinación perfecta de velocidad, maniobrabilidad y estabilidad. Ya sea que estés surfeando olas huecas, rápidas o más suaves, la Channel Islands Black & White te permitirá destacarte y llevar tu surf al máximo nivel."
      },
      {
        "id": 10,
        "title": "BOA Hybrid",
        "categoria": "Shortboard",
        "dimensiones": "6'8'' x 22'' x 3 1/8''",
        "stock": 10,
        "imagen": "/src/assets/tabla10.jpg",
        "precio": 899.99,
        "descripcion": "La BOA Hybrid es una tabla versátil diseñada para combinar lo mejor de un shortboard y un fish. Con su forma intermedia, te brinda la estabilidad y el volumen necesario para atrapar olas fácilmente, mientras que su perfil más agresivo y su cola más estrecha te permiten realizar maniobras rápidas y radicales. Esta tabla es ideal para surfistas que desean experimentar diferentes estilos de surf y adaptarse a distintas condiciones de olas."
      },
      {
        "id": 11,
        "title": "BOA Fish",
        "categoria": "Fishboard",
        "dimensiones": "5'10'' x 20 1/2'' x 2 5/8''",
        "stock": 7,
        "imagen": "/src/assets/tabla11.jpg",
        "precio": 799.99,
        "descripcion": "La BOA Fish es una tabla clásica de estilo fish diseñada para aquellos que buscan velocidad y diversión en olas más pequeñas y medianas. Su forma ancha y corta te brinda una gran flotación y facilidad para atrapar olas, mientras que su diseño de doble quilla te permite realizar giros rápidos y radicales. Si buscas una tabla ágil y juguetona que te permita disfrutar al máximo de cada sesión de surf, la BOA Fish es la opción perfecta."
      },
      {
        "id": 12,
        "title": "BOA Funboard",
        "categoria": "Longboard",
        "dimensiones": "7'2'' x 22 1/2'' x 3'' ",
        "stock": 14,
        "imagen": "/src/assets/tabla12.jpg",
        "precio": 1099.99,
        "descripcion": "La BOA Funboard es una tabla versátil diseñada para brindarte diversión y facilidad de uso en el agua. Con su tamaño y volumen generosos, te brinda una gran estabilidad y facilidad para atrapar olas. Su forma híbrida entre una tabla corta y un longboard te permite realizar maniobras más agresivas y giros suaves. Ya seas un surfista principiante que busca progresar en su nivel de surf o un surfista experimentado que desea disfrutar de sesiones relajadas y divertidas, la UVA Funboard es la tabla perfecta para ti."
      },
      {
        "id": 13,
        "title": "BOA Round Nose Fish Redux",
        "categoria": "Fishboard",
        "dimensiones": "5'10'' x 20 1/2'' x 2 1/2''",
        "stock": 3,
        "imagen": "/src/assets/tabla13.jpg",
        "precio": 750.00,
        "descripcion": "La BOA Round Nose Fish Redux es una reinterpretación moderna del clásico fish. Con su forma ancha y su cola de pez, esta tabla te brinda una gran velocidad y estabilidad en olas pequeñas y medianas. Su diseño versátil te permite realizar giros rápidos y radicales, mientras que su flotación adicional te ayuda a atrapar olas de forma fácil y temprana. Si buscas una tabla retro con un toque contemporáneo, la Lost Round Nose Fish Redux es la elección perfecta."
      },
      {
        "id": 14,
        "title": "BOA Quiver Killer",
        "categoria": "Fishboard",
        "dimensiones": "5'10'' x 19 1/2'' x 2 1/2''",
        "stock": 6,
        "imagen": "/src/assets/tabla14.jpg",
        "precio": 765.00,
        "descripcion": "La BOA Quiver Killer es una tabla de alto rendimiento diseñada para surfistas que buscan dominar todo tipo de condiciones de olas. Con su forma versátil y su construcción de alta calidad, esta tabla te brinda un equilibrio perfecto entre velocidad, control y maniobrabilidad. Ya sea que estés surfeando en olas pequeñas y suaves o en condiciones más desafiantes, la BOA Quiver Killer te permitirá llevar tu surf al siguiente nivel y sacar el máximo provecho de cada sesión en el agua."
      },
      {
        "id": 15,
        "title": "JS BOA Monsta Box",
        "categoria": "Fishboard",
        "dimensiones": "6'0'' x 19 1/4'' x 2 3/8''",
        "stock": 11,
        "imagen": "/src/assets/tabla15.jpg",
        "precio": 749.00,
        "descripcion": "La JS BOA Monsta Box es una tabla de alto rendimiento diseñada para surfistas que buscan un alto nivel de versatilidad y rendimiento en diferentes condiciones de olas. Su diseño refinado y su construcción de calidad te brindan una excelente combinación de velocidad, control y maniobrabilidad. Con su contorno equilibrado y su rocker moderado, esta tabla es capaz de adaptarse a olas desde pequeñas y suaves hasta más grandes y poderosas. Ya sea que estés realizando maniobras radicales en el bolsillo de la ola o buscando tubos profundos, la JS BOA Monsta Box te llevará al siguiente nivel de surf."
      },
      {
        "id": 16,
        "title": "BOA Air 17 X",
        "categoria": "Fishboard",
        "dimensiones": "6'0'' x 19'' x 2 3/8''",
        "stock": 4,
        "imagen": "/src/assets/tabla16.jpg",
        "precio": 769.00,
        "descripcion": "La BOA Air 17 X es una tabla de alto rendimiento diseñada para surfistas avanzados que buscan un nivel excepcional de rendimiento y respuesta en el agua. Con su construcción liviana y su diseño aerodinámico, esta tabla te brinda una excelente velocidad y maniobrabilidad en olas de cualquier tamaño. Su contorno refinado y su rocker agresivo te permiten realizar giros rápidos y radicales, mientras que su cola de swallow te proporciona una gran tracción y liberación en la ola. Si buscas una tabla de alto rendimiento que te lleve al límite de tus habilidades, la BOA Air 17 X es la elección perfecta."
      },
      {
        "id": 17,
        "title": "BOA Firewire Greedy Beaver",
        "categoria": "Shortboard",
        "dimensiones": "6'6'' x 21 1/2'' x 2 7/8''",
        "stock": 18,
        "imagen": "/src/assets/tabla17.jpg",
        "precio": 869.99,
        "descripcion": "La BOA Firewire Greedy Beaver es una tabla de estilo mid-length diseñada para brindarte diversión y rendimiento en una amplia variedad de condiciones de olas. Su forma híbrida entre un longboard y un shortboard te proporciona una excelente estabilidad y facilidad de remada, mientras que su contorno refinado te permite realizar maniobras suaves y fluidas. Con su construcción de tecnología Firewire, esta tabla ofrece una excelente durabilidad y respuesta. Ya seas un surfista principiante que busca progresar o un surfista experimentado que busca una tabla versátil para disfrutar de diferentes estilos de surf, la Firewire Greedy Beaver es una elección excelente."
      },
      {
        "id": 18,
        "title": "Firewire Moonbeam",
        "categoria": "Longboard",
        "dimensiones": "9'1'' x 22 5/8'' x 2 7/8''",
        "stock": 5,
        "imagen": "/src/assets/tabla18.jpg",
        "precio": 1299.99,
        "descripcion": "El Firewire Moonbeam es un longboard clásico con un toque moderno. Con su tamaño generoso y su diseño elegante, esta tabla te brinda una experiencia de surf suave y fluida. Su contorno bien equilibrado y su cola redonda te permiten realizar giros suaves y estilosos, mientras que su construcción de tecnología Firewire garantiza durabilidad y respuesta. Ya sea que estés surfeando olas pequeñas y limpias o buscando largos paseos en olas más grandes, el Firewire Moonbeam te brinda la estabilidad y el control que necesitas para disfrutar al máximo del estilo clásico del longboard."
      },
      {
        "id": 19,
        "title": "Firewire Spitfire",
        "categoria": "Fishboard",
        "dimensiones": "5'10'' x 19 5/8'' x 2 7/16''",
        "stock": 13,
        "imagen": "/src/assets/tabla19.jpg",
        "precio": 859.99,
        "descripcion": "La Firewire Spitfire es una tabla híbrida diseñada para combinar la velocidad y el rendimiento de un shortboard con la estabilidad y la facilidad de remada de un fish. Su contorno compacto y su rocker moderado te brindan una excelente velocidad y capacidad de maniobra en todo tipo de olas. Con su construcción de tecnología Firewire, esta tabla ofrece una gran durabilidad y respuesta, permitiéndote aprovechar al máximo cada ola. Ya seas un surfista intermedio que busca progresar o un surfista experimentado que busca una tabla versátil para el día a día, la Firewire Spitfire es una opción excelente."
    } 
    ]
    
    
    export const  getSurfboards = () => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(surfboards)
          }, 1000 )
        } )
    } 

    export const getSurfboardById = (surfboardId) => {
      return new Promise((resolve) => {
          setTimeout(() => {
              resolve(surfboards.find(surfb=>surfb.id === surfboardId))
          }, 500)
      })
  } 

  export const getSurfboardByCategory = (category) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(surfboards.filter(surfb=>surfb.categoria === category))
        }, 500)
    })
} 