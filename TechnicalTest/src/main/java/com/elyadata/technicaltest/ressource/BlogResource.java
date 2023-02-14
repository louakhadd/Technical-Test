package com.elyadata.technicaltest.ressource;

import com.elyadata.technicaltest.dto.BlogDto;
import com.elyadata.technicaltest.service.BlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/blog")
public class BlogResource {

    @Autowired
    BlogService blogService;

    @GetMapping("/all")
    public ResponseEntity<List<BlogDto>> findAll(){
        return ResponseEntity.ok(blogService.findAllBlogs());
    }

    @GetMapping()
    public ResponseEntity<BlogDto> findBlog(@RequestParam Long id){
        return ResponseEntity.ok(blogService.findById(id));
    }

    @PostMapping()
    public ResponseEntity<BlogDto> addBlog(@RequestBody BlogDto blogDto){
        return ResponseEntity.ok(blogService.addBlog(blogDto));
    }

    @PostMapping("/vote")
    public ResponseEntity<BlogDto> voteForBlog(@RequestParam Long id, @RequestParam boolean vote){
        return ResponseEntity.ok(blogService.voteForBlog(id, vote));
    }

    @PostMapping("/search")
    public ResponseEntity<List<BlogDto>> voteForBlog(@RequestBody BlogDto blogDto){
        return ResponseEntity.ok(blogService.findBlogBySearch(blogDto));
    }
}
