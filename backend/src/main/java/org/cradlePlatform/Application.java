/**
 * Application contains the main() of cradlePlatform, which is the
 * first function run when the software starts.
 */
package org.cradlePlatform;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Application {

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}
}
