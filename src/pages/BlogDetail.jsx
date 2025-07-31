import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card.jsx';
import { Button } from '@/components/ui/button.jsx';
import { Badge } from '@/components/ui/badge.jsx';
import {
  ArrowLeft,
  Calendar,
  User,
  Clock,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  BookOpen,
} from 'lucide-react';
import { blogPosts } from '../data/blogData.js';

const BlogDetail = () => {
  const { blogId } = useParams();
  const navigate = useNavigate();
  
  // Find the current blog post
  const currentBlog = blogPosts.find(post => post.id === parseInt(blogId));
  
  // Get related posts (same category, excluding current post)
  const relatedPosts = blogPosts
    .filter(post => post.category === currentBlog?.category && post.id !== currentBlog?.id)
    .slice(0, 3);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [blogId]);

  if (!currentBlog) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center">
        <div className="text-center">
          <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Blog post not found</h1>
          <p className="text-gray-600 mb-4">The blog post you're looking for doesn't exist.</p>
          <Button onClick={() => navigate('/blog')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>
        </div>
      </div>
    );
  }

  const handleShare = (platform) => {
    const url = window.location.href;
    const title = currentBlog.title;
    
    let shareUrl = '';
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      default:
        return;
    }
    
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  const handleRelatedPostClick = (postId) => {
    navigate(`/blog/${postId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => navigate('/blog')}
          className="mb-6 hover:bg-gray-100"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Button>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Header */}
            <div className="mb-8">
              <Badge className="bg-blue-100 text-blue-700 mb-4">
                {currentBlog.category}
              </Badge>
              
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                {currentBlog.title}
              </h1>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-4 mb-6 text-gray-600">
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  <span className="text-sm">{currentBlog.author}</span>
                </div>
                
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">
                    {new Date(currentBlog.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>
                
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{currentBlog.readTime}</span>
                </div>
              </div>

              {/* Share Buttons */}
              <div className="flex items-center gap-2 mb-6">
                <span className="text-sm text-gray-600 mr-2">Share:</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleShare('facebook')}
                  className="p-2"
                >
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleShare('twitter')}
                  className="p-2"
                >
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleShare('linkedin')}
                  className="p-2"
                >
                  <Linkedin className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Featured Image */}
            <div className="mb-8">
              <img
                src={currentBlog.image}
                alt={currentBlog.title}
                className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/800x400/e0e0e0/757575?text=Blog+Image';
                }}
              />
            </div>

            {/* Blog Content */}
            <div className="prose prose-lg max-w-none mb-8">
              <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm border border-gray-100">
                <div 
                  className="text-gray-700 leading-relaxed whitespace-pre-line"
                  style={{ fontSize: '1.1rem', lineHeight: '1.8' }}
                >
                  {currentBlog.content}
                </div>
              </div>
            </div>

            {/* Author Info */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {currentBlog.author.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {currentBlog.author}
                    </h3>
                    <p className="text-gray-600">
                      Expert team providing comprehensive legal and financial solutions for businesses of all sizes.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Related Articles
                    </h3>
                    <div className="space-y-4">
                      {relatedPosts.map((post) => (
                        <div
                          key={post.id}
                          className="cursor-pointer group"
                          onClick={() => handleRelatedPostClick(post.id)}
                        >
                          <div className="flex gap-3">
                            <img
                              src={post.image}
                              alt={post.title}
                              className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                              onError={(e) => {
                                e.target.src = 'https://via.placeholder.com/64x64/e0e0e0/757575?text=Blog';
                              }}
                            />
                            <div className="flex-1 min-w-0">
                              <Badge className="bg-gray-100 text-gray-700 text-xs mb-1">
                                {post.category}
                              </Badge>
                              <h4 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-1">
                                {post.title}
                              </h4>
                              <p className="text-xs text-gray-500">{post.readTime}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Categories */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Categories
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[...new Set(blogPosts.map(post => post.category))].map((category) => (
                      <Badge
                        key={category}
                        variant="outline"
                        className="cursor-pointer hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors"
                        onClick={() => navigate(`/blog?category=${encodeURIComponent(category)}`)}
                      >
                        {category}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;

