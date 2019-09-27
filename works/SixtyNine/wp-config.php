<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'sixtynine' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '6 j`E1ZZ*~LnoWV4k(;2IZ+Ytrl*icdO4Q<jygyWAZ%AMn4LUm0_`L8 VG2d+:>3' );
define( 'SECURE_AUTH_KEY',  'Pe39;hNvb<{:-whub*r?U# ueYvbs/5w,;Ou+HnDfBCUqi2PazsMA#}I#HV@f<Rr' );
define( 'LOGGED_IN_KEY',    'RP}i LNvH$i:+EW%K5TW_C$&Q>5nAZ^GeoCYp}qUY7gC6[p9X+r8-ZNNm -[}n*X' );
define( 'NONCE_KEY',        '3@!mD .7AG6!vp&?>8]GU,iyOfX? %*;O}Z~s!K$:8emU.$U*/&-n~=-|8|pUr<[' );
define( 'AUTH_SALT',        '<XEK!9]h0@9JH~3esx;0)26k1[XOi*;-41hh;$Dy$3U+L0$|SJDPrzO9L (3xh3#' );
define( 'SECURE_AUTH_SALT', '@?^9hZy>S4<^8iYVq8CBYiKWcw6d&cQ](O68fBL^2qy;xpA5vz6ZmbhL*>izX5X)' );
define( 'LOGGED_IN_SALT',   'ZSyr|z?26;MN:ev+z9eUPwcoJ4zkMYIZ.k%?YZKP,zr#A@mxFt@r-!3Fw0u$ch;)' );
define( 'NONCE_SALT',       'Q.~vOB_7j1z>,^g|TJx?+@~A;7p94$.|t~9NYU-0M<Y@7m]Zu|D$mR#^MiA.{Qou' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'sn_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
