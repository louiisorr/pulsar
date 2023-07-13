<?php
/**
 * Title: Post Grid: Default
 * Slug: pulsar/post-grid-default
 * Description: Displays a grid of posts.
 * Categories: posts
 * Keywords: query, loop, grid, posts
 * Block Types: core/query
 * Viewport Width: 1536
 */
?>

<!-- wp:query {"queryId":0,"query":{"perPage":10,"pages":0,"offset":0,"postType":"post","order":"desc","orderBy":"date","author":"","search":"","exclude":[],"sticky":"","inherit":true},"align":"full","className":"pattern-post-grid-default","layout":{"type":"constrained"}} -->
<div class="wp-block-query alignfull pattern-post-grid-default">

	<!-- wp:group {"style":{"spacing":{"blockGap":"var:preset|spacing|lg"}},"layout":{"type":"flex","orientation":"vertical","flexWrap":"nowrap"}} -->
	<div class="wp-block-group">

		<!-- wp:group {"layout":{"type":"constrained"}} -->
		<div class="wp-block-group">

			<!-- wp:post-template {"style":{"spacing":{"blockGap":"var:preset|spacing|lg"}},"layout":{"type":"grid","columnCount":3}} -->

				<!-- wp:group {"tagName":"article","style":{"spacing":{"blockGap":"var:preset|spacing|sm"}},"layout":{"type":"default"}} -->
				<article class="wp-block-group">
					<!-- wp:post-featured-image {"isLink":true,"aspectRatio":"16/9"}} /-->

					<!-- wp:group {"tagName":"header","style":{"spacing":{"blockGap":"0"}},"layout":{"type":"constrained"}} -->
					<header class="wp-block-group">

						<!-- wp:group {"layout":{"type":"flex","flexWrap":"nowrap"},"fontSize":"sm"} -->
						<div class="wp-block-group has-sm-font-size">
							<!-- wp:post-terms {"term":"category"} /-->
						</div>
						<!-- /wp:group -->

						<!-- wp:post-title {"isLink":true} /-->

						<!-- wp:group {"style":{"spacing":{"blockGap":"var:preset|spacing|sm"}},"layout":{"type":"flex","flexWrap":"nowrap"},"fontSize":"sm"} -->
						<div class="wp-block-group has-sm-font-size">
							<!-- wp:post-date /-->
						</div>
						<!-- /wp:group -->

					</header>
					<!-- /wp:group -->

					<!-- wp:post-excerpt {"moreText":"Continue reading →","showMoreOnNewLine":false,"excerptLength":20} /-->

				</article>
				<!-- /wp:group -->

			<!-- /wp:post-template -->

		</div>
		<!-- /wp:group -->

		<!-- wp:query-pagination {"paginationArrow":"arrow","layout":{"type":"flex","justifyContent":"left","orientation":"horizontal"}} -->
		<!-- wp:query-pagination-previous /-->

		<!-- wp:query-pagination-numbers /-->

		<!-- wp:query-pagination-next /-->
		<!-- /wp:query-pagination -->

	</div>
	<!-- /wp:group -->

</div>
<!-- /wp:query -->
