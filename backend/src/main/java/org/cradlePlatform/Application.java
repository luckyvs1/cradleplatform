/**
 * Application contains the main() of cradlePlatform, which is the
 * first function run when the software starts.
 */
package org.cradlePlatform;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation;
import org.springframework.core.env.Environment;

//Turn off login page for restricting api endpoints
@SpringBootApplication(exclude = { SecurityAutoConfiguration.class})
public class Application {

	@Autowired
	private Environment env;

	@Bean
	public BCryptPasswordEncoder bCryptPasswordEncoder() {
		return new BCryptPasswordEncoder();
	}

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurerAdapter() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				String urls = env.getProperty("cors.urls");
				CorsRegistration reg = registry.addMapping("/api/**");
				for(String url: urls.split(",")) {
					reg.allowedOrigins(url);
				}
			}
		};
	}
}
