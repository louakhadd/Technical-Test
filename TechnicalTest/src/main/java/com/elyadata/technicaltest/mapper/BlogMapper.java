package com.elyadata.technicaltest.mapper;

import com.elyadata.technicaltest.dto.BlogDto;
import com.elyadata.technicaltest.model.Blog;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.WARN, uses = {})
public interface BlogMapper extends EntityMapper<BlogDto, Blog>{
}
