/**
 * @description Mock database for products
 * **/
const electronicsDb = [
  {
    id: 1,
    listed: "1 day ago",
    user: {
      name: "Kelly Simpson",
      avatar:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      acctStatus: {
        isVerified: true,
        topSeller: true,
      },
      reviews: {
        count: 85,
      },
      listings: {
        count: 275,
      },
      sales: {
        count: 450,
      },
    },
    title: "CVT Classic TV",
    price: "$850.00",
    details: {
      // imageUrl: "https://via.placeholder.com/300x200",
      imageUrl:
        "https://images.pexels.com/photos/5721908/pexels-photo-5721908.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "65' Display • 4K • 120Hz",
      condition: "Like New",
      brand: "Samsung",
      model: "QLED",
      category: ["Electronics", "TVs", "4K"],
    },
    location: "Denver, CO",
  },
  {
    id: 2,
    listed: "2 Weeks ago",
    user: {
      name: "Lexa Theely",
      avatar:
        "https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      acctStatus: {
        isVerified: true,
        topSeller: true,
      },
      reviews: {
        count: 85,
      },
      listings: {
        count: 215,
      },
      sales: {
        count: 350,
      },
    },
    title: "Canon EOS R155",
    price: "$1,500.00",
    details: {
      imageUrl:
        "https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Full Frame Mirrorless Camera",
      condition: "Like New",
      brand: "Canon",
      model: "EOS R155",
      category: ["Electronics", "Cameras", "Mirrorless"],
    },
    location: "Denver, CO",
  },
  {
    id: 3,
    listed: "5 day ago",
    user: {
      name: "Alex Thompson",
      avatar:
        "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      acctStatus: {
        isVerified: true,
        topSeller: true,
      },
      reviews: {
        count: 85,
      },
      listings: {
        count: 165,
      },
      sales: {
        count: 240,
      },
    },
    title: "Sony Headphones",
    price: "$150.00",
    details: {
      imageUrl: "https://via.placeholder.com/300x200",
      description: "Noise Cancelling Headphones",
      condition: "Like New",
      brand: "Sony",
      model: "WH-1000XM3",
      category: ["Electronics", "Headphones", "Wireless"],
    },
    location: "San Francisco, CA",
  },
  {
    id: 4,
    listed: "3 days ago",
    user: {
      name: "Sophie Brown",
      avatar:
        "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      acctStatus: {
        isVerified: true,
        topSeller: false,
      },
      reviews: {
        count: 5,
      },
      listings: {
        count: 99,
      },
      sales: {
        count: 69,
      },
    },
    title: "Dell XPS 15",
    price: "$1,200.00",
    details: {
      imageUrl: "https://via.placeholder.com/300x200",
      description: "15' Display • 16GB RAM • 512GB SSD",
      condition: "Like New",
      brand: "Dell",
      model: "XPS 15",
      category: ["Electronics", "Laptops", "Windows"],
    },
    location: "Seattle, WA",
  },
  {
    id: 5,
    listed: "1 month ago",
    user: {
      name: "Jake Miller",
      avatar:
        "https://images.pexels.com/photos/2128816/pexels-photo-2128816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      acctStatus: {
        isVerified: true,
        topSeller: false,
      },
      reviews: {
        count: 20,
      },
      listings: {
        count: 50,
      },
      sales: {
        count: 100,
      },
    },
    title: "Nintendo Switch",
    price: "$300.00",
    details: {
      imageUrl: "https://via.placeholder.com/300x200",
      description: "32GB • Red/Blue Joycons",
      condition: "Like New",
      brand: "Nintendo",
      model: "Switch",
      category: ["Electronics", "Gaming", "Console"],
    },
    location: "Chicago, IL",
  },
  {
    id: 6,
    listed: "1 month ago",
    user: {
      name: "Emma Garcia",
      avatar:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      acctStatus: {
        isVerified: true,
        topSeller: true,
      },
      reviews: {
        count: 120,
      },
      listings: {
        count: 400,
      },
      sales: {
        count: 800,
      },
    },
    title: "LG Soundbar",
    price: "$250.00",
    details: {
      imageUrl: "https://via.placeholder.com/300x200",
      description: "Dolby Atmos • 500W",
      condition: "Like New",
      brand: "LG",
      model: "SK9Y",
      category: ["Electronics", "Speakers", "Soundbar"],
    },
    location: "Miami, FL",
  },
];

const clothingDb = [
  {
    id: 1,
    listed: "1 day ago",
    user: {
      name: "John Doe",
      avatar:
        "https://images.pexels.com/photos/2287252/pexels-photo-2287252.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      acctStatus: {
        isVerified: true,
        topSeller: true,
      },
      reviews: {
        count: 55,
      },
      listings: {
        count: 185,
      },
      sales: {
        count: 325,
      },
    },
    title: "Wool Sweater",
    price: "$30.00",
    details: {
      // imageUrl: "https://via.placeholder.com/300x200",
      imageUrl:
        "https://images.pexels.com/photos/45982/pexels-photo-45982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description: "Lorem ipsum dolor sit amet, consect.",
      condition: "Like New",
      brand: "H&M",
      model: "Sweater",
      category: ["Clothing", "Sweaters", "Wool"],
    },
    location: "Denver, CO",
  },
  {
    id: 2,
    listed: "2 Weeks ago",
    user: {
      name: "Jane Doe",
      avatar:
        "https://images.pexels.com/photos/732425/pexels-photo-732425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      acctStatus: {
        isVerified: true,
        topSeller: false,
      },
      reviews: {
        count: 2,
      },
      listings: {
        count: 5,
      },
      sales: {
        count: 25,
      },
    },
    title: "Clothing Outfit",
    price: "$50.00",
    details: {
      imageUrl: "https://via.placeholder.com/300x200",
      description: "Lorem ipsum dolor sit amet, consect.",
      condition: "Like New",
      brand: "H&M",
      model: "Outfit",
      category: ["Clothing", "Outfit", "Wool"],
    },
    location: "Denver, CO",
  },
  {
    id: 3,
    listed: "5 day ago",
    user: {
      name: "Henry Deed",
      avatar:
        "https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      acctStatus: {
        isVerified: true,
        topSeller: true,
      },
      reviews: {
        count: 43,
      },
      listings: {
        count: 200,
      },
      sales: {
        count: 120,
      },
    },
    title: "Women's Jacket",
    price: "$45.00",
    details: {
      imageUrl: "https://via.placeholder.com/300x200",
      description: "Lorem ipsum dolor sit amet, consect.",
      condition: "Like New",
      brand: "H&M",
      model: "Jacket",
      category: ["Clothing", "Jacket", "Wool"],
    },
    location: "Denver, CO",
  },
  {
    id: 4,
    listed: "3 days ago",
    user: {
      name: "Sarah Smith",
      avatar:
        "https://images.pexels.com/photos/2123778/pexels-photo-2123778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      acctStatus: {
        isVerified: true,
        topSeller: false,
      },
      reviews: {
        count: 12,
      },
      listings: {
        count: 35,
      },
      sales: {
        count: 70,
      },
    },
    title: "Men's Jacket",
    price: "$80.00",
    details: {
      imageUrl: "https://via.placeholder.com/300x200",
      description: "Lorem ipsum dolor sit amet, consect.",
      condition: "Like New",
      brand: "H&M",
      model: "Jacket",
      category: ["Clothing", "Jacket", "Wool"],
    },
    location: "New York, NY",
  },
  {
    id: 5,
    listed: "1 month ago",
    user: {
      name: "Emily Johnson",
      avatar:
        "https://images.pexels.com/photos/2167673/pexels-photo-2167673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      acctStatus: {
        isVerified: true,
        topSeller: true,
      },
      reviews: {
        count: 78,
      },
      listings: {
        count: 250,
      },
      sales: {
        count: 500,
      },
    },
    title: "Summer Dress",
    price: "$55.00",
    details: {
      imageUrl: "https://via.placeholder.com/300x200",
      description: "Lorem ipsum dolor sit amet, consect.",
      condition: "Like New",
      brand: "H&M",
      model: "Dress",
      category: ["Clothing", "Dress", "Wool"],
    },
    location: "Los Angeles, CA",
  },
];

/**
 * @description Sections for products
 * **/
export const sections = [
  {
    id: "electronics-section",
    className: "product-section",
    backgroundColor: "#000000",
    sectionHeader: "Electronics",
    sectionName: "Level Up Your Gear",
    dbItems: electronicsDb, // mockDb
  },
  {
    id: "clothing-section",
    className: "product-section",
    backgroundColor: "#3C3C3C",
    sectionHeader: "Clothing & Attire",
    sectionName: "Looking For A New Fit?",
    sectionMsg: "New Styles From Top Sellers Uploaded Daily!",
    dbItems: clothingDb, // mockDb
  },
];
