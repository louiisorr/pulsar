<?php
/**
 * SVG template tags.
 *
 * @package Pulsar
 */

namespace Pulsar;

use Pulsar\Tools\Svg;

/**
 * Renders SVG output.
 *
 * @access public
 * @param  string $file The SVG file.
 * @param  array  $args An array or arguements to apply to the SVG.
 * @return void
 */
function display_svg( $file, $args = [] ) {
	$svg = new Svg( $file, $args );
	$svg->display();
}

/**
 * Returns SVG output.
 *
 * @access public
 * @param  string $file The SVG file.
 * @param  array  $args An array or arguements to apply to the SVG.
 * @return string
 */
function render_svg( $file, $args = [] ) {
	$svg = new Svg( $file, $args );
	return $svg->render();
}
