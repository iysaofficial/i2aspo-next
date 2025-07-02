import { FaLayerGroup, FaBullseye, FaCrown, FaMicrophone, FaMedal } from "react-icons/fa";

const iconMap = {
  "flaticon-layers-2": <FaLayerGroup size={48} />,
  "flaticon-digital-marketing": <FaBullseye size={48} />,
  "flaticon-targeting": <FaBullseye size={48} />,
  "flaticon-crown-1": <FaCrown size={48} />,
  "flaticon-microphone": <FaMicrophone size={48} />,
  "flaticon-medal-1": <FaMedal size={48} />,
};

const categories = [
  {
    icon: "flaticon-layers-2",
    title: "Waste Treatment",
    desc: "Waste treatment refers to the activities required to ensure that waste has the least practicable impact on the environment",
    colorClass: "cat-red",
  },
  {
    icon: "flaticon-digital-marketing",
    title: "IoT And Its Applications",
    desc: "The main aim of Internet of Things (IoT) technology is to make the life of human beings easier, faster and smarter by automatically solve the various problems",
    colorClass: "cat-purple",
  },
  {
    icon: "flaticon-targeting",
    title: "Functional Food",
    desc: "A functional food is a food claimed to have an additional function by adding new ingredients or more of existing ingredients.",
    colorClass: "cat-blue",
  },
  {
    icon: "flaticon-crown-1",
    title: "Energy",
    desc: "In physics, energy is the quantitative property that must be transferred to a body or physical system to perform work on the body, or to heat it.",
    colorClass: "cat-orange",
  },
  {
    icon: "flaticon-microphone",
    title: "Research On Children With Special Needs",
    desc: "This area explores ways to support and improve the development, learning, and well-being of children with special needs through inclusive and innovative approaches.",
    colorClass: "cat-red",
  },
  {
    icon: "flaticon-medal-1",
    title: "Entrepreneurship",
    desc: "Entrepreneurship is an act of being an entrepreneur, or 'the owner or manager of a business enterprise who, by risk and initiative, attempts to make profit'.",
    colorClass: "cat-blue",
  },
];

export default function CategorySection() {
  return (
    <section className="categories-section">
      <div className="categories-header">
        <div className="categories-subtitle">Our Categories</div>
        <h2 className="categories-title">
          Select Categories For <br />
          Joining The Event
        </h2>
        <div className="categories-underline" />
      </div>
      <div className="categories-grid">
        {categories.map((cat, idx) => (
          <div className={`category-card ${cat.colorClass}`} key={cat.title}>
            <div className="category-icon">
              {iconMap[cat.icon]}
            </div>
            <div>
              <div className="category-title">{cat.title}</div>
              <div className="category-desc">{cat.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}