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
          }
        ]
      }
    ]
  }
];
