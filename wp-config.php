<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'dinamica_suerte_virtual' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '@GhU*qyHCa!c6q1N![Lmmh7R0ir/V932Ve>bHlY)RY5p6b(J$5:^|Em5d?:<sLGA' );
define( 'SECURE_AUTH_KEY',  '38->nmqhn];_)rVZgsuy?U:h -.`HU(YuZdan<{sFJzt*eJgfy&B( gA{U11^M[K' );
define( 'LOGGED_IN_KEY',    'MPUXAx^d9<wS,p?KCQ3ZsVH52/hW7c+3xWK+`j)cQkF&MT->]@iqb8uHQCBAch*)' );
define( 'NONCE_KEY',        '/<4R6u*^fZ*30gS8JK<m&@}s503L.B^d;bekckoc$^,>1>+aec=`o$ApRRC#>Sl!' );
define( 'AUTH_SALT',        '(T3Noal3MO*F7p@.jKWjbSMl!O}] OQf0u}:D:t^3q-.]V9%BO|}S5YKP.D$j#oT' );
define( 'SECURE_AUTH_SALT', 'im4BFl$Cx8&D&yAzzb$ge*|M.#[64R-F(_bgpF*kcQFcJ*|/83`R?q5$n&4^>u-x' );
define( 'LOGGED_IN_SALT',   'N6+?T%3bSu|HRwu3[bRTRmGO~3XVeB~ZJyJb2SUZ&U^0~%!w_#,oDs2|e^%N_h}Z' );
define( 'NONCE_SALT',       'x5Gej`iEGP~7LfW<UmzCEJlg}g}+7T0g!f_3UoAx;X:jw3$88x*_ZKr6i8L=+0p[' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
