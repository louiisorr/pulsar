import domReady from '@wordpress/dom-ready';
import { unregisterBlockStyle, registerBlockStyle } from '@wordpress/blocks';

/**
 * This file serves as an example of how to register and unregister block styles.
 */

domReady(() => {
	unregisterBlockStyle('core/button', 'outline', 'secondary');
	
	registerBlockStyle('core/button', {
		name: 'underline',
		label: 'Underline',
	});
	
	registerBlockStyle('core/button', {
		name: 'bordered',
		label: 'Bordered',
	});
});
