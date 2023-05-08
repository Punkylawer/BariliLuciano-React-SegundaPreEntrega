const surfBoards = [
  
      {
        "id": 1,
        "title": "CI Pro",
        "categoria": "Performance",
        "dimensiones": "6'0'' x 18 5/8'' x 2 5/16''",
        "stock": 7,
        "imagen": "https://cisurfboards.com/wp-content/uploads/2022/03/CI-Pro-1600x1600.jpg",
        "precio": 849.99
      },
      {
        "id": 2,
        "title": "CI Mid",
        "categoria": "Mid-length",
        "dimensiones": "7'0'' x 22'' x 3''",
        "stock": 15,
        "imagen": "https://cisurfboards.com/wp-content/uploads/2022/03/CI-Mid-1600x1600.jpg",
        "precio": 999.99
      },
      {
        "id": 3,
        "title": "CI Fish",
        "categoria": "Fish",
        "dimensiones": "5'8'' x 20 3/4'' x 2 5/8''",
        "stock": 3,
        "imagen": "https://cisurfboards.com/wp-content/uploads/2022/03/CI-Fish-1600x1600.jpg",
        "precio": 649.99
      },
      {
        "id": 4,
        "title": "UVA Longboard",
        "categoria": "Longboard",
        "dimensiones": "9'0'' x 23'' x 3 1/4''",
        "stock": 11,
        "imagen": "https://uvasurfboards.com/wp-content/uploads/2020/10/UVA-Longboard.png",
        "precio": 1399.99
      },
      {
        "id": 5,
        "title": "UVA Shortboard",
        "categoria": "Shortboard",
        "dimensiones": "6'4'' x 19 3/4'' x 2 3/8''",
        "stock": 8,
        "imagen": "https://uvasurfboards.com/wp-content/uploads/2020/10/UVA-Shortboard.png",
        "precio": 799.99
      },
      {
        "id": 6,
        "title": "UVA Funboard",
        "categoria": "Funboard",
        "dimensiones": "7'0'' x 21'' x 2 5/8''",
        "stock": 18,
        "imagen": "https://uvasurfboards.com/wp-content/uploads/2020/10/UVA-Funboard.png",
        "precio": 1099.99
      },
      {
        "id": 7,
        "title": "Channel Islands Fever",
        "categoria": "Performance",
        "dimensiones": "6'4'' x 19 3/4'' x 2 5/8''",
        "stock": 2,
        "imagen": "https://cisurfboards.com/wp-content/uploads/2022/03/FEVER-1600x1600.jpg",
        "precio": 725.00
      },
      {
        "id": 9,
        "title": "Channel Islands Rocket Wide",
        "categoria": "Fish",
        "dimensiones": "5'11'' x 20'' x 2 9/16''",
        "stock": 15,
        "imagen": "https://cisurfboards.com/wp-content/uploads/2022/03/Rocket-Wide-1600x1600.jpg",
        "precio": 749.99
      },
      {
        "id": 10,
        "title": "Channel Islands Black & White",
        "categoria": "Performance",
        "dimensiones": "6'2'' x 19 1/4'' x 2 1/2''",
        "stock": 8,
        "imagen": "https://cisurfboards.com/wp-content/uploads/2022/03/Black-and-White-1600x1600.jpg",
        "precio": 699.99
      },
      {
        "id": 11,
        "title": "UVA Hybrid",
        "categoria": "Hybrid",
        "dimensiones": "6'8'' x 22'' x 3 1/8''",
        "stock": 10,
        "imagen": "https://uvasurfboards.com/wp-content/uploads/2020/10/UVA-Hybrid.png",
        "precio": 899.99
      },
      {
        "id": 12,
        "title": "UVA Fish",
        "categoria": "Fish",
        "dimensiones": "5'10'' x 20 1/2'' x 2 5/8''",
        "stock": 7,
        "imagen": "https://uvasurfboards.com/wp-content/uploads/2020/10/UVA-Fish.png",
        "precio": 799.99
      },
      {
        "id": 13,
        "title": "UVA Funboard",
        "categoria": "Funboard",
        "dimensiones": "7'2'' x 22 1/2'' x 3'' ",
        "stock": 14,
        "imagen": "https://uvasurfboards.com/wp-content/uploads/2020/10/UVA-Funboard.png",
        "precio": 1099.99
      },
      {
        "id": 14,
        "title": "Lost Round Nose Fish Redux",
        "categoria": "Fish",
        "dimensiones": "5'10'' x 20 1/2'' x 2 1/2''",
        "stock": 3,
        "imagen": "https://www.lostsurfboards.com/wp-content/uploads/2021/05/rnfredux.jpg",
        "precio": 750.00
      },
      {
        "id": 15,
        "title": "Lost Quiver Killer",
        "categoria": "Performance",
        "dimensiones": "5'10'' x 19 1/2'' x 2 1/2''",
        "stock": 6,
        "imagen": "https://www.lostsurfboards.com/wp-content/uploads/2021/05/quiver-killer.jpg",
        "precio": 765.00
      },
      {
        "id": 16,
        "title": "JS Industries Monsta Box",
        "categoria": "Performance",
        "dimensiones": "6'0'' x 19 1/4'' x 2 3/8''",
        "stock": 11,
        "imagen": "https://www.jsindustries.com/wp-content/uploads/2021/02/MonstaBox-2020-product-page.jpg",
        "precio": 749.00
      },
      {
        "id": 17,
        "title": "JS Industries Air 17 X",
        "categoria": "Performance",
        "dimensiones": "6'0'' x 19'' x 2 3/8''",
        "stock": 4,
        "imagen": "https://www.jsindustries.com/wp-content/uploads/2021/02/Air17X-2020-product-page.jpg",
        "precio": 769.00
      },
      {
        "id": 18,
        "title": "Firewire Greedy Beaver",
        "categoria": "Mid-length",
        "dimensiones": "6'6'' x 21 1/2'' x 2 7/8''",
        "stock": 18,
        "imagen": "https://www.firewiresurfboards.com/images/greedy-beaver.jpg",
        "precio": 869.99
      },
      {
        "id": 19,
        "title": "Firewire Moonbeam",
        "categoria": "Longboard",
        "dimensiones": "9'1'' x 22 5/8'' x 2 7/8''",
        "stock": 5,
        "imagen": "https://www.firewiresurfboards.com/images/moonbeam.jpg",
        "precio": 1299.99
      },
      {
        "id": 20,
        "title": "Firewire Spitfire",
        "categoria": "Hybrid",
        "dimensiones": "5'10'' x 19 5/8'' x 2 7/16''",
        "stock": 13,
        "imagen": "https://www.firewiresurfboards.com/images/spitfire.jpg",
        "precio": 859.99
    } 
    ]
