import { motion } from "framer-motion";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "10 Best Nigerian Dishes You Can Order on Ezzy",
      excerpt:
        "Discover the most popular Nigerian dishes available for delivery and why they're customer favorites.",
      author: "Ezzy Team",
      date: "March 15, 2024",
      readTime: "5 min read",
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=250&fit=crop",
      category: "Food",
    },
    {
      id: 2,
      title: "How to Start Your Food Business with Ezzy",
      excerpt:
        "A comprehensive guide for restaurant owners looking to expand their reach through delivery services.",
      author: "Business Team",
      date: "March 12, 2024",
      readTime: "8 min read",
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=250&fit=crop",
      category: "Business",
    },
    {
      id: 3,
      title: "The Future of Food Delivery in Nigeria",
      excerpt:
        "Exploring trends and innovations shaping the food delivery landscape in Nigeria.",
      author: "Tech Team",
      date: "March 10, 2024",
      readTime: "6 min read",
      image:
        "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=400&h=250&fit=crop",
      category: "Technology",
    },
    {
      id: 4,
      title: "Healthy Eating: Nutritious Options on Ezzy",
      excerpt:
        "Find out how to maintain a healthy diet while enjoying the convenience of food delivery.",
      author: "Nutrition Team",
      date: "March 8, 2024",
      readTime: "4 min read",
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=250&fit=crop",
      category: "Health",
    },
    {
      id: 5,
      title: "Behind the Scenes: A Day in the Life of a Ezzy Rider",
      excerpt:
        "Meet our delivery heroes and learn about their daily experiences bringing food to your doorstep.",
      author: "Operations Team",
      date: "March 5, 2024",
      readTime: "7 min read",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop",
      category: "Stories",
    },
    {
      id: 6,
      title: "Seasonal Specials: What's Trending This Month",
      excerpt:
        "Discover the seasonal dishes and special offers that are making waves on our platform.",
      author: "Marketing Team",
      date: "March 3, 2024",
      readTime: "3 min read",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=250&fit=crop",
      category: "Trends",
    },
  ];

  const categories = [
    "All",
    "Food",
    "Business",
    "Technology",
    "Health",
    "Stories",
    "Trends",
  ];

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Latest from Our Blog
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest news, tips, and insights from the world
            of food delivery
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                index === 0
                  ? "bg-primary-orange text-white"
                  : "bg-white text-gray-600 hover:bg-primary-orange hover:text-white"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-orange text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>

                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center text-primary-orange font-medium hover:text-orange-600 transition-colors duration-200"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </motion.button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(255,107,53,0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary-orange text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition-all duration-300"
          >
            Load More Articles
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
