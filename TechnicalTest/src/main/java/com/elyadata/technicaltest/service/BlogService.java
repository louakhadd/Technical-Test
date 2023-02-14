package com.elyadata.technicaltest.service;

import com.elyadata.technicaltest.dto.BlogDto;

import java.util.List;

public interface BlogService {
    List<BlogDto> findAllBlogs();
    BlogDto findById(Long id);

    BlogDto addBlog(BlogDto blogDto);
    BlogDto voteForBlog(Long id, boolean vote);

    List<BlogDto> findBlogBySearch(BlogDto searchBlogDto);
}
