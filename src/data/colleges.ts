import vitVelloreImg from "@/assets/vit-vellore.webp";
import srmChennaiImg from "@/assets/srm-chennai.jpg";

export interface College {
  id: string;
  name: string;
  location: string;
  state: string;
  type: "Private" | "Government" | "Deemed";
  courses: string[];
  fees: string;
  feesNum: number;
  ranking: number;
  rating: number;
  placements: string;
  cutoff: string;
  image: string;
  overview: string;
}

export const colleges: College[] = [
  {
    id: "1",
    name: "VIT Vellore",
    location: "Vellore, Tamil Nadu",
    state: "Tamil Nadu",
    type: "Private",
    courses: ["B.Tech", "M.Tech", "MBA", "MCA"],
    fees: "₹2.1L - ₹4.5L/year",
    feesNum: 210000,
    ranking: 12,
    rating: 4.3,
    placements: "₹8.5 LPA avg | ₹44 LPA highest",
    cutoff: "VITEEE 65+ percentile",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=250&fit=crop",
    overview: "VIT Vellore is a premier private university known for its excellent engineering programs and consistent placement records.",
  },
  {
    id: "2",
    name: "SRM Institute of Science and Technology",
    location: "Chennai, Tamil Nadu",
    state: "Tamil Nadu",
    type: "Deemed",
    courses: ["B.Tech", "MBBS", "MBA", "Law"],
    fees: "₹2.5L - ₹5L/year",
    feesNum: 250000,
    ranking: 18,
    rating: 4.1,
    placements: "₹7.2 LPA avg | ₹41 LPA highest",
    cutoff: "SRMJEEE 70+ percentile",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=250&fit=crop",
    overview: "SRM IST is one of India's top-ranked universities offering diverse programs across engineering, medicine, and management.",
  },
  {
    id: "3",
    name: "Manipal Institute of Technology",
    location: "Manipal, Karnataka",
    state: "Karnataka",
    type: "Private",
    courses: ["B.Tech", "M.Tech", "B.Arch"],
    fees: "₹3L - ₹5.5L/year",
    feesNum: 300000,
    ranking: 8,
    rating: 4.5,
    placements: "₹9.1 LPA avg | ₹48 LPA highest",
    cutoff: "MET 75+ percentile",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=250&fit=crop",
    overview: "MIT Manipal is a prestigious engineering institution with world-class infrastructure and strong industry connections.",
  },
  {
    id: "4",
    name: "Amity University",
    location: "Noida, Uttar Pradesh",
    state: "Uttar Pradesh",
    type: "Private",
    courses: ["B.Tech", "BBA", "Law", "B.Sc"],
    fees: "₹1.8L - ₹4L/year",
    feesNum: 180000,
    ranking: 25,
    rating: 3.9,
    placements: "₹5.5 LPA avg | ₹28 LPA highest",
    cutoff: "Direct Admission",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=250&fit=crop",
    overview: "Amity University is one of India's largest private universities offering 200+ programs across multiple disciplines.",
  },
  {
    id: "5",
    name: "BITS Pilani",
    location: "Pilani, Rajasthan",
    state: "Rajasthan",
    type: "Deemed",
    courses: ["B.Tech", "M.Tech", "MBA", "M.Sc"],
    fees: "₹4.5L - ₹6L/year",
    feesNum: 450000,
    ranking: 5,
    rating: 4.7,
    placements: "₹12 LPA avg | ₹60 LPA highest",
    cutoff: "BITSAT 280+",
    image: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=400&h=250&fit=crop",
    overview: "BITS Pilani is India's leading private technical institute consistently ranked among the top engineering colleges.",
  },
  {
    id: "6",
    name: "Symbiosis International University",
    location: "Pune, Maharashtra",
    state: "Maharashtra",
    type: "Deemed",
    courses: ["BBA", "MBA", "Law", "B.Sc"],
    fees: "₹3L - ₹6L/year",
    feesNum: 300000,
    ranking: 15,
    rating: 4.2,
    placements: "₹10 LPA avg | ₹35 LPA highest",
    cutoff: "SET 65+ percentile",
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=400&h=250&fit=crop",
    overview: "Symbiosis is renowned for its management, law, and liberal arts programs with excellent campus culture.",
  },
];

export const states = [...new Set(colleges.map((c) => c.state))];
export const courseTypes = [...new Set(colleges.flatMap((c) => c.courses))];
