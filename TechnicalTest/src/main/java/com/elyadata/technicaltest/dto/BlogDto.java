package com.elyadata.technicaltest.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BlogDto {

    private Long id;
    private String title;
    private String content;
    private String author;
    private int upvote;
    private int downvote;
}
