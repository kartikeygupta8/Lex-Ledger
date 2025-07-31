import React from 'react';
import {
  Container,
  Typography,
  Box,
  Chip,
  Avatar,
  Breadcrumbs,
  Link,
  IconButton,
  Divider,
  Card,
  CardContent,
  CardMedia,
  Grid,
  useTheme,
  useMediaQuery,
  Paper
} from '@mui/material';
import {
  ArrowBack,
  Share,
  Facebook,
  Twitter,
  LinkedIn,
  AccessTime,
  Person,
  CalendarToday,
  Category
} from '@mui/icons-material';
import { motion } from 'framer-motion';

import { blogPosts } from '../data/blogData';
import { useNavigate, useParams } from 'react-router-dom';
import { sectionVariants } from '../pages/EnhancedBlogPage';


const BlogDetail = () => {
    const {blogId}=useParams();
    console.log({blogId})
const navigate=useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  // Find the current blog post
  const currentBlog = blogPosts.find(post => post.id === parseInt(blogId));
  
  // Get related posts (same category, excluding current post)
  const relatedPosts = blogPosts
    .filter(post => post.category === currentBlog?.category && post.id !== currentBlog?.id)
    .slice(0, 3);
const onBack=()=>{
    navigate("/blog")
}
 React.useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  if (!currentBlog) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h4" color="error">
          Blog post not found
        </Typography>
      </Container>
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

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Breadcrumbs */}
      <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 3 }}>
        <Link
          color="inherit"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onBack();
          }}
          sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
        >
          <ArrowBack sx={{ mr: 0.5, fontSize: 20 }} />{" "}
          Back to Blogs
        </Link>
        <Typography color="text.primary">{currentBlog.category}</Typography>
        <Typography color="text.primary" sx={{ 
          maxWidth: isMobile ? 150 : 300,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap'
        }}>
          {currentBlog.title}
        </Typography>
      </Breadcrumbs>

      <Grid container spacing={4}>
        {/* Main Content */}
        <Grid item xs={12} lg={8}>
          {/* Header Section */}
        <motion.div variants={sectionVariants} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          
          <Box sx={{ mb: 4 }}>
            <Chip 
              label={currentBlog.category} 
              color="#003366" 
              sx={{ mb: 2,color:"#003366" }}
            />
            
            <Typography 
              variant={isMobile ? "h4" : "h3"} 
              component="h1" 
              gutterBottom
              sx={{ 
                fontWeight: 'bold',
                lineHeight: 1.2,
                mb: 3
              }}
            >
              {currentBlog.title}
            </Typography>

            {/* Meta Information */}
            <Box sx={{ 
              display: 'flex', 
              flexWrap: 'wrap',
              alignItems: 'center', 
              gap: 2,
              mb: 3,
              color: 'text.secondary'
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <Person fontSize="small" />
                <Typography variant="body2">{currentBlog.author}</Typography>
              </Box>
              
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <CalendarToday fontSize="small" />
                <Typography variant="body2">
                  {new Date(currentBlog.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </Typography>
              </Box>
              
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <AccessTime fontSize="small" />
                <Typography variant="body2">{currentBlog.readTime}</Typography>
              </Box>
            </Box>

            {/* Share Buttons */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
              <Typography variant="body2" sx={{ mr: 1 }}>Share:</Typography>
              <IconButton 
                size="small" 
                onClick={() => handleShare('facebook')}
                sx={{ color: '#003366' }}
              >
                <Facebook />
              </IconButton>
              <IconButton 
                size="small" 
                onClick={() => handleShare('twitter')}
                sx={{ color: '#003366' }}
              >
                <Twitter />
              </IconButton>
              <IconButton 
                size="small" 
                onClick={() => handleShare('linkedin')}
                sx={{ color: '#003366' }}
              >
                <LinkedIn />
              </IconButton>
            </Box>
          </Box>
</motion.div>
              <motion.div variants={sectionVariants} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }}>

          <Box sx={{ mb: 4 }}>
            <img
              src={currentBlog.image}
              alt={currentBlog.title}
              style={{
                width: '100%',
                height: isMobile ? '250px' : '400px',
                objectFit: 'cover',
                borderRadius: theme.shape.borderRadius,
                boxShadow: theme.shadows[3]
              }}
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/800x400/e0e0e0/757575?text=Blog+Image';
              }}
            />
          </Box>
</motion.div>
          {/* Blog Content */}
                        <motion.div variants={sectionVariants} custom={3} initial="hidden" whileInView="visible" viewport={{ once: true }}>

          <Paper elevation={0} sx={{ p: isMobile ? 2 : 4, mb: 4 }}>
            <Typography 
              variant="body1" 
              sx={{ 
                lineHeight: 1.8,
                fontSize: '1.1rem',
                whiteSpace: 'pre-line'
              }}
            >
              {currentBlog.content}
            </Typography>
          </Paper>
</motion.div>

          {/* Author Info */}
                                  <motion.div variants={sectionVariants} custom={4} initial="hidden" whileInView="visible" viewport={{ once: true }}>

          <Paper elevation={1} sx={{ p: 3, mb: 4 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Avatar sx={{ width: 60, height: 60, bgcolor: '#003366' }}>
                {currentBlog.author.charAt(0)}
              </Avatar>
              <Box>
                <Typography variant="h6" gutterBottom>
                  {currentBlog.author}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Expert team providing comprehensive legal and financial solutions for businesses of all sizes.
                </Typography>
              </Box>
            </Box>
          </Paper>
</motion.div>

        </Grid>

        {/* Sidebar */}
        <Grid item xs={12} lg={4}>
          <Box sx={{ position: 'sticky', top: 20 }}>
            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <Paper elevation={1} sx={{ p: 3, mb: 3 }}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Related Articles
                </Typography>
                <Divider sx={{ mb: 2 }} />
                
                {relatedPosts.map((post) => (
                  <Card 
                    key={post.id} 
                    sx={{ 
                      mb: 2, 
                      cursor: 'pointer',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: theme.shadows[4]
                      },
                      transition: 'all 0.3s ease'
                    }}
                    onClick={() => window.location.reload()} // In a real app, this would navigate to the post
                  >
                    <CardMedia
                      component="img"
                      height="120"
                      image={post.image}
                      alt={post.title}
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/300x120/e0e0e0/757575?text=Blog+Image';
                      }}
                    />
                    <CardContent sx={{ p: 2 }}>
                      <Typography variant="body2" color="primary" gutterBottom>
                        {post.category}
                      </Typography>
                      <Typography 
                        variant="subtitle2" 
                        sx={{ 
                          fontWeight: 'bold',
                          lineHeight: 1.3,
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden'
                        }}
                      >
                        {post.title}
                      </Typography>
                      <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
                        {post.readTime}
                      </Typography>
                    </CardContent>
                  </Card>
                ))}
              </Paper>
            )}

            {/* Categories */}
 <motion.div variants={sectionVariants} custom={4} initial="hidden" whileInView="visible" viewport={{ once: true }}>

            <Paper elevation={1} sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                Categories
              </Typography>
              <Divider sx={{ mb: 2 }} />
              
              {[...new Set(blogPosts.map(post => post.category))].map((category) => (
                <Chip
                  key={category}
                  label={category}
                  variant="outlined"
                  size="small"
                  sx={{ 
                    m: 0.5,
                    cursor: 'pointer',
                    '&:hover': {
                      backgroundColor: '#003366',
                      color: 'white'
                    }
                  }}
                />
              ))}
            </Paper>
            </motion.div>

          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BlogDetail;

