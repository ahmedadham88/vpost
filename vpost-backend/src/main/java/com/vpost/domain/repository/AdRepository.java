package com.vpost.domain.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;

import com.vpost.domain.entity.Ad;

public interface AdRepository extends MongoRepository<Ad, String> {

  List<Ad> findByTitle(@Param("title") String title);
}
