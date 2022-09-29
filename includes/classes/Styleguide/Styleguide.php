<?php
/**
 * Styleguide.
 *
 * @package Pulsar
 */

namespace Pulsar\Styleguide;

use Pulsar\Contracts\Bootable;

/**
 * Styleguide class.
 */
class Styleguide implements Bootable {

	/**
	 * Path to the individual template parts.
	 */
	static $sections = '/includes/classes/Styleguide/sections/';

	/**
	 * Bootstraps the class' actions/filters.
	 *
	 * @return void
	 */
	public function boot() {
		add_action('init', [ $this, 'add_rewrite_rules' ] );
		add_action('query_vars', [ $this, 'add_query_vars' ] );
		add_action('template_redirect', [ $this, 'template_redirect' ] );
	}

	/**
	 * Add rewrite rule for the styleguide query var.
	 *
	 * @return void
	 */
	function add_rewrite_rules() {
		add_rewrite_rule( '^styleguide', 'index.php?styleguide=true', 'top' );
	}

	/**
	 * Add styleguide query var.
	 *
	 * @param array $qvars
	 *
	 * @return array
	 */
	function add_query_vars( $qvars ) {
		$qvars[] = 'styleguide';
		return $qvars;
	}

	/**
	 * Register the custom template for displaying the styleguide.
	 *
	 * @return void
	 */
	function template_redirect() {
		if ( get_query_var( 'styleguide' ) ) {
			include( get_template_directory() . '/includes/classes/Styleguide/template.php' );
			exit();
		}
	 }

	/**
	 * Get an individual styleguide section from a file name.
	 *
	 * @param string $file
	 *
	 * @return void
	 */
	public static function get_section( $file ) {
		?>
			<div id="styleguide-<?php echo esc_attr( $file ); ?>">
				<h2 class="text-2xl mb-4 font-bold"><?php echo self::get_section_title( $file ); ?></h2>
				<?php get_template_part( self::$sections . $file ); ?>
			</div>
		<?php
	}

	/**
	 * Format a file name for use as a section title.
	 *
	 * @param string $file
	 *
	 * @return string
	 */
	public static function get_section_title( $file ) {
		return ucwords( str_replace( '-', ' ', basename( $file, '.php' ) ) );
	}

	/**
	 * Load all sections from the styleguide directory.
	 *
	 * @return void
	 */
	public static function get_sections() {
		$files = self::get_files();
		?>
			<div class="space-y-12">
				<?php
				self::get_colours();
				self::get_fonts();

				foreach ( $files as $file ) {
					self::get_section( basename( $file, '.php' ) );
				}
				?>
			</div>
		<?php
	}

	/**
	 * Get an array of all the files in the sections directory.
	 *
	 * @return array
	 */
	public static function get_files() {
		$files = [];

		foreach ( glob( get_template_directory() . self::$sections . '/*.php' ) as $file ) {
			$files[] = $file;
		}

		return $files;
	}

	/**
	 * Build the navigation for the styleguide.
	 *
	 * @return void
	 */
	public static function get_navigation() {
		$files = self::get_files();
		?>

		<nav class="sticky top-0">
			<h2>Navigation</h2>

			<ul class="space-y-1">
				<li><a href="#styleguide-colours">Colours</a></li>
				<li><a href="#styleguide-fonts">Fonts</a></li>

				<?php foreach ( $files as $file ) : ?>
					<li>
						<a href="#styleguide-<?php echo esc_Attr( basename( $file, '.php' ) ); ?>">
							<?php echo self::get_section_title( $file ); ?>
						</a>
					</li>
				<?php endforeach; ?>

			</ul>
		</nav>
		<?php
	}

	/**
	 * Retrieve the registered font families from theme.json for display.
	 *
	 * @return void
	 */
	public static function get_fonts() {

		$json  = json_decode( file_get_contents( get_theme_file_path( 'theme.json' ) ) );
		$fonts = $json->settings->typography->fontFamilies;
        ?>

        <div id="styleguide-fonts">
            <h2 class="text-2xl mb-4 font-bold">Fonts</h2>

            <div class="grid md:grid-cols-2 lg:grid-cols-2 gap-4">
                <?php
                foreach ( $fonts as $font ) : ?>
                    <div>
						<h2 class="text-xl mb-1 font-bold"><?php echo esc_html( $font->name ); ?></h2>
                        <div class="text-2xl has-<?php echo esc_html( $font->slug ); ?>-font-family">
                            The quick brown fox jumps over the lazy dog
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
        <?php
	}

	/**
	 * Retrieve the registered colours from theme.json for display.
	 *
	 * @return void
	 */
    public static function get_colours() {

		$json    = json_decode( file_get_contents( get_theme_file_path( 'theme.json' ) ) );
		$colours = $json->settings->color->palette;
        ?>

        <div id="styleguide-colours">
            <h2 class="text-2xl mb-4 font-bold">Colours</h2>

            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <?php
                foreach ( $colours as $colour ) : ?>
                    <div>
                        <div class="aspect-square mb-4 has-<?php echo esc_attr( $colour->slug ); ?>-background-color"></div>
                        <h2 class="text-xl mb-0 font-bold"><?php echo esc_html( $colour->name ); ?></h2>
                        <div><?php echo esc_html( $colour->color ); ?></div>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
        <?php
	}
}
