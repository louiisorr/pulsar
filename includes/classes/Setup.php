<?php
/**
 * Theme setup.
 *
 * @package Pulsar
 */

namespace Pulsar;

use Pulsar\Contracts\Bootable;

/**
 * Setup class.
 */
class Setup implements Bootable {

	/**
	 * Bootstraps the class' actions/filters.
	 *
	 * @return void
	 */
	public function boot() {
		add_action( 'after_setup_theme', [ $this, 'supports' ], 5 );
		add_action( 'init', [ $this, 'menus' ] );
		add_action( 'init', [ $this, 'image_sizes' ] );
		add_filter( 'image_size_names_choose', [ $this, 'image_size_names' ] );
	}

	/**
	 * Set up theme support.
	 *
	 * @return void
	 */
	public function supports() {

		// Disable core block patterns.
		remove_theme_support( 'core-block-patterns' );
	}

	/**
	 * Register menus.
	 *
	 * @return void
	 */
	public function menus() {

		register_nav_menus(
			[
				'primary' => esc_html_x( 'Primary', 'nav menu location', 'pulsar' ),
				'footer'  => esc_html_x( 'Footer', 'nav menu location', 'pulsar' ),
			]
		);
	}

	/**
	 * Add custom image sizes.
	 *
	 * @return void
	 */
	public function image_sizes() {
		// add_image_size( '4x3', 640, 480, true );
	}

	/**
	 * Register custom image size names.
	 *
	 * @param array $sizes Array of image size names.
	 *
	 * @return array
	 */
	public function image_size_names( $sizes ) {
		return array_merge(
			$sizes,
			[
				// 'example' => __( 'Example' ),
			]
		);
	}
}
