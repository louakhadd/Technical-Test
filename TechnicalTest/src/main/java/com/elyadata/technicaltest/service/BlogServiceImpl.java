package com.elyadata.technicaltest.service;

import com.elyadata.technicaltest.dto.BlogDto;
import com.elyadata.technicaltest.mapper.BlogMapper;
import com.elyadata.technicaltest.model.Blog;
import com.elyadata.technicaltest.repository.BlogRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class BlogServiceImpl implements BlogService{

    @Autowired
    BlogRepository blogRepository;
    @Autowired
    BlogMapper blogMapper;

    private final Logger log = LoggerFactory.getLogger(BlogServiceImpl.class);

    @Override
    public List<BlogDto> findAllBlogs() {
        return blogMapper.toDto(blogRepository.findAll());
    }

    @Override
    public BlogDto findById(Long id) {
        return blogMapper.toDto(blogRepository.findById(id).get());
    }

    @Override
    public BlogDto addBlog(BlogDto blogDto) {
        Blog blog = blogRepository.save(blogMapper.toEntity(blogDto));
        return blogMapper.toDto(blog);
    }

    @Override
    public BlogDto voteForBlog(Long id, boolean vote) {
        BlogDto blogDto = new BlogDto();
        Optional<Blog> blog = blogRepository.findById(id);
        if (blog.isPresent()) {
            if (vote) {
                blog.get().setUpvote(blog.get().getUpvote() + 1);
            } else {
                blog.get().setDownvote(blog.get().getDownvote() + 1);
            }
           blogDto = blogMapper.toDto(blogRepository.save(blog.get()));
        }
        return blogDto;
    }

    @Override
    public List<BlogDto> findBlogBySearch(BlogDto searchBlogDto) {
        Specification<Blog> specification = new Specification<Blog>() {
            public Predicate toPredicate(Root<Blog> root, CriteriaQuery<?> query, CriteriaBuilder builder) {
                List<Predicate> predicates = new ArrayList<>();
                if (searchBlogDto.getAuthor() != null && !searchBlogDto.getAuthor().isEmpty()) {
                    predicates.add(builder.like(builder.upper(root.get("author")),
                            "%" + searchBlogDto.getAuthor().toUpperCase() + "%"));
                }
                if (searchBlogDto.getTitle() != null && !searchBlogDto.getTitle().isEmpty()) {
                    log.debug("get Type User where username equals to {} ",
                            searchBlogDto.getTitle());
                    predicates.add(builder.like(builder.upper(root.get("title")),
                            "%" + searchBlogDto.getTitle().toUpperCase() + "%"));
                }
                if (searchBlogDto.getContent() != null && !searchBlogDto.getContent().isEmpty()) {
                    log.debug("get Type User where identificationNumber equals to {} ",
                            searchBlogDto.getContent());
                    predicates.add(builder.like(builder.upper(root.get("content")),
                            "%" + searchBlogDto.getContent().toUpperCase() + "%"));
                }

                return builder.and(predicates.toArray(new Predicate[predicates.size()]));
            }
        };

        List<Blog> blogs = blogRepository.findAll(specification);
        return blogMapper.toDto(blogs);
    }
}
