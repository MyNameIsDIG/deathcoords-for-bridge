/**
 * Death Coordinates (deathCoords) - BedrockBridge Plugin
 * 
 * This bridge-addon provides players with their death coordinates both in-game and on Discord
 * 
 * by MyNameIsDIG (https://github.com/MyNameIsDIG)
 */

import { bridge } from '../addons'

bridge.events.playerDieLog.subscribe((e, player) => {
	let { x, y, z } = player.location;
	x = Math.floor(x);
	y = Math.floor(y);
	z = Math.floor(z);

	const dimension = player.dimension.id.slice('minecraft:'.length);

	// In-game
	player.sendMessage(`You died in ${dimension !== 'end' ? `the ${dimension}` : dimension} at ${x}, ${y}, ${z}`);

	// If you don't want the coordinates to be sent to Discord, you may comment out the line below:
	e.message += ` in ${dimension !== 'end' ? `the ${dimension}` : dimension} at ${x}, ${y}, ${z}`;
});
