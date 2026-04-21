import vitVelloreImg from "@/assets/vit-vellore.webp";
import srmChennaiImg from "@/assets/srm-chennai.jpg";
import amritaImg from "@/assets/amrita-university.jpg";
import amritaCoimbatoreImg from "@/assets/amrita-coimbatore.jpg";

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
    courses: ["B.Tech", "M.Tech"],
    fees: "₹2.1L - ₹4.5L/year",
    feesNum: 210000,
    ranking: 12,
    rating: 4.3,
    placements: "₹8.5 LPA avg | ₹44 LPA highest",
    cutoff: "VITEEE 65+ percentile",
    image: vitVelloreImg,
    overview: "VIT Vellore is a premier private university known for its excellent engineering programs and consistent placement records.",
  },
  {
    id: "2",
    name: "SRM Institute of Science and Technology",
    location: "Chennai, Tamil Nadu",
    state: "Tamil Nadu",
    type: "Deemed",
    courses: ["B.Tech", "M.Tech"],
    fees: "₹2.5L - ₹5L/year",
    feesNum: 250000,
    ranking: 18,
    rating: 4.1,
    placements: "₹7.2 LPA avg | ₹41 LPA highest",
    cutoff: "SRMJEEE 70+ percentile",
    image: srmChennaiImg,
    overview: "SRM IST is one of India's top-ranked universities offering excellent B.Tech and M.Tech programs with strong placement records.",
  },
  {
    id: "8",
    name: "Amrita Vishwa Vidyapeetham",
    location: "Coimbatore, Tamil Nadu",
    state: "Tamil Nadu",
    type: "Deemed",
    courses: ["B.Tech", "M.Tech"],
    fees: "₹2.8L - ₹5L/year",
    feesNum: 280000,
    ranking: 7,
    rating: 4.4,
    placements: "₹8 LPA avg | ₹42 LPA highest",
    cutoff: "AEEE / JEE Main",
    image: amritaImg,
    overview: "Amrita Vishwa Vidyapeetham is a NAAC A++ accredited deemed university and one of India's top-ranked institutions, known for excellence in engineering, research, and holistic education.",
  },
  {
    id: "5",
    name: "Vel Tech Rangarajan Dr. Sagunthala R&D Institute",
    location: "Chennai, Tamil Nadu",
    state: "Tamil Nadu",
    type: "Deemed",
    courses: ["B.Tech", "M.Tech"],
    fees: "₹1.5L - ₹3L/year",
    feesNum: 150000,
    ranking: 45,
    rating: 3.8,
    placements: "₹4.5 LPA avg | ₹18 LPA highest",
    cutoff: "VELSAT / JEE Main",
    image: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=400&h=250&fit=crop",
    overview: "Vel Tech is a deemed university in Chennai known for its engineering programs, NAAC A++ accreditation, and strong research focus.",
  },
  {
    id: "6",
    name: "Sathyabama Institute of Science and Technology",
    location: "Chennai, Tamil Nadu",
    state: "Tamil Nadu",
    type: "Deemed",
    courses: ["B.Tech", "M.Tech"],
    fees: "₹1.8L - ₹3.5L/year",
    feesNum: 180000,
    ranking: 40,
    rating: 3.9,
    placements: "₹5 LPA avg | ₹20 LPA highest",
    cutoff: "Sathyabama All India Entrance Exam",
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=400&h=250&fit=crop",
    overview: "Sathyabama is a deemed university in Chennai with strong engineering programs, NAAC A++ grade, and excellent campus infrastructure.",
  },
  {
    id: "7",
    name: "Kalasalingam Academy of Research and Education",
    location: "Krishnankoil, Tamil Nadu",
    state: "Tamil Nadu",
    type: "Deemed",
    courses: ["B.Tech", "M.Tech"],
    fees: "₹1.2L - ₹2.5L/year",
    feesNum: 120000,
    ranking: 50,
    rating: 3.7,
    placements: "₹4 LPA avg | ₹15 LPA highest",
    cutoff: "Direct Admission / JEE Main",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=250&fit=crop",
    overview: "Kalasalingam Academy (KARE) is a NAAC A++ accredited deemed university known for affordable engineering education and growing placement records.",
  },
  {
    id: "9",
    name: "Marwadi University",
    location: "Rajkot, Gujarat",
    state: "Gujarat",
    type: "Private",
    courses: ["B.Tech", "M.Tech"],
    fees: "₹1.4L - ₹2.8L/year",
    feesNum: 140000,
    ranking: 35,
    rating: 4.0,
    placements: "₹5.5 LPA avg | ₹25 LPA highest",
    cutoff: "JEE Main / GUJCET",
    image: marwadiImg,
    overview: "Marwadi University is a NAAC A+ accredited private university in Rajkot, Gujarat, known for its modern campus, industry-oriented engineering programs, and strong placement support.",
  },
  {
    id: "3",
    name: "Manipal Institute of Technology",
    location: "Manipal, Karnataka",
    state: "Karnataka",
    type: "Private",
    courses: ["B.Tech", "M.Tech"],
    fees: "₹3L - ₹5.5L/year",
    feesNum: 300000,
    ranking: 8,
    rating: 4.5,
    placements: "₹9.1 LPA avg | ₹48 LPA highest",
    cutoff: "MET 75+ percentile",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=250&fit=crop",
    overview: "MIT Manipal is a prestigious engineering institution with world-class infrastructure and strong industry connections.",
  },
];

export const states = [...new Set(colleges.map((c) => c.state))];
export const courseTypes = [...new Set(colleges.flatMap((c) => c.courses))];
