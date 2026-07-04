export interface Activity {
  id: string;
  name: string;
  rating: number;
  reviewCount: number;
  description: string;
  image: string;
  location?: string;
  duration?: string;
}

// export const mockItinerary: Activity[][] = [];

export const mockItinerary: Activity[][] = [
  [
    {
      id: "1",
      name: "India Gate",
      rating: 4.6,
      reviewCount: 281124,
      description: "India Gate is a war memorial located in New Delhi, along the Rajpath. It is dedicated to the 82,000 soldiers, both Indian and British.",
      image: 'https://images.pexels.com/photos/789750/pexels-photo-789750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      location: "Rajpath, New Delhi",
      duration: "1-2 hours"
    },
    {
      id: "2",
      name: "Red Fort",
      rating: 4.5,
      reviewCount: 168729,
      description: "The Red Fort is a historical fort in the old Delhi area, on the banks of Yamuna river.",
      image: "https://images.pexels.com/photos/14094276/pexels-photo-14094276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      location: "Netaji Subhash Marg, Lal Qila, Chandni Chowk",
      duration: "2-3 hours"
    },
    {
      id: "3",
      name: "Qutub Minar",
      rating: 4.5,
      reviewCount: 151556,
      description: "Qutub Minar is a minaret or a victory tower located in the Qutub complex, a UNESCO World Heritage Site in Delhi's Mehrauli area.",
      image: "https://images.pexels.com/photos/30254903/pexels-photo-30254903/free-photo-of-qutub-minar-in-delhi-iconic-mughal-landmark.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      location: "Mehrauli, New Delhi",
      duration: "1-2 hours"
    },
        {
      id: "4",
      name: "Lotus Temple",
      rating: 4.5,
      reviewCount: 67772,
      description: "Located in the national capital of New Delhi, the Lotus Temple is an edifice dedicated to the Baha'i faith.",
      image: "https://media.istockphoto.com/id/1025309350/photo/lotus-temple.webp?s=2048x2048&w=is&k=20&c=VWuyR9QQ5-s6ses8xNweQDeWLk4Ih6bCo1kcGbfJu00=",
      location: "Lotus Temple Rd, Bahapur",
      duration: "1 hour"
    },
    {
      id: "5",
      name: "Humayun's Tomb",
      rating: 4.3,
      reviewCount: 46024,
      description: "Humayun's tomb is the final resting place of the Mughal Emperor Humayun.",
      image: "https://images.pexels.com/photos/1359935/pexels-photo-1359935.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      location: "Mathura Road, Nizamuddin",
      duration: "1-2 hours"
    }
  ],
];