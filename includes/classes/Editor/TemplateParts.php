<?php
/**
 * The Block Template Parts class is responsible for housing any custom code
 * related to template parts.
 *
 * @package Pulsar
 */

namespace Pulsar\Editor;

use Pulsar\Contracts\Bootable;

/**
 * Template parts.
 */
class TemplateParts implements Bootable {

	/**
	 * Bootstraps the class' actions/filters.
	 *
	 * @access public
	 * @return void
	 */
	public function boot() {
		add_filter( 'default_wp_template_part_areas', [ $this, 'custom_areas' ] );
	}

	/**
	 * Filter the core template part areas to add custom areas needed for
	 * the theme.
	 *
	 * Core only supports four icons at the moment, so the `icon` field
	 * value doesn't actually work. But the value must be defined to avoid
	 * an error.
	 * @link https://github.com/WordPress/gutenberg/issues/36814
	 *
	 * @param array $default_area_definitions An array of supported area objects.
	 *
	 * @return array
	 */
	public function custom_areas( array $default_area_definitions ) {

		$default_area_definitions[] = [
			'area'        => 'loop',
			'area_tag'    => 'div',
			'label'       => __( 'Loop', 'pulsar' ),
			'description' => __( 'The Loop template defines an area that typically contains the post list on archive-type pages.', 'pulsar' ),
			'icon'        => 'layout'
		];

		return $default_area_definitions;
	}
}
