// Sample data structure for Lookbook component
export const mockLooks = [
  {
    id: 1,
    title: "Summer Vibes Collection",
    description: "Perfect outfits for your summer adventures",
    media: [
      {
        id: 101,
        type: "image",
        url: "https://images.pexels.com/photos/1390600/pexels-photo-1390600.jpeg?auto=compress&cs=tinysrgb&w=800",
        annotations: [
          {
            id: 201,
            xPercent: 25,
            yPercent: 45,
            product: {
              id: "p1001",
              name: "Vintage Denim Jacket",
              price: 79.99,
              image: "https://images.pexels.com/photos/1979293/pexels-photo-1979293.jpeg?auto=compress&cs=tinysrgb&w=800",
            }
          },
          {
            id: 202,
            xPercent: 65,
            yPercent: 60,
            product: {
              id: "p1002",
              name: "Classic White Sneakers",
              price: 59.99,
              image: "https://images.pexels.com/photos/1280064/pexels-photo-1280064.jpeg?auto=compress&cs=tinysrgb&w=800",
            }
          }
        ]
      },
      {
        id: 102,
        type: "image",
        url: "https://images.pexels.com/photos/1852382/pexels-photo-1852382.jpeg?auto=compress&cs=tinysrgb&w=800",
        annotations: [
          {
            id: 203,
            xPercent: 40,
            yPercent: 30,
            product: {
              id: "p1003",
              name: "Striped Summer Top",
              price: 34.99,
              image: "https://images.pexels.com/photos/1566412/pexels-photo-1566412.jpeg?auto=compress&cs=tinysrgb&w=800",
            }
          }
        ]
      },
      {
        id: 103,
        type: "video",
        url: "https://player.vimeo.com/external/347937976.sd.mp4?s=25446318bcccf5181514c8054df2a903e939b5d5&profile_id=164&oauth2_token_id=57447761",
        thumbnail: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800",
        annotations: [
          {
            id: 210,
            xPercent: 35,
            yPercent: 40,
            product: {
              id: "p1010",
              name: "Beach Linen Shirt",
              price: 49.99,
              image: "https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&w=800",
            }
          },
          {
            id: 211,
            xPercent: 65,
            yPercent: 60,
            product: {
              id: "p1011",
              name: "Straw Hat",
              price: 29.99,
              image: "https://images.pexels.com/photos/984619/pexels-photo-984619.jpeg?auto=compress&cs=tinysrgb&w=800",
            }
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Urban Street Style",
    description: "Modern city looks for everyday wear",
    media: [
      {
        id: 104,
        type: "video",
        url: "https://player.vimeo.com/external/394678700.sd.mp4?s=353646417880262a4c644768ccca9c4a36add868&profile_id=164&oauth2_token_id=57447761",
        thumbnail: "https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&w=800",
        annotations: [
          {
            id: 212,
            xPercent: 30,
            yPercent: 45,
            product: {
              id: "p1012",
              name: "Urban Streetwear Hoodie",
              price: 69.99,
              image: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
            }
          },
          {
            id: 213,
            xPercent: 60,
            yPercent: 55,
            product: {
              id: "p1013",
              name: "High-Top Sneakers",
              price: 89.99,
              image: "https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=800",
            }
          }
        ]
      },
      {
        id: 105,
        type: "image",
        url: "https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg?auto=compress&cs=tinysrgb&w=800",
        annotations: [
          {
            id: 204,
            xPercent: 30,
            yPercent: 35,
            product: {
              id: "p1004",
              name: "Black Urban Jacket",
              price: 89.99,
              image: "https://images.pexels.com/photos/983497/pexels-photo-983497.jpeg?auto=compress&cs=tinysrgb&w=800",
            }
          },
          {
            id: 205,
            xPercent: 60,
            yPercent: 70,
            product: {
              id: "p1005",
              name: "Designer Sunglasses",
              price: 129.99,
              image: "https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=800",
            }
          }
        ]
      },
      {
        id: 106,
        type: "image",
        url: "https://images.pexels.com/photos/3062624/pexels-photo-3062624.jpeg?auto=compress&cs=tinysrgb&w=800",
        annotations: [
          {
            id: 206,
            xPercent: 45,
            yPercent: 50,
            product: {
              id: "p1006",
              name: "Premium Leather Bag",
              price: 149.99,
              image: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=800",
            }
          }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Evening Elegance",
    description: "Sophisticated looks for special occasions",
    media: [
      {
        id: 107,
        type: "image",
        url: "https://images.pexels.com/photos/1375736/pexels-photo-1375736.jpeg?auto=compress&cs=tinysrgb&w=800",
        annotations: [
          {
            id: 207,
            xPercent: 35,
            yPercent: 40,
            product: {
              id: "p1007",
              name: "Elegant Evening Dress",
              price: 199.99,
              image: "https://images.pexels.com/photos/1755428/pexels-photo-1755428.jpeg?auto=compress&cs=tinysrgb&w=800",
            }
          },
          {
            id: 208,
            xPercent: 60,
            yPercent: 65,
            product: {
              id: "p1008",
              name: "Crystal Earrings",
              price: 79.99,
              image: "https://images.pexels.com/photos/1413420/pexels-photo-1413420.jpeg?auto=compress&cs=tinysrgb&w=800",
            }
          }
        ]
      },
      {
        id: 108,
        type: "video",
        url: "https://player.vimeo.com/external/469073798.sd.mp4?s=9ac94d86a701e1b62a690bd995c15eccec7c917b&profile_id=164&oauth2_token_id=57447761",
        thumbnail: "https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg?auto=compress&cs=tinysrgb&w=800",
        annotations: [
          {
            id: 214,
            xPercent: 40,
            yPercent: 35,
            product: {
              id: "p1014",
              name: "Evening Gown",
              price: 249.99,
              image: "https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=800",
            }
          },
          {
            id: 215,
            xPercent: 55,
            yPercent: 60,
            product: {
              id: "p1015",
              name: "Statement Necklace",
              price: 89.99,
              image: "https://images.pexels.com/photos/1454171/pexels-photo-1454171.jpeg?auto=compress&cs=tinysrgb&w=800",
            }
          },
          {
            id: 216,
            xPercent: 70,
            yPercent: 45,
            product: {
              id: "p1016",
              name: "Formal Clutch",
              price: 129.99,
              image: "https://images.pexels.com/photos/1260591/pexels-photo-1260591.jpeg?auto=compress&cs=tinysrgb&w=800",
            }
          }
        ]
      },
      {
        id: 109,
        type: "image",
        url: "https://images.pexels.com/photos/1721558/pexels-photo-1721558.jpeg?auto=compress&cs=tinysrgb&w=800",
        annotations: [
          {
            id: 209,
            xPercent: 40,
            yPercent: 55,
            product: {
              id: "p1009",
              name: "Designer Clutch",
              price: 119.99,
              image: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=800",
            }
          },
          {
            id: 217,
            xPercent: 25,
            yPercent: 35,
            product: {
              id: "p1017",
              name: "Luxury Watch",
              price: 299.99,
              image: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=800",
            }
          },
          {
            id: 218,
            xPercent: 70,
            yPercent: 40,
            product: {
              id: "p1018",
              name: "Silk Evening Scarf",
              price: 59.99,
              image: "https://images.pexels.com/photos/1078973/pexels-photo-1078973.jpeg?auto=compress&cs=tinysrgb&w=800",
            }
          }
        ]
      }
    ]
  }
];
