package com.examly.springappserver.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.netflix.discovery.AbstractDiscoveryClientOptionalArgs;

@Configuration
public class EurekaConfig {
    
    @Bean
    public AbstractDiscoveryClientOptionalArgs discoveryClientOptionalArgs(){
        return new DiscoveryClientOptionalArgs();
    }

}
