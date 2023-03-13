import {Injectable} from '@angular/core';

export interface ProductInterface {
  name: string,
    price: number,
  description: string,
  image:string,
  dimensions: {
    width?: string,
    height?: string,
    depth?: string
},
  packaging: {
    weight: string,
      dimensions: string
  },
  reviews:
    {
      rating: number,
      comment: string,
      author: string
    }[],

}

@Injectable({
  providedIn: 'root'
})
export class ContentService {

    furniture: ProductInterface[]= [
      {
        name: "Eames Lounge Chair",
        price: 2999.99,
        description: "Iconic mid-century modern design by Charles and Ray Eames.",
        image: "https://images.unsplash.com/photo-1534532282843-42c44341c2c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        dimensions: {
          width: "32.75 inches",
          height: "33.75 inches",
          depth: "32.75 inches"
        },
        packaging: {
          weight: "70 pounds",
          dimensions: "34 x 34 x 23 inches"
        },
        reviews: [
          {
            rating: 5,
            comment: "This chair is amazing! It's comfortable and stylish. I get compliments on it all the time.",
            author: "Jane Smith"
          },
          {
            rating: 4,
            comment: "I love the design of this chair, but it's not as comfortable as I thought it would be.",
            author: "John Doe"
          }
        ]
      },
      {
        name: "Malm Bed Frame",
        price: 399.99,
        description: "Clean and simple design that works with any decor style.",
        image: "https://images.unsplash.com/photo-1531835551805-16d864c8d311?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        dimensions: {
          width: "66.5 inches",
          height: "39.75 inches",
          depth: "83.125 inches"
        },
        packaging: {
          weight: "152 pounds",
          dimensions: "84.75 x 8 x 6.25 inches"
        },
        reviews: [
          {
            rating: 5,
            comment: "This bed is exactly what I was looking for! It's easy to assemble and looks great in my room.",
            author: "Sara Johnson"
          },
          {
            rating: 3,
            comment: "The bed is fine, but the packaging was damaged when it arrived.",
            author: "Chris Lee"
          }
        ]
      },
      {
        name: "Hemnes Bookcase",
        price: 249.99,
        description: "Sturdy and stylish bookcase with adjustable shelves.",
        image: "https://images.unsplash.com/photo-1588111948296-83a8e036e004?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=411&q=80",
        dimensions: {
          width: "35.375 inches",
          height: "77.5 inches",
          depth: "14.125 inches"
        },
        packaging: {
          weight: "129 pounds",
          dimensions: "81 x 15.5 x 5.5 inches"
        },
        reviews: [
          {
            rating: 4,
            comment: "This bookcase is really nice. It was easy to put together and looks great in my office.",
            author: "Emily Chen"
          },
          {
            rating: 2,
            comment: "I was disappointed with the quality of this bookcase. The shelves feel flimsy and the finish is not very durable.",
            author: "Tom Smith"
          }
        ]
      },
    {
      name: "Mid-Century Modern Sofa",
      price: 899.99,
      description: "Stylish mid-century modern sofa with a tufted back and tapered legs.",
      image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      dimensions: {
        width: "78 inches",
        height: "34 inches",
        depth: "32 inches"
      },
      packaging: {
        weight: "150 pounds",
        dimensions: "80 x 36 x 34 inches"
      },
      reviews: [
        {
          rating: 5,
          comment: "This sofa is beautiful and comfortable. It looks great in my living room.",
          author: "Emily"
        },
        {
          rating: 4,
          comment: "The sofa arrived on time and was easy to assemble, but the cushions are a bit firm for my liking.",
          author: "Mark"
        }
      ]
    },
    {
      name: "Rustic Coffee Table",
      price: 299.99,
      description: "Solid wood coffee table with a rustic finish and metal legs.",
      image: "https://images.unsplash.com/photo-1531694289743-6ce6b21921b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      dimensions: {
        width: "48 inches",
        height: "18 inches",
        depth: "24 inches"
      },
      packaging: {
        weight: "70 pounds",
        dimensions: "50 x 20 x 26 inches"
      },
      reviews: [
        {
          rating: 5,
          comment: "This coffee table is well-made and has a unique rustic look that I love.",
          author: "Chris"
        },
        {
          rating: 3,
          comment: "The table arrived with a few scratches, but customer service was helpful in resolving the issue.",
          author: "Jessica"
        }
      ]
    },
    {
      name: "Upholstered Dining Chair",
      price: 149.99,
      description: "Comfortable dining chair with a padded seat and backrest.",
      image: "https://images.unsplash.com/photo-1596162954151-cdcb4c0f70a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      dimensions: {
        width: "20 inches",
        height: "36 inches",
        depth: "22 inches"
      },
      packaging: {
        weight: "25 pounds",
        dimensions: "24 x 22 x 38 inches"
      },
      reviews: [
        {
          rating: 4,
          comment: "These chairs are comfortable and stylish, but they were a bit difficult to assemble.",
          author: "David"
        },
        {
          rating: 5,
          comment: "I am very happy with these chairs. They look great in my dining room and are very comfortable.",
          author: "Melissa"
        }
      ]
    }

]
    decor: ProductInterface[]= [
      {
        name: "Geometric Wall Art",
        price: 59.99,
        description: "Set of 3 modern geometric wall art prints.",
        image: "https://images.unsplash.com/photo-1543487945-139a97f387d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=380&q=80",
        dimensions: {
          width: "16 inches",
          height: "20 inches"
        },
        packaging: {
          weight: "3 pounds",
          dimensions: "22 x 18 x 1.5 inches"
        },
        reviews: [
          {
            rating: 2,
            comment: "These prints are really ugly. They add a terrible touch to my living room.",
            author: "Sarah"
          },
          {
            rating: 1,
            comment: "I absolutely hate these prints! They are even worse in person than in the pictures.",
            author: "David"
          }
        ]
      },
      {
        name: "Macrame Wall Hanging",
        price: 29.99,
        description: "Handmade macrame wall hanging made with 100% cotton rope.",
        image: "https://images.unsplash.com/photo-1593853949860-6becb4ea1b38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        dimensions: {
          width: "12 inches",
          height: "28 inches"
        },
        packaging: {
          weight: "1 pound",
          dimensions: "15 x 4 x 4 inches"
        },
        reviews: [
          {
            rating: 5,
            comment: "This wall hanging is beautiful and well-made. It looks great in my bedroom.",
            author: "Lisa"
          },
          {
            rating: 4,
            comment: "I really like the design of this wall hanging, but it was smaller than I expected.",
            author: "Mike"
          }
        ]
      },
      {
        name: "Succulent Planter Set",
        price: 39.99,
        description: "Set of 3 ceramic succulent planters in geometric shapes.",
        image: "https://images.unsplash.com/photo-1484885192048-9696607347da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        dimensions: {
          width: "3.5 inches",
          height: "3 inches"
        },
        packaging: {
          weight: "2 pounds",
          dimensions: "9 x 9 x 5 inches"
        },
        reviews: [
          {
            rating: 3,
            comment: "These planters are cute, but they are smaller than I expected and the colors are not as vibrant as in the pictures.",
            author: "Emily"
          },
          {
            rating: 5,
            comment: "I love these planters! They are the perfect size for my succulents and the geometric shapes add a nice touch.",
            author: "Sam"
          }
        ]
      },
    {
      name: "Ceramic Vase",
      price: 29.99,
      description: "Handcrafted ceramic vase with a glazed finish.",
      image: "https://images.unsplash.com/photo-1612152643129-fe77b7a0458d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      dimensions: {
        width: "6 inches",
        height: "10 inches"
      },
      packaging: {
        weight: "2 pounds",
        dimensions: "12 x 8 x 8 inches"
      },
      reviews: [
        {
          rating: 4,
          comment: "This vase is beautiful and well-made, but it's a bit smaller than I expected.",
          author: "Sarah"
        },
        {
          rating: 5,
          comment: "I absolutely love this vase! The colors are stunning and it looks great on my bookshelf.",
          author: "Jenna"
        }
      ]
    },
    {
      name: "Framed Wall Art",
      price: 49.99,
      description: "Framed print of a colorful abstract painting.",
      image: "https://images.unsplash.com/photo-1514454923228-7ef54f9251c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
      dimensions: {
        width: "16 inches",
        height: "20 inches"
      },
      packaging: {
        weight: "3 pounds",
        dimensions: "18 x 22 x 2 inches"
      },
      reviews: [
        {
          rating: 5,
          comment: "This wall art is simply stunning! The colors are vibrant and it looks great in my living room.",
          author: "Mike"
        },
        {
          rating: 4,
          comment: "The print is beautiful, but the frame is a bit flimsy.",
          author: "Kelly"
        }
      ]
    },
    {
      name: "Decorative Throw Pillow",
      price: 19.99,
      description: "Soft, plush throw pillow with a colorful geometric pattern.",
      image: "https://images.unsplash.com/photo-1628992304915-1f67982fd774?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      dimensions: {
        width: "18 inches",
        height: "18 inches"
      },
      packaging: {
        weight: "1 pound",
        dimensions: "20 x 20 x 4 inches"
      },
      reviews: [
        {
          rating: 2,
          comment: "This pillow is so soft and comfortable, and the pattern is lovely.",
          author: "Lisa"
        },
        {
          rating: 1,
          comment: "The pillow is fine, but the colors are a bit brighter than I expected.",
          author: "John"
        }
      ]
    }
]
    kitchenware: ProductInterface[]= [
      {
        name: "Non-Stick Fry Pan",
        price: 39.99,
        description: "12-inch non-stick frying pan with a stainless steel handle.",
        image: "https://images.unsplash.com/photo-1581622558638-818128465982?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        dimensions: {
          height: "12 inches",
          depth: "2.5 inches"
        },
        packaging: {
          weight: "2.5 pounds",
          dimensions: "22 x 13 x 3 inches"
        },
        reviews: [
          {
            rating: 5,
            comment: "This is the best frying pan I've ever owned! Nothing sticks to it and it heats evenly.",
            author: "Alex"
          },
          {
            rating: 4,
            comment: "This is a great frying pan for the price. The non-stick coating works well, but the handle can get hot.",
            author: "Sarah"
          }
        ]
      },
      {
        name: "Stainless Steel Mixing Bowls",
        price: 29.99,
        description: "Set of 3 stainless steel mixing bowls with non-slip silicone bottoms.",
        image: "https://images.unsplash.com/photo-1579755219379-786a5095a5bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        dimensions: {
          height: "8 inches",
          width: "10 inches",
        },
        packaging: {
          weight: "5 pounds",
          dimensions: "14 x 14 x 8 inches"
        },
        reviews: [
          {
            rating: 5,
            comment: "These bowls are amazing! They are sturdy and the non-slip bottoms are a great feature.",
            author: "John"
          },
          {
            rating: 4,
            comment: "These bowls are great, but I wish they came with lids.",
            author: "Linda"
          }
        ]
      },
      {
        name: "Electric Hand Mixer",
        price: 49.99,
        description: "5-speed electric hand mixer with turbo boost function.",
        image: "https://images.unsplash.com/photo-1589985270319-40629f6ae936?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        dimensions: {
          width: "3 inches",
          height: "7 inches"
        },
        packaging: {
          weight: "3 pounds",
          dimensions: "10 x 8 x 5 inches"
        },
        reviews: [
          {
            rating: 3,
            comment: "This hand mixer works fine, but it's a bit noisy and the cord is a bit short.",
            author: "Julie"
          },
          {
            rating: 5,
            comment: "This is a great hand mixer! It's powerful and easy to use.",
            author: "Tom"
          }
        ]
      },
      {
        name: "6-Piece Knife Set",
        price: 59.99,
        description: "Set of 6 stainless steel knives with a wooden block.",
        image: "https://images.unsplash.com/photo-1556911220-dabc1f02913a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        dimensions: {
          width: "8 x 4 x 10 inches",
          height: "8 inches",
        },
        packaging: {
          weight: "5 pounds",
          dimensions: "12 x 10 x 5 inches"
        },
        reviews: [
          {
            rating: 4,
            comment: "These knives are very sharp and the wooden block looks great on my countertop.",
            author: "Anna"
          },
          {
            rating: 5,
            comment: "This set is fantastic! The knives are well-made and the wooden block is very sturdy.",
            author: "Dave"
          }
        ]
      },
      {
        name: "Baking Rack",
        price: 14.99,
        description: "Reusable silicone baking mat with non-stick surface.",
        image: "https://images.unsplash.com/photo-1532499016263-f2c3e89de9cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
        dimensions: {
          width: "16 inches",
          height: "12 inches"
        },
        packaging: {
          weight: "1 pound",
          dimensions: "14 x 10 x 1 inches"
        },
        reviews: [
          {
            rating: 5,
            comment: "This baking mat is amazing! Nothing sticks to it and it's very easy to clean.",
            author: "Beth"
          },
          {
            rating: 4,
            comment: "This is a great baking mat, but it's a bit smaller than I expected.",
            author: "Mike"
          }
        ]
      },
      {
        name: "Electric Kettle",
        price: 39.99,
        description: "1.7 liter electric kettle with adjustable temperature settings.",
        image: "https://images.unsplash.com/photo-1647619124290-10fb9273b4b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        dimensions: {
          width: "8 inches",
          height: "9 inches"
        },
        packaging: {
          weight: "3 pounds",
          dimensions: "10 x 10 x 8 inches"
        },
        reviews: [
          {
            rating: 5,
            comment: "This kettle is fantastic! It heats up quickly and the temperature settings are very useful.",
            author: "Emily"
          },
          {
            rating: 3,
            comment: "This kettle works fine, but it's a bit noisy and the water level indicator is hard to see.",
            author: "Ben"
          }
        ]
      }
    ]

  allContent: ProductInterface[] | undefined

  cart: {product: ProductInterface, quantity: number}[] = []

  constructor() {
      if (!this.allContent) {
        this.allContent = this.furniture.concat(this.decor, this.kitchenware)
      }
  }

  getCart(){
      return this.cart || []
  }

  addToCart(product: ProductInterface, quantity: number) {
      this.cart.push({product, quantity})
  }

  clearCart(){
      this.cart = []
  }

  removeFromCart(product: ProductInterface, quantity: number) {
    for (const cartItem of this.cart) {
      if (cartItem.product.name === product.name){
        if (quantity > cartItem.quantity){

        }
      }
    }
  }

  getProduct(name: string) {
    for (const product of this.allContent || this.furniture.concat(this.decor, this.kitchenware)) {
      if (product.name === name){
        return product
      }
    }
    return undefined
  }

  getContent(){
      let content = this.allContent || this.furniture.concat(this.decor, this.kitchenware)
      this.shuffleArray(content)
      return content
  }

  shuffleArray(array: ProductInterface[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  getFurniture(){
    return this.furniture
  }

  getKitchenware() {
    return this.kitchenware
  }

  getDecor() {
    return this.decor
  }
}
