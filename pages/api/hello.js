// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([ {title_esp: "JARDINES HUMANOS" ,
    title_eng: "HUMAN GARDENS" ,
    cat_esp:"Cortometraje",
    cat_eng:"Shortfilm",
    info_esp: "Escrito y dirigido por Juan Pablo Baez. Producido por Claroscuro Producciones." ,
    info_eng:"Writed and directed by Juan Pablo Baez. Produced by Claroscuro Producciones." ,
    prod_year: 2012 ,
    photo:"public/photos/jardines.jpeg",
    photoBW:"public/photos/jardines-2.jpeg"
    },
    {title_esp:"19/03" ,
      title_eng:"19/03" ,
      cat_esp:"Cortometraje",
      cat_eng:"Shortfilm",
      info_esp:"Escrito por Martín Román, dirigido por Iñaki Antuñano y Martín Román. Co producido por KILL THE TV y Claroscuro Producciones." ,
      info_eng:"Writed by Martín Román. Directed by Iñaki Antuñano and Martín Román. Produced by KILL THE TV and Claroscuro Producciones." ,
      prod_year: 2012 ,
      photo:"public/photos/1903.jpeg",
      photoBW:"public/photos/1903-2.jpeg"
      },
      {title_esp:"LA PRIMERA GOLONDRINA" ,
        title_eng:"THE FIRST SWALLOW" ,
        cat_esp:"Cortometraje",
        cat_eng:"Shortfilm",
        info_esp:"escrito y dirigido por Lorena Lluch. Basado en un cuento de Albert Sánchez Piñol. Producido por Claroscuro Producciones." ,
        info_eng:"Writed and directed by Lorena Lluch. Based on the short story 'Només digues si encara m'estimes' by Albert Sánchez Piñol. Produced by Claroscuro Producciones." ,
        prod_year:2013 ,
        photo:"public/photos/lpg.jpeg",
        photoBW:"public/photos/lpg-2.jpeg"
        },
        {title_esp:"RECREO" ,
          title_eng:"PLAYTIME" ,
          cat_esp:"Cortometraje",
          cat_eng:"Shortfilm",
          info_esp:"escrito y dirigido por Juan Pablo Báez. Producido por Claroscuro Producciones" ,
          info_eng:"Writed and directed by Juan Pablo Baez. Produced by Claroscuro Producciones." ,
          prod_year:2011 ,
          photo:"public/photos/recreo.jpeg",
          photoBW:"public/photos/recreo-2.jpeg"
          },
          {title_esp:"THE HUNTING BIRD" ,
            title_eng:"THE HUNTING BIRD" ,
            cat_esp:"Videoclip",
            cat_eng:"Music video",
            info_esp:"dirigido por Juan Pablo Báez, Pau Martínez y Gabi Ochoa. Coproducido por Claroscuro Producciones y 2manyproducers." ,
            info_eng:"Directed by Juan Pablo Báez, Pau Martínez and Gabi Ochoa. Produced by Claroscuro Producciones and 2manyproducers." ,
            prod_year: 2010 ,
            photo:"public/photos/polar.jpeg",
        photoBW:"public/photos/polar-2.jpeg"
            }
    ])
}


