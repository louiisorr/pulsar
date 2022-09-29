<?php
/**
 *
 * @package Pulsar
 */

get_header(); ?>

	<main id="content" class="site-main container scroll-smooth">
		<h1 class="text-2xl font-bold mb-8">Styleguide</h1>

		<div class="md:grid grid-cols-6 gap-8">
			<div class="col-span-5">
				<?php Pulsar\Styleguide\Styleguide::get_sections(); ?>
			</div>

			<div class="col-span-1 hidden md:block">
				<?php Pulsar\Styleguide\Styleguide::get_navigation(); ?>
			</div>
		</div>
	</main>

<?php
get_footer();
