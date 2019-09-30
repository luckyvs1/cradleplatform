/**
 * DBService handles interfacing with the database, and contains functions to query the db.
 */
package org.cradlePlatform.controller;

import java.util.*;
import org.cradlePlatform.model.*;


class DBService {

	/**
	 * Returns true if the given combination of username and password matches an account in the database.
	 * @param username username of an account
	 * @param password password associated with username of an account
	 * @return true if matching user account exists in the db, else false.
	 */
	public static boolean verifyUsernamePassword(String username, String password) {
		// TODO: implement db query
		// Should check to see what kind of user as well? Method name would need changing or something
		return true;
	}

	/**
	 * Fetches user's data from the database and returns a User object.
	 * @param username
	 * @return
	 */
	public static User loadUserFromDb(String username) {
		// TODO: fetch user data from db and return it
		User user = new User();
		return user;
	}

	public static boolean saveReadingInDb(Reading reading) {
		// TODO: implement db query, raise exception if fail
		return true;
	}

	public static boolean saveReferralInDb(Referral referral) {
		// TODO: implement db query, raise exception if fail
		return true;
	}
}