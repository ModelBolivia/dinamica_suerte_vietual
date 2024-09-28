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
define( 'AUTH_KEY',         'r_,~ Adl%`%I0hZ^|iQV~w|38Y}4M0z-S{i)o`mX+Hdsy`y[el!Msavy1`XqYSSe' );
define( 'SECURE_AUTH_KEY',  '~J*3kqC-}s0=K_p?|p}EsjZ(^!r=NhFz}A}**M|sAJ+lukJqMA>Bu^CC)`VO,[vS' );
define( 'LOGGED_IN_KEY',    '6VW {8j*o?C8>rP$X%)uIW]OEkF(SpxUUwyF@Fwe,s7?jQW&l<eh|84pMkHX76(!' );
define( 'NONCE_KEY',        'lm>PN|T>FKs@;:<oq5@!kWGiN[E}TuaRb`;X+^zQA-q*cl~y%j+.xiQapz3an ,V' );
define( 'AUTH_SALT',        '!x2qwU:2ke|i{i6t5N``Zr:?jM2o,Q-OR:*d+*((R:3o(k?(j(m=Ff$x!>S%bVmd' );
define( 'SECURE_AUTH_SALT', '91*&R%8a>qhmF3Nk5e;wKa1=%l*GThPLsPX#._2hB#{np`Zv{0DyXj.?cdYHbB:D' );
define( 'LOGGED_IN_SALT',   'Lb3$X-0SWR6r_(+NuH x(>1P:HH[_GxC#R5cP$;b>nve7wE5n{R:#U:?u:b`Os_6' );
define( 'NONCE_SALT',       'U$410>d63sce<a;-k|`~:E:Q|Y?HUKjF;o$?{Wrl?[G.C51,616:kJ7XMF=yRih.' );

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
