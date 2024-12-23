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
define( 'AUTH_KEY',         'nh8lA@SB* 1|AK`)-p=9mWmY(yNYLO2mj$-D|=]86&2|7=.,mX,Ghn={.)1IH7rj' );
define( 'SECURE_AUTH_KEY',  'A(^S$9+f(>X:B|ZdS`Gf6p?-o7mWf{K;Wk!x!T3*DMy.a9Rrbt%4AIB.n;>NUwG_' );
define( 'LOGGED_IN_KEY',    '|pt/$l%g`4e;BJ/w+!h*zMD._DwCF5J&I&%xG{4*xF<8RNK+*0IJHi4 QlucRe@V' );
define( 'NONCE_KEY',        'MGt61sSz&(5cu`D:VlZz|iw$a<ZctXqpY99xMLd*5-(!N {wz<=<~Y&,p~[jS7!B' );
define( 'AUTH_SALT',        '_yubbw,R5eI!,q4f*9:}!%(V:z9^b/6F#DTf3l&|8(#qCYe5|W! uR;.09f5j{yQ' );
define( 'SECURE_AUTH_SALT', 'F)*u<^ T0[)LF> LuZNQ[8Ip*Lcj rh#{8GdB D!NBt_)@6cXqKK&GI3H@L]i6p]' );
define( 'LOGGED_IN_SALT',   '|s{3gzC^^t#.zl2+yJ5P|iI<<p0#+BeT)GdadXl+[VQ5F9Nd@onr};Mt#o>|dbtO' );
define( 'NONCE_SALT',       '&|@`xJS=$*N?>/AIot<MB!w83P^hEerIvDU#@x<Q!z$%tS0q>9d%$y`rpL!a~GN&' );

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
