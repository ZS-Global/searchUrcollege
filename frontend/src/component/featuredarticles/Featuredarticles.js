import React from 'react';
import './Featuredarticles.css'; // Import the CSS file

const FeaturedArticles = () => {
  // Sample data for featured articles (you can replace this with actual data)
  const featuredArticles = [
    {
      title: 'Top 10 Study Tips for Success',
      author: 'John Doe',
      date: 'September 5, 2023',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod ante id justo fringilla, id aliquet neque varius.',
    },
    {
      title: 'The Importance of STEM Education',
      author: 'Jane Smith',
      date: 'August 28, 2023',
      content:
        'Pellentesque vel velit nec sem posuere feugiat. Curabitur ultricies, leo in dapibus sollicitudin, urna odio facilisis.',
    },
    {
      title: 'Top 10 Study Tips for Success',
      author: 'John Doe',
      date: 'September 5, 2023',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod ante id justo fringilla, id aliquet neque varius.',
    },
    {
      title: 'The Importance of STEM Education',
      author: 'Jane Smith',
      date: 'August 28, 2023',
      content:
        'Pellentesque vel velit nec sem posuere feugiat. Curabitur ultricies, leo in dapibus sollicitudin, urna odio facilisis.',
    },
    // Add more featured articles here
  ];

  return (
    <section className="featured-articles">
      <h2>Featured Articles</h2>
      <div className="article-list">
        {featuredArticles.map((article, index) => (
          <div className="article" key={index}>
            <h3>{article.title}</h3>
            <p className="author">By {article.author}</p>
            <p className="date">{article.date}</p>
            <p className="content">{article.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedArticles;
