<?php
/**
 * Wraps the post-template block with a clickable link.
 *
 * @package Pulsar
 */

<!--function pulsar_wrap_post_template_with_link( $block_content, $block ) {
    // Check if the block is the post-template block.
    if ( isset( $block['blockName'] ) && $block['blockName'] === 'core/post-template' ) {
        global $post;

        // Get the permalink for the current post.
        $post_url = get_permalink( $post->ID );

        // Wrap the block content with an anchor tag.
        return '<a href="' . esc_url( $post_url ) . '" class="card">' . $block_content . '</a>';
    }

    // Return unmodified content for other blocks.
    return $block_content;
}
add_filter( 'render_block', 'pulsar_wrap_post_template_with_link', 10, 2 );--!>
